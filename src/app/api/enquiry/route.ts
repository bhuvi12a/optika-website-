import { NextResponse } from "next/server";
import { getDatabase, addEnquiry } from "@/lib/db";

export async function GET() {
  const db = getDatabase();
  return NextResponse.json({ success: true, count: db.enquiries.length, data: db.enquiries });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, organization, serviceType, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (name, email, phone, message)." },
        { status: 400 }
      );
    }

    const newEnquiry = addEnquiry({
      name,
      email,
      phone,
      organization: organization || "",
      serviceType: serviceType || "General Healthcare Enquiry",
      message,
    });

    return NextResponse.json({ success: true, data: newEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
