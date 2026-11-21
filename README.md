# Optika Healthcare — Next.js + ERP starter

A responsive corporate healthcare website starter based on the two supplied Optika Healthcare brochures.

## Run locally

1. Install Node.js 20.9 or later.
2. Extract this project.
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000

## Included

- Responsive corporate homepage
- About, services, corporate camp, health packages, diagnostics, eyewear and contact sections
- Separate package-rate tables transcribed from the PAID and UNPAID brochures
- WhatsApp, phone and email enquiry links
- ERP dashboard UI scaffold at `/admin`

## Proposed ERP modules

- Corporate clients and contacts
- Corporate camp scheduling and execution
- Employee/participant registration
- Health screening workflow
- Diagnostics, test orders and lab partner coordination
- Optical prescriptions, eyewear sales and stock
- Paid/unpaid brochure package and price management
- Inventory and consumables
- Quotations, invoices, receipts and payment tracking
- Staff accounts, roles and permissions
- Operational, camp and sales reports
- Audit log and system settings

## Pricing/content note

The brochure named `UNPAID` labels its corporate camp as free on page 2, but also lists package prices on pages 3–4. This starter preserves those printed rates in a separate “Unpaid brochure rates” section. It does not invent zero-priced diagnostic packages. Confirm exactly what the free camp includes before publishing.

The PAID brochure contains a separate diagnostic price list. The eyewear price chart appears in the UNPAID brochure. Verify all prices and service availability with Optika Healthcare before launch.

## Backend implementation still required

The `/admin` dashboard currently uses sample presentation data only. It is not yet connected to authentication, an API or a database. Build these before production use:

1. Authentication and server-side authorization.
2. Role-based access control (RBAC) for admin, operations, optometrist/clinical staff, lab coordinator, inventory and finance.
3. Database models and validated API routes.
4. Audit logs, backups, rate limiting and secure session handling.
5. Privacy and security controls for any personal or health-related data.

Do not collect patient health records in a general public contact form. Restrict screening records to authorized clinical users and confirm applicable Indian privacy, health-record and professional requirements before launch.
