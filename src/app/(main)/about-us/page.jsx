import React from "react";

export const metadata = {
  title: "Dragon News - About us",
  description: "Best News Portal in Bangladesh",
};



const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Dragon News</h1>
          <p className="text-gray-600 text-lg">
            Journalism Without Fear or Favour
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>

          <p className="text-gray-700 leading-8">
            Dragon News is a trusted digital news platform dedicated to
            delivering accurate, unbiased, and timely news from around the
            world. Our mission is to keep readers informed with reliable
            reporting, insightful analysis, and meaningful stories that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

            <p className="text-gray-700 leading-7">
              We believe that quality journalism strengthens communities and
              empowers people to make informed decisions. Our goal is to provide
              factual, balanced, and transparent reporting every day.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>

            <p className="text-gray-700 leading-7">
              To become one of the most respected news platforms by maintaining
              integrity, credibility, and excellence in journalism.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">What We Cover</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium">
              Politics
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium">
              Business
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium">
              Technology
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium">
              Sports
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium">
              Entertainment
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium">
              World News
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Informed With Dragon News
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            We are committed to providing trusted journalism that informs,
            inspires, and empowers our readers every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;