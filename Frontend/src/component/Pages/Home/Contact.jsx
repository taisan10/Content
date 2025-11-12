



import { Container, GradientText, PrimaryButton } from "../../UI/UiComponent";

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container className="grid gap-8 sm:gap-12 items-start -mt-8 sm:-mt-12 md:-mt-12 lg:-mt-12 -mb-10 sm:-mb-10 md:-mb-18 lg:-mb-10 text-center ">
        <div>
          <h3 className="text-xl sm:text-4xl lg:text-4xl  font-semibold leading-tight mb-4 sm:mb-5 text-white/80">
           <GradientText>Ready to Grow Your Revenue Through Digital Marketing? </GradientText> 
          </h3>

          <div className="text-sm sm:text-md  lg:text-2xl lg:mx-25  mb-4 sm:mb-6 text-white/80">
            <h2>
           Our greatest satisfaction comes from seeing our client’s business succeed.{" "}
            </h2>{" "}
            <h3>
             Now it’s your high time to remove the barriers to  your  growth 
            </h3>{" "}
       and accelerate your profitability.

          </div>

          <PrimaryButton href="/contact"  >Book A Callback</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
