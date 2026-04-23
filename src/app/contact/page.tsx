import type { Metadata } from "next";
import { Mail, Github, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | SagaCode",
  description: "Get in touch with SagaCode for projects, collaborations, or just to say hello.",
};

const contactMethods = [
  {
    href: "mailto:sagacode86@gmail.com",
    icon: Mail,
    label: "Email",
    value: "sagacode86@gmail.com",
  },
  {
    href: "https://github.com/sagacode-studio",
    icon: Github,
    label: "GitHub",
    value: "github.com/sagacode-studio",
    external: true,
  },
  {
    href: "#",
    icon: MapPin,
    label: "Location",
    value: "Indonesia 🇮🇩",
  },
];

export default function ContactPage() {
  return (
    <article className="min-h-screen pt-24">
      <section className="container-narrow py-16">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Let&apos;s <span className="gradient-text-shimmer">Connect</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Have a project, idea, or just want to say hello? Don&apos;t hesitate to reach out! 
            Response guaranteed (as fast as my coffee refills ☕)
          </p>
        </header>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <nav aria-label="Contact methods" className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/20">
                  <method.icon className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{method.label}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
              </a>
            ))}
          </nav>

          <aside className="rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-8">
            <h2 className="text-xl font-bold">Send a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Click the button below to send an email directly. Or DM via social media works too!
            </p>
            <a
              href="mailto:sagacode86@gmail.com?subject=Hi%20SagaCode!"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary py-3 font-semibold text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-xl"
            >
              <Send size={18} />
              Send Email
            </a>
          </aside>
        </section>

        <aside className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-transparent p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold">Why collaborate?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Because the best things happen when minds collaborate. 
              Whether it&apos;s a game project, frontend challenge, or just wanting to build something cool together — I&apos;m here!
            </p>
          </div>
        </aside>
      </section>
    </article>
  );
}