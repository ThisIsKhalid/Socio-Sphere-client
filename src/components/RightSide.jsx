/* eslint-disable react/no-unescaped-entities */
import laptop from "../assets/images/laptop.jpg";

const RightSide = () => {
  return (
    <section className="lg:flex md:hidden">
      <div className="bg-white/80 border border-gray-200  shadow-lg rounded-lg px-2 py-3">
        <div>
          <img src={laptop} alt="" className="rounded-lg" />
          <p className=" text-gray-600 mt-3 text-sm">
            "High-performance laptop for sale. Excellent condition, fast
            processor, ample storage. Ideal for work or play. Contact for
            details and price. Don't miss out!"
          </p>
          <button className="btn btn-xs btn-info mt-3">See More</button>
        </div>
      </div>
    </section>
  );
};

export default RightSide;
