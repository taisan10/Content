import { Container, GradientText } from "../../UI/UiComponent";

  export default function Process(){

    const process = [
      {
        step: "01",
        title: "Listen & Discover",
        desc: "We dive deep into your brand — understanding your audience, vision, and values before crafting a single line of copy or code.",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      },
      {
        step: "02",
        title: "Strategize & Design",
        desc: "Our strategists and creatives collaborate to build a roadmap that merges storytelling, visuals, and performance goals.",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
      },
      {
        step: "03",
        title: "Launch & Grow",
        desc: "We execute with precision, measure in real time, and optimize relentlessly. Growth isn’t luck — it’s the result of disciplined creativity.",
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      },
    ];
    
   return (
    <section className="bg-black">
      <Container>
         {/* Our Process */}
      <div className="max-w-6xl  mx-17 sm:mx-10 md:mx-15 space-y-12 mt-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold "> <GradientText> Our Process to Impact </GradientText></h2>
        {process.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-8`}
          >
            <div className=" w-full md:w-[50%] lg:w-[40%] flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-4xl select-none" aria-hidden>
                 
                </div>
              </div>

              
               <div className="mt-3 text-center text-xs sm:text-sm text-white/80">
               
              </div>
            </div>
          </div>
            <div className="sm:w-1/2 space-y-3  ">
              <span className="text-cyan-400 font-semibold text-lg">{p.step}</span>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-400 text-base">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
   ) 
  }