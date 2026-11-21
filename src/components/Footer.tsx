import Image from "next/image";
import { contact } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <div className="mb-3">
            <Image
              src="/optika-logo.png"
              alt="Optika Healthcare Logo"
              width={180}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p>Optical &amp; Diagnostics</p>
          <p className="muted">The knowledge to save lives. The location to save time.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p><a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a></p>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
        <div>
          <h3>Visit us</h3>
          <p>{contact.address}</p>
          <p>Founder &amp; CEO: {contact.founder}</p>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Optika Healthcare. All rights reserved.</div>
    </footer>
  );
}
