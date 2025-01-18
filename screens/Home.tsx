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
import openbook from "../src/assets/open-book.png";
import engage from "../src/assets/engage.png";
import apply from "../src/assets/apply.png";
import cultivate from "../src/assets/cultivation.png";
import badge from "../src/assets/badge.png";

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
          {/* Wrapper for cards */}
          <VStack className="flex flex-col lg:flex-row gap-8 items-stretch mt-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  OUR STORY
                </h2>
                <p className="text-gray-700">
                  ReadEvolve began with a simple idea: what if reading could
                  drive measurable growth and help individuals in their journey
                  to actualizing their God-given potentials? We wanted to create
                  a space where people could learn, act, and evolve and be all
                  they can be together. Today, ReadEvolve is a thriving
                  community of growth-seekers who believe in the power of books
                  to transform lives.
                </p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  OUR MISSION
                </h2>
                <p className="text-gray-700">
                  <b>What defines us?</b>
                  <br />
                  <br />
                  To build a dynamic community that empowers individuals to
                  achieve their fullest potential by turning reading into
                  intentional, actionable growth.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  OUR REWARDS
                </h2>
                <p className="text-gray-700">
                  <b>Where are we going?</b>
                  <br />
                  <br />
                  Our ultimate goal is to build a large network of intentional
                  individuals who will have a solid knowledge base and also
                  growth-oriented mindset to drive positive change in their
                  world.
                </p>
              </div>
            </VStack>

            {/* Card 4 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  OUR CORE VALUES
                </h2>
                <p className="text-gray-700 text-2xl">
                  <ul>
                    <li>Curiosity</li>
                    <li>Accountability</li>
                    <li>Intentionality</li>
                    <li>Contribution</li>
                  </ul>
                </p>
              </div>
            </VStack>
          </VStack>
        </VStack>

        <VStack className="bg-white font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex justify-center items-center">
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              What We Do?
            </h1>
          </VStack>
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center mb-8">
            <p className="text-lg text-gray-700">
              At ReadEvolve, we do more than read books—we create
              transformation. Our flagship framework, <b>REACH</b> provide
              step-by-step guidance for personal development. This frameworks
              gives you access to;
            </p>
          </VStack>

          <VStack className="flex flex-col lg:flex-row gap-8 items-stretch mt-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  📌 CURATED BOOK LISTS
                </h2>
                <p className="text-gray-700">
                  Carefully curated books that inspire growth.
                </p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  📌 INTERACTIVE EVENTS
                </h2>
                <p className="text-gray-700">
                  Webinars, discussions, and workshops and exclusive physical
                  meetings.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  📌 GROWTH TOOLS
                </h2>
                <p className="text-gray-700">
                  Growth maps, personalized trackers, worksheets and action
                  guides.
                </p>
              </div>
            </VStack>

            {/* Card 4 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  📌 SUPPORTIVE COMMUNITY
                </h2>
                <p className="text-gray-700">
                  Engage with members who share your passion for learning and
                  growth.
                </p>
              </div>
            </VStack>
          </VStack>
        </VStack>

        <VStack className="bg-white font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex justify-center items-center">
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              How We Do What We Do
              <br />
              (Program Framework)
            </h1>
          </VStack>
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center mb-8">
            <p className="text-lg text-gray-700">
              Our community programs are built around the <b>REACH Framework</b>
              —a structured approach designed to help you achieve growth, take
              action, and experience measurable transformation. This framework
              is not just about reading; it's about creating real change in your
              life through purposeful learning and actionable steps.
              <br />
              <br />
              The <b>REACH</b> Framework is a 12-week program that guides you
              through a journey from passive reading to active transformation.
              With each step, you'll gain support, connect with like-minded
              individuals, and take real, measurable steps toward lasting
              change.
            </p>
          </VStack>

          <VStack className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="text-[#25D167] mb-2 p-4 items-center">
                {/* Icon */}
                <img
                  src={openbook}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Open Book Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  READ
                </h2>
                <p className="text-gray-700">
                  Start with curated book recommendations focused on personal
                  growth themes like purpose, mindset, relationships,
                  communication, and leadership. Receive reading guides to help
                  you focus on key insights.
                </p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="text-[#F59E0B] mb-2 p-4">
                {/* Icon */}
                <img
                  src={engage}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Engage Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  ENGAGE
                </h2>
                <p className="text-gray-700">
                  Participate in live discussions, group Q&A sessions, and
                  thematic coaching calls. Connect with other members to share
                  insights and gain diverse perspectives.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={apply}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "50px" }}
                  alt="Apply Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  APPLY
                </h2>
                <p className="text-gray-700">
                  Turn what you read into actionable steps through weekly
                  challenges. Take practical actions that align with your growth
                  goals.
                </p>
              </div>
            </VStack>

            {/* Card 4 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={cultivate}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Cultivate Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  CULTIVATE
                </h2>
                <p className="text-gray-700">
                  Use tools like trackers and templates to build sustainable
                  systems for your growth. Reflect on your progress and adjust
                  your approach with guidance from coaches.
                </p>
              </div>
            </VStack>

            {/* Card 5 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={badge}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Badge Icon"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  HONOR
                </h2>
                <p className="text-gray-700">
                  Celebrate your wins and acknowledge your progress during
                  end-of-program milestones. Share your transformation story
                  with the community and inspire others.
                </p>
              </div>
            </VStack>
          </VStack>
        </VStack>
        {/* Key Features Of the Prog */}
        <VStack className="max-w-[1000px] px-8 py-8 mr-auto ml-auto flex flex-col items-center bg-white shadow-lg">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">Key Features Of The Community</h1>
          <h2>A personalized 12-week coaching program</h2>
          <div className="w-full grid grid-cols-2 gap-4 mt-6">
            <ul>
              <li>📌 A tailored growth map designed to help you achieve your personal goals</li>
              <li>📌 A curated list of top-tier books & video course</li>
              <li>📌 Bi-weekly live coaching clarity calls and Q&A sessions with our lead coach</li>
              <li>📌 Exclusive membership to a dynamic & growth-oriented community</li>
              <li>📌 Entry to our exclusive monthly physical meetings</li>
              <li>📌 Weekly challenges to help apply lessons learned</li>
              <li>📌 Inclusion in a smaller coaching squad for better accountability</li>
              <li>📌 Certificates of completion and progress recognition</li>
              <li>📌 Mentorship opportunities with experienced guides</li>
              <li>📌 Membership giveaways and spotlight opportunities</li>
              <li>📌 Join our Alumni community for continued support and growth after program completion</li>
            </ul>
          </div>
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
