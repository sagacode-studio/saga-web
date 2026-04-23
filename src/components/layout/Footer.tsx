import Link from "next/link";
import { Github, Mail, ExternalLink } from "lucide-react";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/sagacode-studio", label: "GitHub", icon: Github },
  { href: "mailto:sagacode86@gmail.com", label: "Email", icon: Mail },
  { href: "https://sagacode.studio", label: "Website", icon: ExternalLink },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <section>
            <Link href="/" className="text-xl font-bold gradient-text">
              SagaCode
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Small but Mighty. Building the future with AI-powered collaboration.
            </p>
          </section>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 font-semibold">Navigation</h2>
            <ul className="grid grid-cols-2 gap-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-purple-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section>
            <h2 className="mb-4 font-semibold">Connect</h2>
            <ul className="flex gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-purple-500"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SagaCode. Crafted with care and AI.</p>
        </div>
      </div>
    </footer>
  );
}