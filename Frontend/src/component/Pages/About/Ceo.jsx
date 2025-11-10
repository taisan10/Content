import { Container, GradientText } from "../../UI/UiComponent"



// export default function CEO(){
//   return(
//      <section >
//       <Container>
//       <div className="py-0 px-6  max-w-6xl mx-auto grid md:grid-cols-2  lg:grid-cols-2 gap-12 items-center">

//      <div>
    
//           <h2 className="text-3xl font-bold mb-4">
//            <GradientText>A Message from Our Founder </GradientText> 
//           </h2>
//           <p className="text-gray-300 mb-6 leading-relaxed">
//             “When I started Bluenose, my vision was clear — to create a marketing agency that
//             values integrity, creativity, and measurable results equally. Our clients aren’t
//             just businesses — they’re partners in building something meaningful.”
//           </p>
//                    <p className=" font-semibold">  <GradientText>— Sarah Bennett, Founder & CEO</GradientText> </p> 
                     
//      </div>
       
//              <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4">
//         <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
//           {/* Replace with actual social media icons or hex grid */}
//           <div className="text-4xl">📸 💼 🎵 ▶️</div>
//         </div>
//         <div className="mt-3 text-center text-xs sm:text-sm text-white/60">
//           Social snapshots • Dubai • Halifax
//         </div>
//       </div>
//        </div>
//         </Container>
//       </section>

//   )
// }



export default function CEO() {
  return (
    <section className="py-12 px-6 bg-transparent">
      <Container className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text (md: 60%) */}
          <div className="w-full md:w-[50%] -mt-5  sm:-mt-10 md:mt-5 lg:-mt-10  md:ml-10 ">
         
            <h2 className="text-3xl sm:text-3xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight ">
              <GradientText>A Message from Our Founder</GradientText>
            </h2>

            <p className="text-gray-300 mb-6 text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed ">
              When I started Bluenose, my vision was clear — to create a marketing
              agency that values integrity, creativity, and measurable results
              equally. <br /> Our clients aren’t just businesses — they’re partners in
              building something meaningful.
            </p>

            <p className="font-semibold text-white">
              <GradientText>— Sarah Bennett, Founder & CEO</GradientText>
            </p>
          </div>

          {/* Right: Visual card (md: 40%) */}
          <div className="w-full md:w-[60%] lg:w-[40%] flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-4xl select-none" aria-hidden>
                 
                </div>
              </div>

              
               <div className="mt-3 text-center text-xs sm:text-sm text-white/80">
               • Lakshay Bansal •
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}