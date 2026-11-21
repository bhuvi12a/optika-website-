import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization?: string;
  serviceType: string;
  message: string;
  createdAt: string;
  status: "new" | "contacted" | "scheduled";
}

export interface CampBookingRecord {
  id: string;
  companyName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  location: string;
  estimatedEmployees: number;
  preferredDate: string;
  packagesInterested: string[];
  notes?: string;
  createdAt: string;
  status: "pending" | "confirmed" | "completed";
}

interface DatabaseSchema {
  enquiries: EnquiryRecord[];
  campBookings: CampBookingRecord[];
}

const dataDir = path.join(process.cwd(), "data");
const dbFilePath = path.join(dataDir, "db.json");

function ensureDb(): DatabaseSchema {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(dbFilePath)) {
    const initialData: DatabaseSchema = {
      enquiries: [
        {
          id: "ENQ-1001",
          name: "Rajesh Kumar",
          email: "rajesh.k@innovatetech.com",
          phone: "+91 98450 12345",
          organization: "Innovate Tech Labs",
          serviceType: "Corporate Health Check-up",
          message: "Requesting a quote for 150 employees in Hosur SEZ.",
          createdAt: new Date().toISOString(),
          status: "contacted",
        },
      ],
      campBookings: [
        {
          id: "CAMP-2001",
          companyName: "TVS Motor Vendor Park",
          contactPerson: "Anand M",
          contactPhone: "+91 94432 55678",
          contactEmail: "anand@tvsvendors.in",
          location: "Bathalapalli Village, Hosur",
          estimatedEmployees: 250,
          preferredDate: "2026-12-10",
          packagesInterested: ["Silver", "Eye Check-up"],
          notes: "Need two optometrist counters and ECG machine.",
          createdAt: new Date().toISOString(),
          status: "confirmed",
        },
      ],
    };
    fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2), "utf8");
    return initialData;
  }

  try {
    const raw = fs.readFileSync(dbFilePath, "utf8");
    return JSON.parse(raw) as DatabaseSchema;
  } catch {
    return { enquiries: [], campBookings: [] };
  }
}

export function getDatabase(): DatabaseSchema {
  return ensureDb();
}

export function saveDatabase(data: DatabaseSchema): void {
  ensureDb();
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), "utf8");
}

export function addEnquiry(data: Omit<EnquiryRecord, "id" | "createdAt" | "status">): EnquiryRecord {
  const db = getDatabase();
  const newRecord: EnquiryRecord = {
    ...data,
    id: `ENQ-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  db.enquiries.unshift(newRecord);
  saveDatabase(db);
  return newRecord;
}

export function addCampBooking(data: Omit<CampBookingRecord, "id" | "createdAt" | "status">): CampBookingRecord {
  const db = getDatabase();
  const newRecord: CampBookingRecord = {
    ...data,
    id: `CAMP-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString(),
    status: "pending",
  };
  db.campBookings.unshift(newRecord);
  saveDatabase(db);
  return newRecord;
}
