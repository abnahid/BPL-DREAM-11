import bgShadow from "../assets/bg-shadow.png";
import "../index.css";

const Newsletter = () => {
  return (
    <div className="bg-[#06091A] relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white border rounded-3xl border-gray-900 border-opacity-10 h-auto w-full max-w-4xl mx-auto overflow-hidden outline outline-offset-[10px] outline-gray-50 -mt-40">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl z-0"
          src={bgShadow}
          alt="background shadow image"
        />

        <div className="relative z-10 inset-0 flex flex-col items-center justify-center text-center space-y-4 py-16 px-6">
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Subscribe to our Newsletter
            </p>

            <p className="text-lg sm:text-xl font-medium text-gray-900 text-opacity-70">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <input
              className="input input-bordered w-full sm:w-96 px-4 py-3"
              placeholder="Enter your email"
              type="email"
            />
            <button className="btn bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 border-none rounded-xl shadow-inner animate-gradient w-full sm:w-auto px-8 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
