import React from "react";
import emailjs from "@emailjs/browser";

type PlanEventFormProps = {
  open: boolean;
  onClose: () => void;
};

const overlayClass = "fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm";
const panelClass = "fixed z-[61] inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 top-24 sm:top-28 w-auto sm:w-[520px] rounded-2xl bg-card shadow-2xl border border-border";

export const PlanEventForm: React.FC<PlanEventFormProps> = ({ open, onClose }) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (open) {
      // Reset form when opening
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setIsSubmitted(false);
      setError("");
      setIsSubmitting(false);
      // Focus the first field when opening
      setTimeout(() => {
        const el = document.getElementById("plan-name-input");
        (el as HTMLInputElement | null)?.focus();
      }, 0);
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const templateParams = {
        user_name: name.trim(),
        user_phone: phone.trim(),
        user_email: email.trim(),
        user_message: message.trim() || "No additional message provided.",
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured. Please contact support.");
      }

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status !== 200) {
        throw new Error("Failed to send email. Please try again later.");
      }

      setIsSubmitted(true);

      setTimeout(() => {
    onClose();
        setIsSubmitted(false);
      }, 4000);

    } catch (err) {
      console.error("Error sending email:", err);
      setError(err instanceof Error ? err.message : "Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="plan-event-title">
      <div className={overlayClass} onClick={onClose} />
      <div className={panelClass}>
        {isSubmitted ? (
          <div className="p-5 sm:p-6 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Submitted Successfully!
              </h2>
              <p className="text-muted-foreground font-body">
                Thank you for contacting us. We'll get back to you soon at{" "}
                <span className="font-semibold text-foreground">{email}</span>
              </p>
            </div>
          </div>
        ) : (
        <form onSubmit={onSubmit} className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-4">
              <h2 id="plan-event-title" className="text-lg font-heading font-semibold">
                Plan Your Event
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-md p-1 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>

            {error && (
              <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-sm text-destructive font-body">{error}</p>
              </div>
            )}

          <div className="space-y-4">
            <label className="block">
                <span className="text-sm font-medium font-body">Full name</span>
                <input
                  id="plan-name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-input bg-background p-2 shadow-sm font-body focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  placeholder="Your full name"
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium font-body">Phone number</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-input bg-background p-2 shadow-sm font-body focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  placeholder="+91 99629 19086"
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium font-body">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-input bg-background p-2 shadow-sm font-body focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  placeholder="you@example.com"
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium font-body">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-input bg-background p-2 shadow-sm font-body focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  placeholder="Tell us about your event"
                />
            </label>
          </div>
          <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-md border border-input hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-body disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-body disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default PlanEventForm;
