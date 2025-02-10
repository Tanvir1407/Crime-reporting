const HeroSection = () => {
  return (
    <div className="md:flex  bg-white items-center justify-between px-10 h-screen">
      <div className="max-w-lg ">
        <p className="text-sm text-gray-600 mb-2">
          Stand Up, Speak Out, Report Crime
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">CrimeWatch</h1>
        <p className="text-lg text-gray-700 mb-8">
          CrimeWatch is a dedicated platform for reporting and exposing criminal
          activities and syndicate operations. Join us in the fight for justice
          and transparency by sharing your reports and staying informed.
        </p>
        <div className="flex gap-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Report Crime
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 my-4">
        <img
          src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Crime Reporting"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
