import { type ReactNode, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PROPERTY } from '@/lib/propertyData';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/property', label: 'Apartment Details' },
  { to: '/historical-landmark', label: 'Historical Landmark' },
  { to: '/contact', label: 'Apply' },
];

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="container flex h-16 items-center justify-between gap-4" aria-label="Main">
          <Link
            to="/"
            className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            onClick={() => setOpen(false)}
          >
            <img src="/favicon.svg" alt="" className="size-11 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="font-serif font-bold tracking-tight text-primary">
                <span className="text-3xl">404</span>{' '}
                <span className="text-base font-medium align-middle">E Main</span>
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Niles, MI
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-md px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    isActive
                      ? 'text-accent'
                      : 'text-foreground/80 hover:text-accent',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild size="sm" className="ml-3">
              <a href={PROPERTY.smsHref}>Text to Apply</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = link.end
                  ? location.pathname === link.to
                  : location.pathname.startsWith(link.to);
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-4 py-3 text-base font-medium transition-colors',
                      isActive ? 'bg-secondary text-accent' : 'text-foreground/80 hover:bg-muted',
                    )}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
              <Button asChild className="mt-2" onClick={() => setOpen(false)}>
                <a href={PROPERTY.smsHref}>Text to Apply</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="" className="size-12" />
              <div className="leading-tight">
                <p className="font-serif font-bold">
                  <span className="text-3xl">404</span>{' '}
                  <span className="text-lg font-medium">E Main Street</span>
                </p>
                <p className="text-sm text-primary-foreground/70">Former {PROPERTY.historicName}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              {PROPERTY.description}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>{PROPERTY.fullAddress}</li>
              <li>
                <a
                  href={PROPERTY.phoneHref}
                  className="transition-colors hover:text-primary-foreground"
                >
                  Call Us
                </a>
              </li>
              <li>Onsite Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15">
          <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/60 sm:flex-row">
            <p>© {new Date().getFullYear()} 404 E Main Street. All rights reserved.</p>
            <p>
              Vibed with{' '}
              <a
                href="https://shakespeare.diy"
                className="font-medium text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Shakespeare
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
