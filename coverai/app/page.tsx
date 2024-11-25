import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Clock, Target } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent blur-3xl" />
          <div className="relative z-10">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent animate-fade-in">
              Your Gateway to Impactful Cover Letters
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to craft compelling cover letters that
              make you stand out. Transform your job application process in
              seconds.
            </p>
            <div className="mt-10">
              <Link href="/cover-letter">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 rounded-full transition-all hover:scale-105 inline-flex items-center gap-2 group">
                  Create Your Cover Letter
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
            <div className="bg-cyan-500/10 p-3 rounded-lg w-fit">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mt-4 group-hover:text-cyan-300 transition-colors">
              AI-Powered Excellence
            </h3>
            <p className="mt-2 text-gray-400">
              Advanced AI algorithms analyze your resume and job requirements to
              create perfectly tailored cover letters.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
            <div className="bg-cyan-500/10 p-3 rounded-lg w-fit">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mt-4 group-hover:text-cyan-300 transition-colors">
              Lightning Fast
            </h3>
            <p className="mt-2 text-gray-400">
              Generate professional cover letters in seconds, not hours. Save
              time without compromising quality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
            <div className="bg-cyan-500/10 p-3 rounded-lg w-fit">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mt-4 group-hover:text-cyan-300 transition-colors">
              Precision Targeting
            </h3>
            <p className="mt-2 text-gray-400">
              Each cover letter is precisely crafted to match specific job
              requirements and highlight your relevant skills.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">99%</div>
            <div className="mt-2 text-gray-400">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">30s</div>
            <div className="mt-2 text-gray-400">Average Generation Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">1000+</div>
            <div className="mt-2 text-gray-400">Templates Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400">24/7</div>
            <div className="mt-2 text-gray-400">Availability</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent blur-3xl" />
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Ready to Transform Your Job Application?
            </h2>
            <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
              Join thousands of successful job seekers who have already
              discovered the power of AI-driven cover letters.
            </p>
            <div className="mt-8 text-center">
              <Link href="/cover-letter">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 rounded-full transition-all hover:scale-105">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
