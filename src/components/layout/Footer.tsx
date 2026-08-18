import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { company, navLinks } from "@/data/leasingData";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-6 max-w-sm text-sm leading-7 text-cream/65">
            {company.legalName} develops, owns, and leases commercial real
            estate for tenants who expect institutional quality and a lasting
            public address.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.24em] text-gold-light">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.24em] text-gold-light">
            Leasing office
          </p>
          <ul className="mt-5 space-y-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>
                {company.address}
                <br />
                {company.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href={`tel:${company.phone}`} className="hover:text-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </li>
          </ul>
          <a
            href="#inquire"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-light"
          >
            Start a leasing conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
        <p>Priority-list inquiries receive the leasing package first.</p>
      </Container>
    </footer>
  );
}
