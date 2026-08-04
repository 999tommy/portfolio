// footer.jsx — clean minimal footer, electric amber redesign
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

// scroll-based links (home page only)
const scrollLinks = [
  { name: "About",      link: "about"      },
  { name: "Experience", link: "experience" },
  { name: "Contact",    link: "contact"    },
];

// page-based links
const pageLinks = [
  { name: "Projects",     href: "/projects"     },
  { name: "Credentials",  href: "/credentials"  },
];

const socials = [
  { icon: <FaLinkedin  size={14} />, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/adegboye-tommy-125098254' },
  { icon: <FaGithub    size={14} />, label: 'GitHub',    href: 'https://github.com/999tommy'                          },
  { icon: <FaTwitter   size={14} />, label: 'Twitter',   href: 'https://x.com/999tommy__'                             },
  { icon: <FaInstagram size={14} />, label: 'Instagram', href: 'https://www.instagram.com/syntaxdev__'                },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer style={{ borderTop: '1px solid rgba(232,130,10,0.1)', background: 'rgba(5,6,12,0.98)' }}>
      <div className="section-container" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div
              className="font-bold text-xl mb-2 text-amber-gradient"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em' }}
            >
              Tommy Adegboye
            </div>
            <p className="text-xs leading-relaxed mb-1" style={{ color: 'rgba(242,242,242,0.38)', fontFamily: "'Inter', sans-serif" }}>
              Tech Entrepreneur & Fullstack Engineer.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(242,242,242,0.38)', fontFamily: "'Inter', sans-serif" }}>
              CEO of{' '}
              <a
                href="https://axist.app"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--amber)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                Axist Technologies
              </a>
              {' '}· Building products that matter.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-4">
              {socials.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="section-eyebrow mb-5">Navigation</div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {/* Home */}
              <RouterLink
                to="/"
                className="text-sm cursor-pointer transition-colors nav-link"
                style={{ color: 'rgba(242,242,242,0.4)', fontFamily: "'Inter', sans-serif", display: 'inline-block' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,242,242,0.4)'}
              >
                Home
              </RouterLink>

              {/* Scroll links */}
              {scrollLinks.map((link) => (
                isHome ? (
                  <ScrollLink
                    key={link.name}
                    to={link.link}
                    smooth={true}
                    duration={800}
                    offset={-90}
                    className="text-sm cursor-pointer transition-colors nav-link"
                    style={{ color: 'rgba(242,242,242,0.4)', fontFamily: "'Inter', sans-serif", display: 'inline-block' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,242,242,0.4)'}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={link.name}
                    to={`/#${link.link}`}
                    className="text-sm cursor-pointer transition-colors nav-link"
                    style={{ color: 'rgba(242,242,242,0.4)', fontFamily: "'Inter', sans-serif", display: 'inline-block' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,242,242,0.4)'}
                  >
                    {link.name}
                  </RouterLink>
                )
              ))}

              {/* Page links */}
              {pageLinks.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.href}
                  className="text-sm cursor-pointer transition-colors nav-link"
                  style={{ color: 'rgba(242,242,242,0.4)', fontFamily: "'Inter', sans-serif", display: 'inline-block' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,242,242,0.4)'}
                >
                  {link.name}
                </RouterLink>
              ))}
            </div>
          </div>

          {/* Ventures */}
          <div>
            <div className="section-eyebrow mb-5">Ventures</div>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Axist Technologies', url: 'https://axist.app', desc: 'AI SaaS Platform' },
                { name: 'NaijaBiz',           url: 'https://naijabiz.org', desc: 'Business Directory' },
              ].map(({ name, url, desc }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div whileHover={{ x: 3 }}>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(242,242,242,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {name} ↗
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(232,130,10,0.5)', fontFamily: "'JetBrains Mono', monospace" }}>
                      {desc}
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hr-amber" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
          <p className="text-xs" style={{ color: 'rgba(242,242,242,0.22)', fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Tommy Adegboye. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs" style={{ color: 'rgba(242,242,242,0.18)', fontFamily: "'JetBrains Mono', monospace" }}>
              // Built with React + Vite + Three.js
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: 'rgba(232,130,10,0.08)',
                border: '1px solid rgba(232,130,10,0.2)',
                color: 'var(--amber)',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.05, background: 'rgba(232,130,10,0.14)' }}
              whileTap={{ scale: 0.97 }}
            >
              ↑ Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;