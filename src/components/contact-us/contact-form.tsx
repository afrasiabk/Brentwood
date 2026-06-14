"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const serviceOptions = [
  "AI / ML",
  "Blockchain",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud & DevOps",
  "Cybersecurity",
  "Marketing",
];

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("services", selectedServices.join(", "));

    startTransition(async () => {
      try {
        setError(null);
        await submitContactForm(fd);
        setSubmitted(true);
        form.reset();
        setSelectedServices([]);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Something went wrong";
        setError(msg);
      }
    });
  };

  if (submitted) {
    return (
      <section className="relative py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto glass-strong rounded-3xl p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-300/15 border border-amber-300/30 mx-auto flex items-center justify-center mb-6">
              <Check className="w-7 h-7 text-amber-200" strokeWidth={2} />
            </div>
            <h3 className="fluid-h3 text-white mb-4">
              Thank you — <span className="font-serif-italic brand-gradient">we got it.</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              We&apos;ll review your message and respond within one business day.
              Keep an eye on your inbox.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white hover:bg-white/[0.07] transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-300/50 focus:bg-white/[0.05] transition-all duration-300";

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-strong rounded-3xl p-8 sm:p-10 lg:p-14"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                Full name *
              </label>
              <input
                name="fullName"
                required
                placeholder="Jane Doe"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                Email *
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                Phone *
              </label>
              <input
                name="phone"
                required
                placeholder="+1 555 123 4567"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                Subject *
              </label>
              <input
                name="subject"
                required
                placeholder="Project enquiry"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                Company name
              </label>
              <input
                name="companyName"
                placeholder="Acme Corp"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                Company website
              </label>
              <input
                name="companyWebsite"
                placeholder="https://acme.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* Services */}
          <div className="mt-7">
            <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-3">
              Services of interest
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((s) => {
                const active = selectedServices.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleService(s)}
                    className={`px-4 py-2 rounded-full text-[13px] transition-all duration-300 border ${
                      active
                        ? "bg-amber-300/15 border-amber-300/40 text-amber-100"
                        : "bg-white/[0.03] border-white/10 text-white/65 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div className="mt-7">
            <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell us about your project, timelines, what you've tried, and what success looks like."
              className={inputClass + " resize-none"}
            />
          </div>

          {error && (
            <p className="mt-5 text-sm text-red-400">{error}</p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-white/40">
              By submitting, you agree to our privacy policy. We&apos;ll never
              share your details.
            </p>
            <button
              type="submit"
              disabled={isPending}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-medium hover:bg-amber-200 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
