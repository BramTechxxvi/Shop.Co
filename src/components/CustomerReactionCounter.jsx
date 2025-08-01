import CountUp from 'react-countup';

const stats = [
    { value: 270, suffix: "+", label: "International Brands" },
    { value: 5000, suffix: "+", label: "High-Quality Products" },
    { value: 100000, suffix: "+", label: "Happy Customers" },
];

const CustomerReactionCounter = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start"
            >
              <p className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-stone-800 hover:scale-105 transition duration-300 ease-in-out">
                <CountUp end={stat.value} duration={4} separator="," />
                {stat.suffix}
              </p>
              <span className="mt-2 text-sm sm:text-base text-gray-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div> 
    </section>
  )
}

export default CustomerReactionCounter;