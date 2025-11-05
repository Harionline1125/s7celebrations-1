import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type FormValues = {
  name: string;
  phone: string;
  email: string;
};

const PlanEvent: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: FormValues) => {
    try {
      let ok = false;
      if (supabase?.functions?.invoke) {
        const { error } = await supabase.functions.invoke("send-contact-email", {
          body: JSON.stringify(data),
        });
        if (error) throw error;
        ok = true;
      }
      if (!ok) {
        const resp = await fetch("/api/send-contact-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!resp.ok) throw new Error("Failed to send. Try again later.");
      }

      toast({ title: "Message sent", description: "We received your event request. We'll contact you soon." });
      reset();
      navigate("/");
    } catch (err: any) {
      toast({ title: "Submission failed", description: err?.message || "Please try later.", variant: "destructive" });
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Plan your event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Plan your event form">
        <label className="block">
          <span className="text-sm font-medium">Full name</span>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-sm text-red-600">{errors.name.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Phone number</span>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[0-9+\-\s()]*$/, message: "Invalid phone" },
              minLength: { value: 7, message: "Too short" },
            })}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            placeholder="+1234567890"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="text-sm text-red-600">{errors.phone.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
            })}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-sm text-red-600">{errors.email.message}</p>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </main>
  );
};

export default PlanEvent;


