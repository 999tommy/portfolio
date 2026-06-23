// footer.jsx — premium dark-gold footer
import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';
import twitterIcon from '../assets/icons-white/twitter-ico.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Credentials", link: "certificates" },
    { name: "Contact", link: "contact" },
  ];

  const socials = [
    { icon: linkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adegboye-tommy-125098254' },
    { icon: githubIcon, label: 'GitHub', href: 'https://github.com/999tommy' },
    { icon: twitterIcon, label: 'Twitter', href: 'https://x.com/999tommy__' },
  ];

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(212,168,67,0.12)',
        background: 'rgba(8,8,8,0.95)',
      }}
    >
      <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="font-bold text-lg mb-2 text-gold-gradient" style={{ fontFamily: "'Inter', sans-serif" }}>
              Tommy Adegboye
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,232,232,0.4)', fontFamily: "'Inter', sans-serif" }}>
              Tech Entrepreneur & Software Engineer. CEO of{' '}
              <a
                href="https://axist.app"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#D4A843', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                Axist Technologies
              </a>. Building things that matter.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-4">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label={label}
                >
                  <img src={icon} alt={label} style={{ width: '14px', height: '14px', filter: 'brightness(0.75)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="section-label mb-4">Navigation</div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.link}
                  smooth={true}
                  duration={800}
                  offset={-90}
                  className="text-sm cursor-pointer transition-colors"
                  style={{ color: 'rgba(232,232,232,0.45)', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,232,232,0.45)'}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div>
            <div className="section-label mb-4">Companies</div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Axist Technologies', url: 'https://axist.app' },
                { name: 'NaijaBiz', url: 'https://naijabiz.org' },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(232,232,232,0.45)', fontFamily: "'Inter', sans-serif", textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#D4A843'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,232,232,0.45)'}
                >
                  {name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hr-gold" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
          <p className="text-xs" style={{ color: 'rgba(232,232,232,0.25)', fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Tommy Adegboye. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(232,232,232,0.2)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            // Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;