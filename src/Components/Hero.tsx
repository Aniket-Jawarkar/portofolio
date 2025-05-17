import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col items-start justify-start
    bg-gradient-to-b from-white to-gray-100
    pt-[100px] pl-[75px]
    text-left"  
      >
        <h1 className=" mb-4">
          <span className="text-lg text-gray-700 ">Hi, I&#39;m </span>
          <br />
          <span
            className="
                text-5xl font-extrabold
                bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                bg-clip-text text-transparent
                ml-7"
          >
            Aniket Jawarkar
          </span>
        </h1>
        <p className="text-lg text-gray-700 max-w-[4000px] mb-8 ">
          I'm a software engineer based in Toronto, Canada and also a
          communication and journalism student. I enjoy creating things that
          live on the internet, whether that be websites, applications, or
          anything in between. I have been freelancing for a year now while
          studying at the university and I've manage to gain a decent amount of
          experience and valuable knowledge from all different kinds of fields
          throughout my projects/work.
        </p>
      </section>

       <section id="tech-stack" className=" p-8 bg-gray-50 mt-20 ml-10">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p>Used for building interactive UIs and SPAs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
            <p>Adds type safety to JavaScript.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p>Utility-first CSS framework for rapid styling.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md"></div>
          <div className="p-6 bg-white rounded-lg shadow-md"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
