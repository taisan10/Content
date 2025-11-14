import { Container, GradientText } from "../../UI/UiComponent";
import { motion } from "framer-motion";

export default function Join(){
  return(
    <div>
       {/* ---------------- JOIN OUR TEAM ---------------- */}
<section className="relative py-24 px-8 text-center overflow-hidden bg-gradient-to-black from-gray-900 to-gray-950">
  <Container>
  <motion.img
    src="/Client_Logo/1.png"
    alt="Team Working"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.15 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10 max-w-3xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      <GradientText>Join Our Global Team</GradientText> 
    </motion.h2>
    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
      At Bluenose, we’re more than a digital agency — we’re a movement of thinkers, creators, and innovators shaping the future of marketing.  
      Whether you’re in design, analytics, or strategy — your next chapter starts here.
    </p>
    <motion.a
      href="/Contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300  font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
    >
      Explore Careers
    </motion.a>
  </div>
  </Container>
</section>
    </div>
  )
}