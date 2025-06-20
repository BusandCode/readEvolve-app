import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import book from "../src/assets/book.jpg";
import community from "../src/assets/community.png";
import growth from "../src/assets/growth.png";
import event from "../src/assets/event.png";
import bookj from "../src/assets/book.png";
import testimonial_1 from "../src/assets/testimonial-1.jpg"
import testimonial_2 from "../src/assets/testimonial-2.jpg"
import testimonial_3 from "../src/assets/testimonial-3.jpg"
import testimonial_4 from "../src/assets/testimonial-4.jpg"
import check from "../src/assets/check.png"
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

        <section className="bg-white font-suse py-20 relative top-8">
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

        <VStack id="about" className="bg-[#25D167] font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex flex-col lg:flex-row justify-between items-center gap-8">
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
          <VStack className="grid grid-cols-1 lg:grid-cols-2  gap-8  mt-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 h-[380px] lg:h-[300px] rounded-lg shadow-lg flex-1 flex flex-col">
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
            <VStack className="bg-white p-6 h-[370px] lg:h-[300px] rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  OUR MISSION
                </h2>
                <p className="text-gray-700">
                  <small className="text-[16px]">What defines us?</small>
                  <br />
                  <br />
                  To build a dynamic community that empowers individuals to
                  achieve their fullest potential by turning reading into
                  intentional, actionable growth.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 h-[380px] lg:h-[300px] rounded-lg shadow-lg flex-1 flex flex-col">
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  OUR REWARDS
                </h2>
                <p className="text-gray-700">
                  <small className="text-[16px]">Where are we going?</small>
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
            <VStack className="bg-white p-6 h-[380px] lg:h-[300px] rounded-lg shadow-lg flex-1 flex flex-col">
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

        <VStack id="services" className="bg-white font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex justify-center items-center">
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

          <VStack className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Card 1 */}
            <VStack className="bg-white p-4 h-60 rounded-lg shadow-lg flex flex-col items-start justify-center">
              <div className="p-4">
                <h2 className="flex flex-col items-center lg:items-start gap-4 lg:gap-2  lg:text-xl font-semibold text-gray-900 mb-6">
                  <img src={bookj} alt="book" width={50}/> <small className="text-[17px]">CURATED BOOK LISTS</small>
                </h2>
                <p className="text-gray-700 text-center lg:text-start">
                  Carefully curated books that inspire growth and knowledge.
                </p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white h-60 p-4 rounded-lg shadow-lg flex flex-col items-start justify-center">
              <div className="p-4">
                <h2 className="flex flex-col items-center lg:items-start gap-4 lg:gap-2 lg:text-xl  font-semibold text-gray-900 mb-4">
                  <img src={event} alt="event-image" width={50}/> 
                  <small className="text-[17px]">INTERACTIVE EVENTS</small>
                </h2>
                <p className="text-gray-700 text-center lg:text-start">
                  Webinars, discussions, and workshops and exclusive physical
                  meetings.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white h-60 p-4 rounded-lg shadow-lg flex flex-col items-start justify-center">
              <div className="p-4">
                <h2 className="flex flex-col items-center lg:items-start gap-4 lg:gap-2 text-[17px] lg:text-xl  font-semibold text-gray-900 mb-4">
                  <img src={growth} alt="growth-image" width={50} />
                  <small className="text-[17px]">GROWTH TOOLS</small>
                </h2>
                <p className="text-gray-700 text-center lg:text-start">
                  Growth maps, personalized trackers, worksheets and action
                  guides.
                </p>
              </div>
            </VStack>

            {/* Card 4 */}
            <VStack className="bg-white h-60 p-4 rounded-lg shadow-lg flex flex-col items-start justify-center">
              <div className="p-4">
                <h2 className="flex flex-col  items-center lg:items-start gap-4 lg:gap-5 lg:text-xl  font-semibold text-gray-900 mb-4">
                  <img src={community} alt="community" width={50}/>
                  <small className="text-[17px]">SUPPORTIVE COMMUNITY</small>
                </h2>
                <p className="text-gray-700 text-center lg:text-start">
                  Engage with members who share your passion for learning and
                  growth.
                </p>
              </div>
            </VStack>
          </VStack>
        </VStack>

        <VStack  className="bg-white font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex justify-center items-center">
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
        {/* Key Features */}
        <VStack className="w-[95%] mx-auto">
        <VStack className="max-w-[1200px] mx-auto font-suse py-10 px-3 rounded-md bg-white shadow-lg">
          <h1 className="text-[28px] lg:text-4xl font-extrabold text-gray-900 mb-6 text-center">Key Features Of The REACH PROGRAM</h1>
          <h2 className="lg:text-xl text-[17.5px] text-center">A personalized 12-week coaching program</h2>
          <div className="mt-6">
            <ul className="text-[20px] w-[95%] mx-auto gap-4 px-3 grid grid-cols-1 lg:grid-cols-2">
              <li className="flex items-center gap-1 ">
                <img src={check} alt="" width={20}/>
                <small>A tailored growth map designed to help you achieve your personal goals</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>A curated list of top-tier books & video course</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Bi-weekly live coaching clarity calls and Q&A sessions with our lead coach</small></li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Exclusive membership to a dynamic & growth-oriented community</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Entry to our exclusive monthly physical meetings</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Weekly challenges to help apply lessons learned</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Inclusion in a smaller coaching squad for better accountability</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Certificates of completion and progress recognition</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Mentorship opportunities with experienced guides</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Membership giveaways and spotlight opportunities</small>
              </li>
              <li className="flex items-center gap-1 ">
              <img src={check} alt="" width={20}/>
                <small>Join our Alumni community for continued support and growth after program completion</small>
              </li>
            </ul>
          </div>
        </VStack>
        </VStack>

        
        <VStack className="bg-white font-suse py-20 px-6 sm:px-8 lg:px-36 my-4 flex justify-center items-center">
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center">
            <h1 className="text-[28px] lg:text-4xl font-extrabold text-gray-900 mb-6">
              Lead the Growth Movement on Your Campus
            </h1>
          </VStack>
          <VStack className="text-center max-w-3xl flex flex-col justify-center items-center mb-8">
            <p className="text-lg text-gray-700">
              Are you a university student in Nigeria passionate about personal
              growth? Love inspiring others? Join the ReadEvolve Ambassador
              Program and be the face of transformation on your campus. As an
              ambassador, you will:
            </p>
          </VStack>

          <VStack className="flex flex-col lg:flex-row gap-8 items-center mb-10">
            {/* Card 1 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1 h-[300px] w-full">
              <div className="text-[#25D167] mb-2 p-4 items-center">
                {/* Icon */}
                <img
                  src={viral}
                  // className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Viral Icon"
                />
              </div>
              <div className="p-4 flex flex-col items-start justify-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  SPREAD THE WORD
                </h2>
                <p className="text-gray-700">
                  Spread the word about ReadEvolve.
                </p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center  flex-1 h-[300px] w-full">
              <div className="text-[#F59E0B] mb-2 p-4">
                {/* Icon */}
                <img
                  src={events}
                  // className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Events Icon"
                />
              </div>
              <div className="p-4 flex flex-col items-start justify-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  EVENTS
                </h2>
                <p className="text-gray-700">
                  Host events and challenges for your peers.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white p-6 rounded-lg shadow-lg items-center flex-1 h-[300px] w-full">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={network}
                    // className="w-6 h-6"
                  style={{ width: "60px", height: "60px" }}
                  alt="Network Icon"
                />
              </div>
              <div className="p-4 flex flex-col items-start justify-center">
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
            <VStack className="bg-white h-[250px] p-6 rounded-lg shadow-lg items-center flex-1 w-full">
              <div className="text-[#25D167] mb-2 p-4">
                {/* Icon */}
                <img
                  src={member}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Member Icon"
                />
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  MEMBERSHIP
                </h2>
                <p className="text-gray-700">Free premium membership.</p>
              </div>
            </VStack>

            {/* Card 2 */}
            <VStack className="bg-white h-[250px] p-6 rounded-lg shadow-lg items-center flex-1 w-full">
              <div className="text-[#F59E0B] mb-2 p-4">
                {/* Icon */}
                <img
                  src={certificate}
                  className="w-6 h-6"
                  style={{ width: "72px", height: "72px" }}
                  alt="Certificate Icon"
                />
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  CERTIFICATION
                </h2>
                <p className="text-gray-700">
                  Leadership training and certifications.
                </p>
              </div>
            </VStack>

            {/* Card 3 */}
            <VStack className="bg-white h-[250px] p-6 rounded-lg shadow-lg items-center flex-1 w-full">
              <div className="text-[#3B82F6] mb-2 p-4 pt-8">
                {/* Icon */}
                <img
                  src={gift}
                  //   className="w-6 h-6"
                  style={{ width: "58px", height: "58px" }}
                  alt="Gift Icon" width={50}
                />
              </div>
              <div className="p-2">
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

        {/* Testimonial Section */}
        <VStack className="flex  flex-col items-center gap-10 p-2 font-suse">
        <VStack className="text-center max-w-3xl flex flex-col justify-center items-center">
            <h1 className="text-[28px] lg:text-4xl font-extrabold text-gray-900 mb-6">
              What People Are Saying About Us
            </h1>
          </VStack>
            <Swiper className="w-full lg:w-1/2 h-[38rem] md:h-[35rem] lg:h-[31rem]"
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={true}
                  loop={true}
                >
                <SwiperSlide className="bg-[#25D167] text-white px-6 py-5 rounded-lg">
                  <div className="flex justify-center m-5 items-center">
                  <img src={testimonial_1} alt="testimonial 1" className="rounded-full w-[150px] h-[150px]" width={200}/>
                  </div>
                  <div className="flex flex-col gap-3 text-center text-[23px] md:text-[25px] lg:text-[25px]">
                  <small>I've always loved to read but it is hard to pick
                    up books but being in a ReadEvolve community has given me the momentum
                    to intentionally pick a book and read and that's because I see other community members talk about 
                    what they've read and learnt in books which always inspire me.</small>
                  <small>It's a privilege for me to be in ReadEvolve and I'm grateful for it.</small>      
                  <i>King</i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#25D167] text-white px-6 py-5 rounded-lg">
                  <div className="flex justify-center m-5 items-center">
                  <img src={testimonial_2} alt="testimonial 2"  className="rounded-full  w-[150px] h-[150px]" width={200}/>
                  </div>
                  <div className="flex flex-col gap-3 text-center text-[23px] md:text-[25px] lg:text-[25px]">
                    <small>ReadEvolve is a game-changer for book lovers.</small> 
                    <small>The sense of community here is unmatched,it's like having a community
                      that's always active and filled with people who truly understand the purpose of reading.
                    </small> 
                    <small>If you love books,this is the place to be!</small>  
                  <i>Kehinde Awodele</i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#25D167] text-white px-6 py-5 rounded-lg">
                  <div className="flex justify-center m-5 items-center">
                  <img src={testimonial_3} alt="testimonial 3"  className="rounded-full  w-[150px] h-[150px]" width={200} />
                  </div>
                  <div className="flex flex-col gap-3 text-center text-[23px] md:text-[25px] lg:text-[25px]">
                  <small>I decided to start reading nonfiction books December 2023 and boom, ReadEvolve launched.
                  I have to say all the books we've read have helped me understand myself better and become a better human too.
                  I really learnt a lot from the books curated and having a community where I could share my thoughts was really
                  helpful in keeping me accountable.</small>
                  <small>To ReadEvolve, I say thank you.</small>
                  <i>Fisayo Akinleye</i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[#25D167] text-white px-6 py-5 rounded-lg">
                  <div className="flex justify-center m-5 items-center">
                  <img src={testimonial_4} alt="testimonial 3" className="rounded-full  w-[150px] h-[150px]" width={200}/>
                  </div>
                  <div className="flex flex-col gap-3 text-center text-[23px] md:text-[25px] lg:text-[25px]">
                  <small>ReadEvolve has been very helpful, it's a great community with an amazing coach.
                  The carefully selected books have always been helpful, and the insights I've gotten from the books
                  I've read in the community have helped me greatly in becoming a better human.
                  </small>
                  <small>It's a community I highly recommend for anyone who wants to improve all areas of their lives.
                  </small>

                  <i>Love Bearer, Barnabas David.</i>
                  </div>
                </SwiperSlide>
            </Swiper>
            </VStack>
      </VStack>
    </>
  );
}
