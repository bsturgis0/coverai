import { Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-cyan" />
              <span className="text-lg font-bold">CoverFlash</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Revolutionizing the job application process with AI-powered tools
              designed to help you land your dream job.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/cover-letter" className="text-sm text-muted-foreground hover:text-cyan">
                    Cover Letter Generator
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground/60">
                    AI Job Search (Coming Soon)
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground/60">
                    Job Listings (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-cyan">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-cyan">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-cyan">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-cyan px-3 py-2 text-sm text-background hover:bg-cyan/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CoverFlash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}