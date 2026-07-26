/**
 * Design: Aurora Scholar — Hero Section
 * Asymmetric layout with large AI illustration, gradient title
 * Myanmar-specific warm guiding voice
 */
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Compass } from "lucide-react";
import { Button } from "./Button";

interface HeroProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Section-specific aurora glow */}
      <div className="aurora-glow w-[400px] h-[400px] bg-blue-600/15 top-1/3 right-[10%]" style={{ animationDelay: "-3s" }} />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
              <Compass size={14} />
              AI-Powered Education Compass
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.15] tracking-tight">
              Your Intelligent{" "}
              <span className="gradient-text">Myanmar Career Guide</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Discover universities, scholarships, career paths, and AI-powered
              recommendations tailored for Myanmar students navigating their future.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="btn-primary text-white gap-2"
                onClick={onGetStarted}
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/20 text-gray-300 hover:text-white hover:border-cyan-400/50 bg-transparent"
                onClick={onLearnMore}
              >
                <BookOpen size={18} />
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                Trusted by students
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                Free to use
              </div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div variants={itemVariants} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Multiple glow layers behind image */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-2xl" />
              <motion.img
                src="/manus-storage/hero-illustration_8752083c.png"
                alt="AI Career Guide Illustration"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
