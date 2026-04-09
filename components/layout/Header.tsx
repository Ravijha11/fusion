"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  MessageCircle,
  ChevronDown,
  Cpu,
  ShieldCheck,
  Zap,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/Services";
import { BOOK_SERVICE_BG, BOOK_SERVICE_FG } from "@/lib/book-service-theme";
import { trackPhoneClick } from "@/lib/tracking";

const PHONE_DISPLAY = "555-123-4567";
const PHONE_HREF = "tel:+15551234567";
/** Nav / mega-menu accent (orange) */
const CTA_ORANGE = "#FF5722";

const bookServiceBtnStyle = {
  backgroundColor: BOOK_SERVICE_BG,
  color: BOOK_SERVICE_FG,
} as const;

const bookServiceBtnClass = cn(
  "inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wide shadow-sm transition-none sm:px-6 sm:py-3 sm:text-sm",
  "rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
);

type NavIcon = typeof Home;

type NavItem = {
  href: string;
  label: string;
  icon: NavIcon;
  rotate: "rtt-1" | "rtt-2";
  hasMegaMenu?: boolean;
  submenu?: { href: string; label: string }[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home, rotate: "rtt-2" },
  { href: "/services", label: "Services", icon: Cpu, rotate: "rtt-2", hasMegaMenu: true },
  { href: "/about", label: "About", icon: ShieldCheck, rotate: "rtt-1" },
  { href: "/how-it-works", label: "How we work", icon: ShieldCheck, rotate: "rtt-1" },
  { href: "/faq", label: "FAQ", icon: MessageCircle, rotate: "rtt-2" },
  { href: "/contact", label: "Contact", icon: MessageCircle, rotate: "rtt-1" },
];

function isRouteActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return false;
  const path = href.split("#")[0] || href;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceCatId, setActiveServiceCatId] = useState(
    servicesData[0]?.id ?? "refrigerator",
  );
  const servicesCloseTimerRef = useRef<number | null>(null);

  const cancelTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const scheduleClose = (
    ref: React.MutableRefObject<number | null>,
    setter: (v: boolean) => void,
  ) => {
    cancelTimer(ref);
    ref.current = window.setTimeout(() => {
      setter(false);
      ref.current = null;
    }, 200);
  };

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const activeCategory =
    servicesData.find((cat) => cat.id === activeServiceCatId) || servicesData[0];

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] flex flex-col">
        <div className="flex h-10 w-full items-center justify-center gap-2 bg-[#0f172a] px-4 text-sm font-semibold text-white sm:text-base">
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick()}
            className="inline-flex items-center gap-2"
            aria-label={`Call us at ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
            <span className="tabular-nums tracking-wide">{PHONE_DISPLAY}</span>
          </a>
          <span className="mx-2 text-white/40" aria-hidden>
            |
          </span>
          <a
            href="https://www.digitalbull.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-200 underline-offset-4 hover:underline"
            aria-label="Visit www.digitalbull.co.in"
          >
            www.digitalbull.co.in
          </a>
        </div>

        <header className="relative w-full border-b border-gray-200 bg-white shadow-sm">
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 lg:h-16 lg:gap-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex min-w-0 shrink-0 items-center gap-2 opacity-95 hover:opacity-100 lg:gap-3"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                <Image
                  src="/Logo/digital-bull-logo-removebg-preview.png"
                  alt="DigitalBull logo"
                  fill
                  sizes="56px"
                  className="rounded-lg object-contain"
                />
              </div>
              <span className="hidden text-lg font-extrabold uppercase tracking-tight text-slate-900 sm:block sm:text-xl">
                Digital<span style={{ color: CTA_ORANGE }}>Bull</span>
              </span>
            </Link>

            {/* Desktop nav — reference: spaced links, active orange */}
            <nav
              className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto lg:flex xl:gap-1 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0"
              aria-label="Main"
            >
              {navItems.map((item) => {
                const active =
                  isRouteActive(pathname, item.href) ||
                  (item.hasMegaMenu && servicesOpen) ||
                  (item.submenu?.some((s) => isRouteActive(pathname, s.href)) ?? false);

                if (item.hasMegaMenu) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        cancelTimer(servicesCloseTimerRef);
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => scheduleClose(servicesCloseTimerRef, setServicesOpen)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 px-2 py-2 text-xs font-medium uppercase tracking-wide text-slate-800 xl:px-3 xl:text-sm",
                          active && "font-semibold",
                        )}
                        style={active ? { color: CTA_ORANGE } : undefined}
                        onMouseEnter={() => {
                          cancelTimer(servicesCloseTimerRef);
                          setServicesOpen(true);
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 shrink-0 transition-transform",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href as Parameters<typeof Link>[0]["href"]}
                    className={cn(
                      "shrink-0 px-2 py-2 text-xs font-medium uppercase tracking-wide text-slate-800 xl:px-3 xl:text-sm",
                      active && "font-semibold",
                    )}
                    style={active ? { color: CTA_ORANGE } : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Link href="/contact" className={bookServiceBtnClass} style={bookServiceBtnStyle}>
                Book Service
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 text-gray-900 lg:hidden"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <div className="flex flex-col justify-center gap-1">
                  <span
                    className={cn(
                      "block h-0.5 w-6 bg-gray-900 transition-transform",
                      menuOpen ? "translate-y-[3px] rotate-45" : "",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-0.5 w-6 bg-gray-900 transition-transform",
                      menuOpen ? "-translate-y-[3px] -rotate-45" : "",
                    )}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Full-width services mega menu */}
          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 top-full z-[65] border-t border-gray-100 bg-white shadow-xl"
                onMouseEnter={() => cancelTimer(servicesCloseTimerRef)}
                onMouseLeave={() => scheduleClose(servicesCloseTimerRef, setServicesOpen)}
              >
                <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-4 flex flex-col gap-2 border-r border-gray-100 pr-6">
                      <span className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Categories
                      </span>
                      {servicesData.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onMouseEnter={() => setActiveServiceCatId(cat.id)}
                          className={cn(
                            "rounded-lg px-4 py-3 text-left text-sm font-bold transition-colors",
                            activeServiceCatId === cat.id
                              ? "text-white"
                              : "text-slate-600 hover:bg-gray-100",
                          )}
                          style={
                            activeServiceCatId === cat.id
                              ? { backgroundColor: CTA_ORANGE }
                              : undefined
                          }
                        >
                          {cat.title}
                        </button>
                      ))}
                    </div>
                    <div className="col-span-8">
                      <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Available solutions
                      </span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {activeCategory.items.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="group rounded-xl border border-transparent p-4 transition-colors hover:border-gray-100 hover:bg-gray-50"
                            onClick={() => setServicesOpen(false)}
                          >
                            <span
                              className="font-bold uppercase tracking-tight text-slate-900 group-hover:underline"
                              style={{ textDecorationColor: CTA_ORANGE }}
                            >
                              {service.title}
                            </span>
                            <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div
                        className="mt-6 flex items-center gap-3 rounded-xl border px-4 py-3"
                        style={{ borderColor: `${CTA_ORANGE}33`, backgroundColor: `${CTA_ORANGE}0d` }}
                      >
                        <Zap className="h-5 w-5" style={{ color: CTA_ORANGE }} />
                        <div>
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: CTA_ORANGE }}
                          >
                            Priority support
                          </span>
                          <p className="text-xs font-medium text-slate-600">
                            Fast response when available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      <div
        className="w-full shrink-0 [height:calc(2.5rem+3.5rem)] lg:[height:calc(2.5rem+4rem)]"
        aria-hidden
      />

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-50 lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto pt-6">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 pb-4">
                <span className="text-lg font-bold text-slate-900">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold uppercase text-slate-600"
                >
                  Close
                </button>
              </div>
              <nav className="flex flex-col px-4 py-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 py-3">
                    {item.hasMegaMenu ? (
                      <>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-lg font-semibold text-slate-900"
                          style={{ color: isRouteActive(pathname, item.href) ? CTA_ORANGE : undefined }}
                        >
                          {item.label}
                        </Link>
                        <div className="mt-2 ml-3 flex flex-col gap-2">
                          {servicesData.flatMap((c) =>
                            c.items.map((s) => (
                              <Link
                                key={s.id}
                                href={s.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-slate-600"
                              >
                                {s.title}
                              </Link>
                            )),
                          )}
                        </div>
                      </>
                    ) : item.submenu?.length ? (
                      <>
                        <p className="text-lg font-semibold text-slate-900">{item.label}</p>
                        <div className="mt-2 ml-3 flex flex-col gap-2">
                          {item.submenu.map((sub) =>
                            sub.href.startsWith("mailto:") || sub.href.startsWith("tel:") ? (
                              <a
                                key={sub.label}
                                href={sub.href}
                                onClick={() => {
                                  if (sub.href === PHONE_HREF) trackPhoneClick();
                                  setMenuOpen(false);
                                }}
                                className="text-sm text-slate-600"
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-slate-600"
                              >
                                {sub.label}
                              </Link>
                            ),
                          )}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href as Parameters<typeof Link>[0]["href"]}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg font-semibold text-slate-900"
                        style={{ color: isRouteActive(pathname, item.href) ? CTA_ORANGE : undefined }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={cn(bookServiceBtnClass, "mt-6 w-full justify-center")}
                  style={bookServiceBtnStyle}
                >
                  Book Service
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
