import logoFooter from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-neutral-content py-10">
      <div className="flex justify-center mb-10">
        <img src={logoFooter} alt="" />
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="font-bold text-lg text-white">About Us</h5>
          <p className="mt-2 text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-lg text-white">Quick Links</h5>
          <ul className="mt-2">
            <li className="text-gray-400 hover:text-yellow-500">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-400 hover:text-yellow-500">
              <a href="#">Services</a>
            </li>
            <li className="text-gray-400 hover:text-yellow-500">
              <a href="#">About</a>
            </li>
            <li className="text-gray-400 hover:text-yellow-500">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg text-white">Subscribe</h5>
          <p className="mt-2 text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="join mt-4">
            <input
              className="input input-bordered join-item w-full max-w-xs "
              placeholder="Enter your email"
            />
            <button className="btn join-item bg-gradient-to-r from-yellow-400 via-yellow-300 to-pink-300 animate-gradient">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="text-center text-gray-400">
        <p>©2024 Ab Nahid All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
