import Link from "next/link";
import Image from "next/image";
import {
  Activity, ArrowUpRight, Building2, CalendarDays, ClipboardList,
  Eye, FlaskConical, HeartPulse, Package, ShieldCheck, Users,
  Wallet, Stethoscope, Settings, FileText
} from "lucide-react";

const modules = [
  { title: "Corporate Clients", desc: "Companies, contacts and contracts", icon: Building2, href: "#corporate-clients" },
  { title: "Camp Scheduling", desc: "Plan camps, teams and locations", icon: CalendarDays, href: "#camp-scheduling" },
  { title: "Employee Registration", desc: "Register participants for each camp", icon: Users, href: "#employee-registration" },
  { title: "Health Screening", desc: "Capture vitals and screening workflow", icon: HeartPulse, href: "#health-screening" },
  { title: "Diagnostics & Lab Partners", desc: "Test orders, lab coordination and reports", icon: FlaskConical, href: "#diagnostics" },
  { title: "Optical & Eyewear", desc: "Frames, lenses, prescriptions and stock", icon: Eye, href: "#optical" },
  { title: "Packages & Pricing", desc: "Manage paid and camp package rates", icon: ClipboardList, href: "#packages" },
  { title: "Inventory", desc: "Track optical and camp consumables", icon: Package, href: "#inventory" },
  { title: "Billing & Payments", desc: "Invoices, receipts and outstanding dues", icon: Wallet, href: "#billing" },
  { title: "Staff & Roles", desc: "Team members and access permissions", icon: ShieldCheck, href: "#staff" },
  { title: "Reports", desc: "Camp, sales and operations reports", icon: FileText, href: "#reports" },
  { title: "Settings", desc: "Company, notifications and configuration", icon: Settings, href: "#settings" },
];

const tasks = [
  ["Corporate camp follow-up", "Acme Manufacturing", "Enquiry", "Needs follow-up"],
  ["Confirm optometrist team", "Hosur Industrial Unit", "Camp", "In progress"],
  ["Send diagnostic quotation", "Sri Lakshmi Textiles", "Quotation", "Pending"],
];

export default function AdminPage() {
  return (
    <main className="erp-shell">
      <aside className="erp-sidebar">
        <Link href="/" className="erp-brand mb-4">
          <Image
            src="/optika-logo.png"
            alt="Optika Healthcare Logo"
            width={160}
            height={42}
            className="h-9 w-auto object-contain brightness-0 invert"
          />
        </Link>
        <div className="erp-nav-label">WORKSPACE</div>
        <a className="erp-nav-item active" href="#overview"><Activity size={17}/> Overview</a>
        <a className="erp-nav-item" href="#modules"><Building2 size={17}/> ERP Modules</a>
        <a className="erp-nav-item" href="#operations"><ClipboardList size={17}/> Operations</a>
        <div className="erp-nav-label">SYSTEM</div>
        <a className="erp-nav-item" href="#staff"><Users size={17}/> Users & Roles</a>
        <a className="erp-nav-item" href="#settings"><Settings size={17}/> Settings</a>
        <div className="erp-sidebar-bottom"><ShieldCheck size={16}/><span>Secure workspace<br/><small>Access controls required before launch</small></span></div>
      </aside>

      <section className="erp-main" id="overview">
        <header className="erp-topbar">
          <div><span className="erp-breadcrumb">Workspace / Overview</span><h1>Operations dashboard</h1></div>
          <Link href="/" className="erp-view-site">View website <ArrowUpRight size={15}/></Link>
        </header>

        <div className="erp-welcome">
          <div><span className="erp-overline">OPTIKA HEALTHCARE ERP</span><h2>Good morning, Admin</h2><p>Here’s an overview of your corporate healthcare operations.</p></div>
          <div className="erp-date"><CalendarDays size={17}/> Operations workspace</div>
        </div>

        <div className="erp-stats">
          <Stat icon={Building2} label="Corporate clients" value="—" note="Connect database to show live count"/>
          <Stat icon={CalendarDays} label="Upcoming camps" value="—" note="Camp schedule summary"/>
          <Stat icon={ClipboardList} label="Open enquiries" value="—" note="Enquiry pipeline summary"/>
          <Stat icon={Wallet} label="Pending payments" value="—" note="Receivables summary"/>
        </div>

        <section className="erp-section" id="modules">
          <div className="erp-section-heading"><div><span className="erp-overline">BUSINESS MANAGEMENT</span><h2>ERP modules</h2></div><span className="erp-tag">Planned workspace</span></div>
          <div className="erp-module-grid">
            {modules.map((module) => {
              const Icon = module.icon;
              return <a href={module.href} className="erp-module-card" key={module.title}><span className="erp-module-icon"><Icon size={19}/></span><span><b>{module.title}</b><small>{module.desc}</small></span><ArrowUpRight size={15} className="erp-module-arrow"/></a>;
            })}
          </div>
        </section>

        <section className="erp-section" id="operations">
          <div className="erp-section-heading"><div><span className="erp-overline">DAILY WORKFLOW</span><h2>Operations queue</h2></div><span className="erp-tag">Sample layout</span></div>
          <div className="erp-table-wrap">
            <table className="erp-table"><thead><tr><th>Task</th><th>Client / Location</th><th>Type</th><th>Status</th></tr></thead><tbody>
              {tasks.map((task) => <tr key={task[0]}>{task.map((value, i) => <td key={i}>{i === 3 ? <span className="erp-status">{value}</span> : value}</td>)}</tr>)}
            </tbody></table>
          </div>
        </section>

        <div className="erp-notice"><ShieldCheck size={20}/><div><b>Implementation and patient-data security</b><p>This dashboard is currently a UI scaffold with sample labels, not a connected ERP. Before using real business or health information, add sign-in, server-side role permissions, audit logs, encrypted transport/storage, backups and a privacy-compliant data workflow. Keep patient screening records restricted to authorized clinical users.</p></div></div>
      </section>
    </main>
  );
}

function Stat({ icon: Icon, label, value, note }: { icon: React.ElementType; label: string; value: string; note: string }) {
  return <article className="erp-stat"><span className="erp-stat-icon"><Icon size={19}/></span><span className="erp-stat-label">{label}</span><strong>{value}</strong><small>{note}</small></article>;
}
