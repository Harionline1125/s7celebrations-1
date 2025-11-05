import React from "react";

type PlanEventFormProps = {
  open: boolean;
  onClose: () => void;
};

const ADMIN_WHATSAPP = "918754696030"; // include country code, digits only

const overlayClass = "fixed inset-0 bg-black/50 z-[60]";
const panelClass = "fixed z-[61] inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 top-24 sm:top-28 w-auto sm:w-[520px] rounded-xl bg-white dark:bg-neutral-900 shadow-xl border border-border";

export const PlanEventForm: React.FC<PlanEventFormProps> = ({ open, onClose }) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (open) {
      // Focus the first field when opening
      setTimeout(() => {
        const el = document.getElementById("plan-name-input");
        (el as HTMLInputElement | null)?.focus();
      }, 0);
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      email ? `Email: ${email}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(parts.join("\n"));
    const href = `https://wa.me/${ADMIN_WHATSAPP}?text=${text}`;
    window.open(href, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="plan-event-title">
      <div className={overlayClass} onClick={onClose} />
      <div className={panelClass}>
        <form onSubmit={onSubmit} className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 id="plan-event-title" className="text-lg font-semibold">Plan your event</h2>
            <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-1 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium">Full name</span>
              <input id="plan-name-input" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md border border-gray-200 dark:border-neutral-700 bg-background p-2 shadow-sm" placeholder="Your full name" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Phone number</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full rounded-md border border-gray-200 dark:border-neutral-700 bg-background p-2 shadow-sm" placeholder="+91 99629 19086" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full rounded-md border border-gray-200 dark:border-neutral-700 bg-background p-2 shadow-sm" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 block w-full rounded-md border border-gray-200 dark:border-neutral-700 bg-background p-2 shadow-sm" placeholder="Tell us about your event" />
            </label>
          </div>
          <div className="mt-5 flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-input hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">Send via WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanEventForm;


