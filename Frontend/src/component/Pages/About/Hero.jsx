import {
  Container,
  GradientText,
  PrimaryButton,


} from "../../UI/UiComponent";

export default function Hero() {




  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />

      <Container className="py-10 sm:py-28 md:py-28 lg:py-28 text-center mt-5 sm:-mt-10">
        <h1 className="w-full text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          <GradientText>  We Don’t Market Brands  </GradientText>
         — We Build Movements
        </h1>

        <p className="mt-5 sm:mt-6  text-sm  sm:text-2xl  max-w-3xl mx-auto text-white/70 text-base sm:text-lg">
           At <GradientText> Bluenose Digital Marketing</GradientText>, we don’t just connect people and companies — 
            we align passion with purpose, vision with value, and skill with success.
            Every placement we make is a story of transformation, trust, and triumph.
        </p>

        {/* <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
          <PrimaryButton href="#contact">Book A Free Audit</PrimaryButton>
        </div> */}

       
      </Container>
    </section>
  );
}



































