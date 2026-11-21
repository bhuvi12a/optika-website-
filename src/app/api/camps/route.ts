import { NextResponse } from "next/server";
import { getDatabase, addCampBooking } from "@/lib/db";

export async function GET() {
  const db = getDatabase();
  return NextResponse.json({ success: true, count: db.campBookings.length, data: db.campBookings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactPerson,
      contactPhone,
      contactEmail,
      location,
      estimatedEmployees,
      preferredDate,
      packagesInterested,
      notes,
    } = body;

    if (!companyName || !contactPerson || !contactPhone || !contactEmail || !location) {
      return NextResponse.json(
        { success: false, error: "Missing required corporate booking details." },
        { status: 400 }
      );
    }

    const newBooking = addCampBooking({
      companyName,
      contactPerson,
      contactPhone,
      contactEmail,
      location,
      estimatedEmployees: Number(estimatedEmployees) || 50,
      preferredDate: preferredDate || new Date().toISOString().split("T")[0],
      packagesInterested: Array.isArray(packagesInterested) ? packagesInterested : ["General Health Check"],
      notes: notes || "",
    });

    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to book corporate camp." },
      { status: 500 }
    );
  }
}
