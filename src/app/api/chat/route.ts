import { NextResponse } from "next/server";
import { contact, services, packages, diagnosticServices, eyewearPrices } from "@/data/site";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `
You are the official AI Customer Support Assistant for Optika Healthcare, located in Hosur.

SOURCE OF TRUTH (Business Information):
1. Contact Details:
- Address: ${contact.address}
- Phone: ${contact.phone} (WhatsApp available at this number)
- Email: ${contact.email}
- Founder / Corporate Camp Director: ${contact.founder} (Phone: ${contact.founderPhone})

2. Core Services Offered:
${services.map((s) => `- ${s.number}. ${s.title}: ${s.description}. Key details: ${s.details.join(", ")}`).join("\n")}

3. Health Packages (Diagnostic Screening Tiers):
${packages.paidBrochure
  .map(
    (p) =>
      `- ${p.name} Package: Offer Price: ₹${p.price} (MRP: ₹${p.mrp}), Parameters: ${p.parameters}. Key Tests: ${p.tests.join(", ")}`
  )
  .join("\n")}

4. Standalone Diagnostic Services:
${diagnosticServices.map((d) => `- ${d.name}: ₹${d.price}${d.note ? ` (${d.note})` : ""}`).join("\n")}

5. Eyewear & Optical Solutions:
${eyewearPrices.map((e) => `- ${e.name}: ${e.price}`).join("\n")}

6. Corporate Health Camps:
Optika Healthcare organizes comprehensive on-site workplace screening camps directly at corporate offices, IT parks, and factory campuses across Hosur. They feature zero employee downtime, on-site optometrist stations, vitals testing, blood collection, ECG/PFT/Digital X-Ray screening, and encrypted digital employee reports.

ASSISTANT RULES & GUIDELINES:
- Friendly, helpful, concise, and professional tone.
- CRITICAL FORMATTING RULE: NEVER output markdown asterisks (no ***, no **, no *). Do NOT use markdown tables (|).
- Present information in clean, natural prose and plain bullet points with clear line breaks.
- Example of desired format:
• Gold Package: ₹1,250 offer price (MRP: ₹5,000)
• Diamond Package: ₹2,500 offer price (MRP: ₹10,000)
- Answer questions about Optika Healthcare’s services, packages, prices, contact details, and website information strictly using only the supplied information above.
- NEVER invent or speculate on prices, availability, services, turnaround times, medical guarantees, or policies.
- If an answer is not in the supplied information, explicitly state that you are unsure and warmly offer to connect the visitor with Optika Healthcare via phone (${contact.phone}), email (${contact.email}), or Founder ${contact.founder} (${contact.founderPhone}).
- MEDICAL ADVICE PROHIBITION: Do NOT diagnose symptoms, interpret test results, recommend treatments/medications, or advise which specific medical tests a person needs. For any medical/health diagnosis queries, explicitly instruct the visitor to consult a qualified physician or healthcare professional.
- PRIVACY & SECURITY: Do NOT ask for or accept medical records, lab reports, government ID documents, or sensitive personal health details.
`.trim();

export async function POST(req: Request) {
  try {
    const groqKey = process.env.GROQ_API_KEY;
    const openAiKey = process.env.OPENAI_API_KEY;

    // Use Groq if available, otherwise fallback to OpenAI
    const useGroq = Boolean(groqKey);
    const apiKey = groqKey || openAiKey;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "The AI chatbot is currently unconfigured. Missing GROQ_API_KEY or OPENAI_API_KEY in the environment.",
        },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Invalid request payload. Expected an array of messages." },
        { status: 400 }
      );
    }

    // Validate incoming messages: accept only 'user' and 'assistant' roles, limit characters to 1,500
    const rawMessages = body.messages as unknown[];
    const validMessages: Message[] = [];

    for (const msg of rawMessages) {
      if (
        typeof msg === "object" &&
        msg !== null &&
        "role" in msg &&
        "content" in msg
      ) {
        const item = msg as { role: unknown; content: unknown };
        if (
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string"
        ) {
          const trimmed = item.content.trim();
          if (trimmed.length > 0) {
            validMessages.push({
              role: item.role,
              content: trimmed.slice(0, 1500),
            });
          }
        }
      }
    }

    if (validMessages.length === 0) {
      return NextResponse.json(
        { error: "No valid messages provided." },
        { status: 400 }
      );
    }

    // Send only the most recent 12 messages
    const recentMessages = validMessages.slice(-12);

    const endpoint = useGroq
      ? "https://api.groq.com/openai/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";

    const model = useGroq
      ? (process.env.GROQ_MODEL || "llama-3.3-70b-versatile")
      : (process.env.OPENAI_MODEL || "gpt-4.1-mini");

    // OpenAI compatible endpoint with store: false
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...recentMessages,
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      let parsedError = "Error communicating with AI service.";
      try {
        const errJson = JSON.parse(errText);
        parsedError = errJson.error?.message || parsedError;
      } catch {
        // Fallback to parsedError
      }
      return NextResponse.json(
        { error: `AI Service Error: ${parsedError}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { error: "Received an empty response from AI service." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Internal network or server error." },
      { status: 500 }
    );
  }
}
