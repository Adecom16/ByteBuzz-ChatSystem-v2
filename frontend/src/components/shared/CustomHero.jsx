import React from "react";
import { AiFillStar } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="lg:text-center flex">
      <h2 className="text-4xl font-extrabold text-orange-600 mb-4">Apex</h2>
      <nav className="flex justify-center space-x-4 mb-8">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Demos
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Blog
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Pages
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Login
        </a>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="pt-[60px] pb-[88px]">text-foreground flex flex-col text-center md:text-start md:items-start items-center gap-6">
        <div className="rounded-full border py-2 px-3 w-max text-sm backdrop-blur-md u
      <div className="ppercase">
          Over 30000 users world wide
        </div>
        <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl uppercase">
          Decentralized Chat Solutions: Empowering Digital Businesses with
          Secure Communication
        </h1>
        <p className="text-base md:text-xl font-normal max-w-[700px] w-full">
          With its innovative network, Decentralized Chat Solutions is
          transforming digital communication and opening the door to
          unrestricted, safe digital interactions. It provides unparalleled
          security and anonymity.
        </p>
        <div className="flex items-center justify-between w-full mt-6 md:mt-10">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700">
            Get Started
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, key) => (
                <AiFillStar key={key} className="w-5 h-5 text-primary" />
              ))}
            </div>
            <p className="text-base font-normal">Trusted by 100+ businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="lg:w-1/2">
      <img
        src="/assets/chatgirl.png"
        alt="Woman chatting on phone"
        className="rounded-lg shadow-lg"
      />
      <div className="flex items-center justify-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="text-gray-600">2,291 Happy Customers</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-yellow-400">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <div className="text-gray-600">4.8/5 Rating</div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-4 bg-yellow-100 p-4 rounded-md">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="text-gray-600">
            Jenny Wilson: I'm redesigning my Frame. I want to add some fancy
            icons. Do you have any icon set?
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-green-100 p-4 rounded-md">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="text-gray-600">
            Ronald Richards: One of the best chatting apps I have ever used.
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Hero />
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
