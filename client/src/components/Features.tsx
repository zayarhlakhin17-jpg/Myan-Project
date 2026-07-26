/**
 * Design: Aurora Scholar — Features Section
 * Enhanced with section aurora glow, asymmetric card layout, specific Myanmar-focused copy
 * Compass + AI node brand motif in card headers
 */
import { motion } from "framer-motion";
import { Brain, GraduationCap, Award, Compass } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Advisor",
    description:
      "Get personalized career paths matched to your strengths, interests, and Myanmar's evolving job market — powered by intelligent analysis.",
    color: "from-blue-500 to-blue-600",
    glowColor: "blue-500/20",
    borderColor: "border-blue-500/20",
    accentGlow: "bg-blue-500/5",
  },
  {
    icon: GraduationCap,
    title: "University Finder",
    description:
      "Explore universities across Myanmar and beyond. Compare programs, admission requirements, and discover the right academic path for you.",
    color: "from-cyan-400 to-cyan-600",
    glowColor: "cyan-500/20",
    borderColor: "border-cyan-500/20",
    accentGlow: "bg-cyan-500/5",
  },
  {
    icon: Award,
    title: "Scholarship Recommendation",
    description:
      "Find scholarships that align with your profile. Our AI matches you with opportunities based on your qualifications and aspirations.",
    color: "from-purple-500 to-violet-600",
    glowColor: "purple-500/20",
    borderColor: "border-purple-500/20",
    accentGlow: "bg-purple-500/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Section aurora glow */}
      <div className="aurora-glow w-[500px] h-[500px] bg-blue-600/10 top-0 left-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            <Compass size={14} />
            Navigate Your Future
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight">
            Intelligent Guidance for{" "}
            <span className="gradient-text">Myanmar Students</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Find the path that fits your strengths, goals, and Myanmar's education landscape.
            Our AI understands your unique context.
          </p>
        </motion.div>

        {/* Feature Cards — staggered grid for visual dynamism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={`glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden ${
                index === 1 ? "md:-mt-4" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent glow */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Subtle background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${feature.accentGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon with compass node accent */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-30 group-hover:opacity-60 transition-opacity`}
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-display text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Bottom path indicator */}
              <div className={`mt-6 flex items-center gap-2 text-xs ${feature.borderColor} border-t pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <Compass size={12} className="text-gray-500" />
                <span className="text-gray-500">Explore {feature.title} →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
