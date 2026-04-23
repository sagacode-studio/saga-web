"use client";

import { useState, useEffect } from "react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";

interface Subscriber {
  email: string;
  date: string;
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("sagacode_subscribers");
    if (stored) {
      const subs: Subscriber[] = JSON.parse(stored);
      setCount(subs.length);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newSub: Subscriber = {
      email,
      date: new Date().toISOString()
    };
    
    const stored = localStorage.getItem("sagacode_subscribers");
    const existing: Subscriber[] = stored ? JSON.parse(stored) : [];
    existing.push(newSub);
    localStorage.setItem("sagacode_subscribers", JSON.stringify(existing));
    
    setCount(existing.length);
    setSubmitted(true);
    setEmail("");
    setLoading(false);
  };

  return (
    <section className="py-24">
      <div className="container-narrow">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-8 md:p-12 text-center">
          <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-purple-500/20 mb-6">
            <Mail className="text-purple-500" size={24} />
          </div>
          
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Stay in the <span className="gradient-text-shimmer">Loop</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Get updates on new projects, tech insights, and occasional thoughts on building cool stuff. No spam, ever.
          </p>

          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-green-500">
              <ArrowRight size={20} />
              <span>Thanks! You&apos;re on the list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : "Subscribe"}
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-muted-foreground">
            Join <span className="font-bold text-purple-500">{count}</span> developers and founders staying updated.
          </p>
        </div>
      </div>
    </section>
  );
}