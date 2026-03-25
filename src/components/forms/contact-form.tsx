"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "contact" }),
      });
    } catch {
      // no-op
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-green-500" />
        </div>
        <h4 className="font-display font-semibold text-fhf-primary-dark text-lg mb-2">Message Sent!</h4>
        <p className="text-gray-500 text-sm">We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  const inputClass = (hasError?: boolean) =>
    cn(
      "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent",
      hasError ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="c-name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className={inputClass(!!errors.name)}
          placeholder="Your name"
        />
        <FieldError message={errors.name?.message} />
      </div>

      <div>
        <label htmlFor="c-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="c-email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={inputClass(!!errors.email)}
          placeholder="your@email.com"
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="c-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="c-subject"
          type="text"
          {...register("subject")}
          className={inputClass(!!errors.subject)}
          placeholder="How can we help?"
        />
        <FieldError message={errors.subject?.message} />
      </div>

      <div>
        <label htmlFor="c-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="c-message"
          rows={5}
          {...register("message")}
          className={cn(inputClass(!!errors.message), "resize-none")}
          placeholder="Tell us what you'd like to discuss..."
        />
        <FieldError message={errors.message?.message} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 rounded-xl font-semibold font-display text-sm transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-primary focus-visible:ring-offset-2",
          isSubmitting
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-fhf-primary text-white hover:bg-fhf-primary/90 hover:-translate-y-0.5 shadow-sm"
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
