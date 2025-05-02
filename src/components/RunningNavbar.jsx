import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Zapatillas", href: "/category/shoes" },
  { name: "Ropa", href: "/category/apparel" },
  { name: "Accesorios", href: "/category/accessories" },
  { name: "Guías", href: "/guides" },
  { name: "Contacto", href: "/contact" },
];

export default function RunningNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-lg shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-white font-extrabold text-2xl tracking-tight"
          >
            StrideGear
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-white font-medium hover:text-yellow-300 transition-colors"
                >
                  {link.name}
                </a>
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 bg-yellow-300"
                  layoutId="underline"
                  initial={false}
                  animate={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Buscar">
              <Search className="w-5 h-5 text-white hover:text-yellow-300 transition-colors" />
            </button>
            <button aria-label="Carrito">
              <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-300 transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gradient-to-b from-blue-600 to-indigo-600"
          >
            <ul className="px-6 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-white text-lg font-medium hover:text-yellow-300 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex space-x-6 pt-2">
                <button aria-label="Buscar">
                  <Search className="w-5 h-5 text-white hover:text-yellow-300 transition-colors" />
                </button>
                <button aria-label="Carrito">
                  <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-300 transition-colors" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
