import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "Zapatillas", href: "/category/shoes" },
  { name: "Ropa", href: "/category/apparel" },
  { name: "Accesorios", href: "/category/accessories" },
  { name: "Guías", href: "/guides" },
  { name: "Contacto", href: "/contact" },
];

export default function RunningFooter() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enlaces */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-6">
              <a aria-label="Facebook" href="https://facebook.com">
                <Facebook className="w-6 h-6 hover:text-yellow-300 transition-colors" />
              </a>
              <a aria-label="Twitter" href="https://twitter.com">
                <Twitter className="w-6 h-6 hover:text-yellow-300 transition-colors" />
              </a>
              <a aria-label="Instagram" href="https://instagram.com">
                <Instagram className="w-6 h-6 hover:text-yellow-300 transition-colors" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com">
                <Linkedin className="w-6 h-6 hover:text-yellow-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Suscríbete</h4>
            <p className="mb-4 text-sm">
              Recibe las últimas guías, comparativas y ofertas de afiliado
              directamente en tu correo.
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full sm:flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 px-5 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Mi Sitio de Running. Afiliado Amazon.
        </div>
      </div>
    </motion.footer>
  );
}
