/* eslint-disable react/prop-types */

const Player = ({ player, choosePlayer }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <div className="card bg-base-100 border border-gray-800 border-opacity-20">
      <figure>
        <img
          className="w-full h-96 object-cover object-top"
          src={image}
          alt="player"
        />
      </figure>
      <div className="p-5">
        <h2 className="card-title pb-2">
          <i className="fa-solid fa-user"></i>
          {name}
        </h2>

        <div className="flex justify-between">
          <p className="flex items-center text-gray-500 gap-3 text-lg">
            <i className="fa-solid fa-flag"></i>
            {country}
          </p>
          <button className="py-2 px-4 border rounded-lg bg-gray-500 bg-opacity-50">
            {role}
          </button>
        </div>
        <div className="divider"></div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl">Rating</h3>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">{battingType}</p>
            <p className="font-bold">{bowlingType}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">
              Price: <i className="fa-solid fa-dollar-sign"></i>
              {biddingPrice}
            </p>
            <p>
              <button
                className="btn"
                onClick={() => choosePlayer(biddingPrice, player.playerId)}
              >
                Choose Player
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
