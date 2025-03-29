import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCards";

const testimonials = [
  {
    text: `"DigiZinc gave our restaurant a brand identity that truly stands out!"`,
    description:
      "The logo, menu design, and social media creatives crafted by their team have given our brand a fresh, premium look. Customers now recognize us instantly, and footfall has increased dramatically!",
    author: "Marco Bennett",
    role: "Founder, Urban Bites",
  },
  {
    text: `"Our product packaging is now as irresistible as our food!"`,
    description:
      "DigiZinc's creative approach to packaging design has elevated our brand image. The vibrant visuals and unique design have made our products pop off the shelves, boosting sales significantly!",
    author: "Priya Sharma",
    role: "Co-Founder, SpiceNest",
  },
  {
    text: `"Our website now reflects the cutting-edge tech we provide!"`,
    description:
      "DigiZinc revamped our website with a sleek, intuitive UI/UX that keeps visitors engaged. The modern, user-friendly design has increased inquiries and helped us land bigger clients!",
    author: "Ethan Carter",
    role: "CEO, NexaTech Solutions",
  },
  {
    text: `"Our ad campaigns have never looked this good!"`,
    description:
      "DigiZinc's visually stunning ad creatives have taken our digital marketing to the next level. The designs are bold, engaging, and perfectly aligned with our brand, leading to higher conversions and visibility.",
    author: "Sophia Lewis",
    role: "Marketing Head, CloudWave IT",
  },
  {
    text: `"Our social media now looks as delicious as our dishes!"`,
    description:
      "DigiZinc transformed our social media presence with mouthwatering visuals and a cohesive aesthetic. Engagement has skyrocketed, and we've seen a steady rise in reservations since the redesign!",
    author: "Daniel Wong",
    role: "Owner, The Gourmet Table",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="text-center py-16 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-white">
        What our <span className="text-purple-400">Clients</span> say
      </h2>

      {/* Scrollable Testimonials Section */}
      <div
        className="relative mt-10 px-6 max-w-[820px] mx-auto flex gap-x-4 overflow-x-auto scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="flex space-x-8 min-w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialSection;
