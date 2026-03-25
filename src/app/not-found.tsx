import Link from "next/link";
import { ArrowLeft, Sunrise } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen fhf-gradient-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <Sunrise className="w-16 h-16 text-fhf-blue" />
        </div>
        <h1 className="font-display font-extrabold text-white text-8xl mb-4 leading-none">
          404
        </h1>
        <h2 className="font-display font-bold text-white text-2xl mb-4">
          Page Not Found
        </h2>
        <p className="text-blue-200 leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on the path to financial freedom.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fhf-blue text-fhf-primary-dark font-semibold font-display hover:bg-fhf-blue/90 transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold font-display hover:bg-white/10 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
