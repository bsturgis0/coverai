"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { generateCoverLetter } from "@/lib/cover-letter";
import { LoadingDots } from "@/components/ui/loading-dots";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";
import { Copy, Download } from "lucide-react";

export default function CoverLetterPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!jobDescription || !resume) {
      toast.error("Please fill in both the job description and resume fields");
      return;
    }

    setIsGenerating(true);
    try {
      const generated = await generateCoverLetter(jobDescription, resume);
      setCoverLetter(generated);
      toast.success("Cover letter generated successfully!");
    } catch (error) {
      console.error("Failed to generate cover letter:", error);
      toast.error("Failed to generate cover letter. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleDownload = () => {
    try {
      const doc = new jsPDF();
      doc.setFont("helvetica");
      doc.setFontSize(12);
      
      const splitText = doc.splitTextToSize(coverLetter, 180);
      doc.text(splitText, 15, 15);
      
      doc.save("cover-letter.pdf");
      toast.success("Downloaded as PDF!");
    } catch (error) {
      toast.error("Failed to download PDF");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container py-12"
    >
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Generate Your Cover Letter
      </h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-cyan mb-4">
              Job Description
            </h2>
            <Textarea
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="min-h-[200px]"
            />
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-cyan mb-4">
              Your Resume
            </h2>
            <Textarea
              placeholder="Paste your resume content here..."
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              className="min-h-[200px]"
            />
          </Card>
          <Button
            onClick={handleGenerate}
            disabled={!jobDescription || !resume || isGenerating}
            className="w-full bg-cyan text-background hover:bg-cyan/90"
          >
            {isGenerating ? (
              <LoadingDots className="text-background" />
            ) : (
              "Generate Cover Letter"
            )}
          </Button>
        </div>
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-cyan">
              Your Cover Letter
            </h2>
            {coverLetter && (
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="hover:text-cyan"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="hover:text-cyan"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            )}
          </div>
          <div className="prose prose-invert max-w-none">
            {coverLetter ? (
              <div className="whitespace-pre-wrap">{coverLetter}</div>
            ) : (
              <p className="text-muted-foreground">
                Your generated cover letter will appear here...
              </p>
            )}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}