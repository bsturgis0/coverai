import { Button } from "@/components/ui/button";
import { Features } from "@/components/features";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { Zap, Search, ListChecks, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex-1">
      <AnimatedGradient />
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-2xl bg-muted px-4 py-1 text-sm"
          >
            <Zap className="h-4 w-4 text-cyan animate-glow-pulse" />
            <p className="text-cyan">
              Supercharge your job applications
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Create compelling cover letters with{" "}
            <span className="text-cyan">AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            CoverFlash helps you generate professional, personalized cover letters
            that stand out. Powered by advanced AI to highlight your unique
            qualifications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-x-4"
          >
            <Link href="/cover-letter">
              <Button
                size="lg"
                className="bg-cyan text-background hover:bg-cyan/90 transition-all hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="transition-all hover:scale-105"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose CoverFlash?</h2>
        <Features />
      </section>

      <section className="container py-16 space-y-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block rounded-lg bg-muted p-2">
              <Search className="h-5 w-5 text-cyan" />
            </div>
            <h3 className="text-2xl font-bold">AI-Powered Job Search (Coming Soon)</h3>
            <p className="text-muted-foreground">
              Our intelligent job search feature will analyze your skills and preferences
              to find the perfect job matches. Get personalized recommendations and
              insights about companies that align with your career goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8"
          >
            <div className="space-y-4">
              <div className="h-2 w-20 rounded bg-cyan/20" />
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-2/3 rounded bg-muted" />
              <div className="h-12 w-full rounded bg-cyan/10" />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded bg-cyan/20" />
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-4/5 rounded bg-muted" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 order-1 lg:order-2"
          >
            <div className="inline-block rounded-lg bg-muted p-2">
              <ListChecks className="h-5 w-5 text-cyan" />
            </div>
            <h3 className="text-2xl font-bold">Smart Job Listings (Coming Soon)</h3>
            <p className="text-muted-foreground">
              Access a curated list of job opportunities tailored to your profile.
              Our platform will highlight positions where your skills and experience
              make you a strong candidate, increasing your chances of success.
            </p>
          </motion.div>
        </div>

        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-muted p-2">
            <Sparkles className="h-5 w-5 text-cyan" />
          </div>
          <h3 className="text-2xl font-bold">More Features Coming Soon</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're constantly working on new features to make your job search easier
            and more effective. Stay tuned for AI-powered interview preparation,
            salary insights, and career path recommendations.
          </p>
        </div>
      </section>
    </div>
  );
}