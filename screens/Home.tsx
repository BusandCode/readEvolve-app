import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import book from "../src/assets/book.jpg";
import book2 from "../src/assets/book2.jpg";
import book3 from "../src/assets/book3.jpg";
import { VStack } from "../components/ui/vstack/index.web";
import about from "../src/assets/about.jpg";
import network from "../src/assets/networking.png";
import events from "../src/assets/event-list.png";
import viral from "../src/assets/viral.png";
import member from "../src/assets/membership-card.png";
import certificate from "../src/assets/certificate.png";
import gift from "../src/assets/gift-card.png";

export default function Home() {
  return (
    <>
      <VStack>
        <Header />

        <section className="bg-white font-suse py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Ready to Step Up Your Personal Development Game?
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8">
                Join a global network of growth-driven individuals. At
                ReadEvolve, we don't just read—we evolve to become better
                version of ourselves..
              </p>
              <a
                href="#learn-more"
                className="bg-[#25D167] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-80 transition duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Image Section with Slideshow */}
            <div className="max-w-full relative flex-1 flex justify-center items-center">
              {/* Background Border */}
              <div className="absolute w-[90%] h-[90%] bg-[#25D167] rounded-[24px] transform -rotate-6"></div>

              {/* Slideshow */}
              <div className="w-full max-w-lg mx-auto rounded-[24px] shadow-lg overflow-hidden transform rotate-6">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={true}
                  loop={true}
                >
                  <SwiperSlide>
                    <img src={book} alt="Book 1" className="w-full" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={book2} alt="Book 2" className="w-full" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={book3} alt="Book 3" className="w-full" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <VStack className="bg-[#25D167] font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Image Section */}
          <VStack className="flex-1">
            <img src={about} alt="about" className="w-full rounded-lg" />
          </VStack>

          {/* Text Section */}
          <VStack className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              About Us
            </h1>
            <p className="text-lg lg:text-xl text-white text-justify">
              ReadEvolve is more than a book club. We're a growth-focused
              community that turns reading into personal transformation. With
              two unique frameworks—REACH and PATH—we empower individuals to
              grow intentionally and inspire change.
            </p>
            <br />
            <br />
            <a
              href="#learn-more"
              className="bg-white text-[#25D167] px-8 py-4 rounded-lg shadow-lg hover:opacity-80 transition duration-300"
            >
              Learn More About Us
            </a>
          </VStack>
        </VStack>

        <VStack className="bg-white font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex justify-center items-center">
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Lead the Growth Movement on Your Campus
            </h1>
          </VStack>
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center mb-8">
            <p className="text-lg text-gray-700">
              Are you a university student in Nigeria passionate about personal
              growth? Love inspiring others? Join the ReadEvolve Ambassador
              Program and be the face of transformation on your campus. As an
              ambassador, you'll:
            </p>
          </VStack>

          <VStack className="flex flex-col lg:flex-row gap-8 items-center mb-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1">
              <div className="text-[#25D167] mb-2 p-4 items-center">
                {/* Icon */}
                <img
                  src={viral}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Viral Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  SPREAD THE WORD
                </h2>
                <p className="text-gray-700">
                  Spread the word about ReadEvolve.
                </p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1">
              <div className="text-[#F59E0B] mb-2 p-4">
                {/* Icon */}
                <img
                  src={events}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Events Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  EVENTS
                </h2>
                <p className="text-gray-700">
                  Host events and challenges for your peers.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={network}
                  //   className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Network Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  NETWORK
                </h2>
                <p className="text-gray-700">
                  Connect with a global network of changemakers.
                </p>
              </div>
            </VStack>
          </VStack>

          <VStack
            className="text-center max-w-3xl flex flex-col justify-center items-center mb-4 mt-14"
            style={{ width: "100%", textAlign: "center" }}
          >
            <p className="text-lg text-gray-700">
              As a ReadEvolve Ambassador, your journey will be filled with
              exciting opportunities and rewards designed to empower you,
              amplify your impact, and celebrate your efforts. Here's a glimpse
              of what you'll gain as part of this transformative experience:
            </p>
          </VStack>

          <VStack className="flex flex-col lg:flex-row gap-8 items-center mt-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1">
              <div className="text-[#25D167] mb-2 p-4">
                {/* Icon */}
                <img
                  src={member}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Member Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  MEMBERSHIP
                </h2>
                <p className="text-gray-700">Free premium membership.</p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1">
              <div className="text-[#F59E0B] mb-2 p-4">
                {/* Icon */}
                <img
                  src={certificate}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Certificate Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  CERTIFICATION
                </h2>
                <p className="text-gray-700">
                  Leadership training and certifications.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={gift}
                  //   className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Gift Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  REWARDS
                </h2>
                <p className="text-gray-700">
                  Exclusive ambassador-only rewards and merchandise.
                </p>
              </div>
            </VStack>
          </VStack>
          <br />
          <br />
          <a
            href="#learn-more"
            className="bg-[#25D167] text-white text-center font-extrabold text-xl px-8 py-4 rounded-lg shadow-lg hover:opacity-80 transition duration-300"
          >
            Apply Now to Become an Ambassador
          </a>
        </VStack>
      </VStack>
    </>
  );
}
