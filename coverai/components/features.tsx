import { Card } from "@/components/ui/card";
import { Bot, Zap, Clock, Download } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Generation",
    description: "Advanced AI technology creates personalized cover letters tailored to your experience.",
    icon: Bot,
  },
  {
    title: "Lightning Fast",
    description: "Generate professional cover letters in seconds, not hours.",
    icon: Zap,
  },
  {
    title: "Save Time",
    description: "Focus on what matters most - preparing for your interview.",
    icon: Clock,
  },
  {
    title: "Easy Export",
    description: "Download your cover letter in PDF format or copy to clipboard.",
    icon: Download,
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="relative overflow-hidden p-6 hover:border-cyan transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <feature.icon className="h-10 w-10 text-cyan mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}