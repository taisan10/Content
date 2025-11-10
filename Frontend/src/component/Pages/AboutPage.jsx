import { Container } from "../UI/UiComponent";

export default function AboutPage(){
  return(
    <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1b1b1b] to-[#111] text-white overflow-hidden">
      <Container className="py-20">
        {/* --- Intro Section --- */}
    
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-100 bg-clip-text text-transparent">
            Redefining The Way Businesses Hire
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
            At <span className="text-yellow-300 font-semibold">Bansal Consultancy</span>, we don’t just connect people and companies — 
            we align passion with purpose, vision with value, and skill with success.
            Every placement we make is a story of transformation, trust, and triumph.
          </p>
      
        </Container >
        </section>
  )
}