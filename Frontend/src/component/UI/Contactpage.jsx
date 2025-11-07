import { ContactpageButton, Container} from "../UI/UiComponent";

export default function ContactPage() {
  return (
    <section id="contact" className="bg-black text-white py-16 sm:py-20 -mb-30 ">
      <Container className="max-w-6xl mx-auto ">
        {/* Heading */}
        <h1 className="lg:text-8xl text-4xl sm:text-5xl font-bold text-start mb-10 ">
          Connect with us <br />
          directly
        </h1>
        <hr className="border-gray-700 mb-10" />

        {/* Left + Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h5 className="text-2xl sm:text-3xl font-bold">
              We're listening, reach out anytime!
            </h5>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 text-start md:text-start ">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6  border-b border-gray-400 ">
              Your Details
           
            </h3>

            {/* Example Form */}
            <form className="space-y-8">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg  text-white   border-b border-gray-5 0   focus:outline-none focus:ring-2 focus:ring-sky-400"
                
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-lg text-white  border-b border-gray-50  focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg  text-white  border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <select className="w-full px-4 py-2 rounded-lg bg-black  border-b border-gray-50  text-gray focus:outline-none focus:ring-2 focus:ring-sky-400">
                <option>Select option</option>
                <option>Creator</option>
                <option>Brand</option>
              </select>

              <textarea
                placeholder="What services are you looking for?"
                rows="4"
                className="w-full px-4 py-2 rounded-lg text-white   border-b border-gray-50  focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <ContactpageButton type="submit" >
                Submit
              </ContactpageButton> 
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}