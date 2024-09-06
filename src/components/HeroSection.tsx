import book from "../assets/book.jpg";

export default function HeroSection() {
  return (
    <section className="bg-white font-suse py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Ready to Step Up Your Personal Development Game?
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8">
            Transform your mindset, become a growth-oriented individual and an
            intentional reader with our intensive program.
          </p>
          <a
            href="#learn-more"
            className="bg-[#25D167] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-80 transition duration-300"
          >
            Get Started
          </a>
        </div>
        {/* Image */}
        <div className="flex-1">
          <img
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            src={book}
            alt="Book"
          />
        </div>
      </div>
    </section>
  );
}
