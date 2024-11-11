/* eslint-disable react/prop-types */
import bannerMain from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";

const Banner = ({ onClaimFreeCredit }) => {
  return (
    <div className="relative bg-[#131313] rounded-3xl my-8 mx-4 overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgShadow}
        alt="background shadow image"
      />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-12">
        <img src={bannerMain} alt="banner logo image" className="max-w-xs" />
        <h1 className="text-3xl font-bold text-white text-center sm:w-4/5 md:w-full">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font_inter text-xl font-medium text-white text-opacity-70 pb-4">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={onClaimFreeCredit}
          className="btn bg-yellow-300 border-none text-sm font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors outline outline-offset-8 outline-yellow-400"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
