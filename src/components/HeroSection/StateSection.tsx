import CountUp from "react-countup";

const StateSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#7d18c0] to-[#754f8e] text-white py-2">
      <div className="max-w-4xl mx-auto flex justify-between items-center text-center">
        {/* Stats Item */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={5} duration={5} suffix="+" />
          </h2>
          <p className="text-sm uppercase tracking-widest">Years</p>
        </div>

        {/* Stats Item */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={1000} duration={5} suffix="+" />
          </h2>
          <p className="text-sm uppercase tracking-widest">Hours Invested</p>
        </div>

        {/* Stats Item */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-extrabold">
            <CountUp start={0} end={20} duration={5} suffix="+" />
          </h2>
          <p className="text-sm uppercase tracking-widest">Concepts delivered</p>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
