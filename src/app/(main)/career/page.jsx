import React from "react";
export const metadata = {
  title: "Dragon News - Career",
  description: "Best News Portal in Bangladesh",
};

const CareerPage = () => {
  const jobs = [
    {
      title: "News Reporter",
      type: "Full Time",
      location: "Remote",
    },
    {
      title: "Content Writer",
      type: "Full Time",
      location: "Barishal, Bangladesh",
    },
    {
      title: "Social Media Manager",
      type: "Part Time",
      location: "Remote",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-600 text-lg">
          At Dragon News, we're passionate about delivering trusted journalism.
          If you're creative, motivated, and eager to make an impact, we'd love
          to hear from you.
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="grid md:grid-cols-3 gap-6 mb-14">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Growth Opportunities
          </h3>
          <p className="text-gray-600">
            Learn, grow, and advance your career with exciting challenges.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Flexible Work
          </h3>
          <p className="text-gray-600">
            Enjoy a healthy work-life balance with flexible schedules.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Great Team
          </h3>
          <p className="text-gray-600">
            Collaborate with talented professionals in a supportive environment.
          </p>
        </div>
      </div>

      {/* Open Positions */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Current Openings
        </h2>

        <div className="space-y-5 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">
                  {job.type} • {job.location}
                </p>
              </div>

              <button className="btn bg-purple-700 text-white border-none">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-black text-white rounded-xl p-10 text-center mt-14">
        <h2 className="text-3xl font-bold mb-4">
          Don't See Your Role?
        </h2>

        <p className="text-gray-300 mb-6">
          We're always looking for talented people. Send us your resume and
          we'll keep you in mind for future opportunities.
        </p>

        <button className="btn bg-pink-800 hover:bg-red-700 text-white border-none">
          Contact HR
        </button>
      </div>
    </div>
  );
};

export default CareerPage;