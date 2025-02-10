const CrimeReport = () => {
  // Sample data for reported crimes
  const crimes = [
    {
      id: 1,
      type: "Theft",
      location: "Downtown, City A",
      description: "A bag was stolen from a parked car near the mall.",
      date: "2023-10-15",
    },
    {
      id: 2,
      type: "Vandalism",
      location: "Suburb, City B",
      description: "Graffiti was found on public property.",
      date: "2023-10-10",
    },
    {
      id: 3,
      type: "Assault",
      location: "Central Park, City C",
      description: "A physical altercation was reported late at night.",
      date: "2023-10-05",
    },
    {
      id: 4,
      type: "Burglary",
      location: "Residential Area, City D",
      description: "A house was broken into while the owners were away.",
      date: "2023-09-28",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Reported Crimes</h2>

        {/* Crime Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crimes.map((crime) => (
            <div
              key={crime.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {crime.type}
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {crime.location}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Description:</span>{" "}
                {crime.description}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Date Reported:</span> {crime.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrimeReport;
