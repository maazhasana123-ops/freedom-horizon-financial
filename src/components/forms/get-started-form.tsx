"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  hearAbout: z.string().min(1, "Please select an option"),
  interest: z.array(z.string()).min(1, "Please select at least one area of interest"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const interestOptions = [
  { value: "financial-literacy", label: "Learning about financial literacy" },
  { value: "part-time", label: "Exploring a part-time opportunity" },
  { value: "full-time", label: "Building a full-time career" },
  { value: "client-services", label: "Client services" },
];

const hearAboutOptions = [
  "Social Media",
  "Referred by a Friend",
  "Google Search",
  "Event or Webinar",
  "YouTube",
  "Other",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
    </label>
  );
}

export function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: [] },
  });

  const selectedInterests = watch("interest") || [];

  const toggleInterest = (value: string) => {
    const current = selectedInterests;
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue("interest", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "get-started" }),
      });
      setSubmitted(true);
    } catch {
      // Still show success — don't block the user
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-display font-bold text-fhf-primary-dark text-2xl mb-3">
          You&apos;re on your way!
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. A member of the Freedom Horizon Financial team will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" required>First Name</Label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            {...register("firstName")}
            className={cn(
              "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent",
              errors.firstName ? "border-red-300 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
            )}
            placeholder="Mike"
          />
          <FieldError message={errors.firstName?.message} />
        </div>
        <div>
          <Label htmlFor="lastName" required>Last Name</Label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            {...register("lastName")}
            className={cn(
              "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent",
              errors.lastName ? "border-red-300 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
            )}
            placeholder="Marino"
          />
          <FieldError message={errors.lastName?.message} />
        </div>
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" required>Email Address</Label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={cn(
            "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent",
            errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
          )}
          placeholder="mike@example.com"
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" required>Phone Number</Label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className={cn(
            "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent",
            errors.phone ? "border-red-300 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
          )}
          placeholder="(555) 000-0000"
        />
        <FieldError message={errors.phone?.message} />
      </div>

      {/* How did you hear */}
      <div>
        <Label htmlFor="hearAbout" required>How did you hear about us?</Label>
        <select
          id="hearAbout"
          {...register("hearAbout")}
          className={cn(
            "w-full px-4 py-2.5 rounded-xl border text-sm transition-colors appearance-none bg-white",
            "focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent",
            errors.hearAbout ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
          )}
        >
          <option value="">Select an option...</option>
          {hearAboutOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <FieldError message={errors.hearAbout?.message} />
      </div>

      {/* Interest checkboxes */}
      <div>
        <p className="block text-sm font-medium text-gray-700 mb-2.5">
          What interests you?
          <span className="text-red-500 ml-1" aria-label="required">*</span>
        </p>
        <div className="flex flex-col gap-2.5">
          {interestOptions.map((opt) => {
            const checked = selectedInterests.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleInterest(opt.value)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-primary",
                  checked
                    ? "border-fhf-primary bg-blue-50 text-fhf-primary-dark"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                )}
                aria-pressed={checked}
              >
                <span
                  className={cn(
                    "w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors",
                    checked ? "border-fhf-primary bg-fhf-primary" : "border-gray-300"
                  )}
                >
                  {checked && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {opt.label}
              </button>
            );
          })}
        </div>
        <FieldError message={errors.interest?.message} />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm transition-colors hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-fhf-primary focus:border-transparent resize-none"
          placeholder="Tell us a bit about yourself or your goals..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-3.5 rounded-xl font-semibold font-display text-sm transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fhf-blue focus-visible:ring-offset-2",
          isSubmitting
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-fhf-blue text-fhf-primary-dark hover:bg-fhf-blue/90 hover:-translate-y-0.5 shadow-sm"
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </span>
        ) : (
          "Start My Journey"
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
