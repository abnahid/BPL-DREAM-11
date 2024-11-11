/* eslint-disable react/prop-types */
const SelectPlayers = ({ player, handleDeletePlayer }) => {
  const { playerId, name, image, battingType, biddingPrice, bowlingType } =
    player;

  return (
    <div className="flex justify-between items-center mx-5 my-10 border p-5 rounded-md">
      <div className="flex gap-5 content-center items-center font-semibold">
        <img
          className="w-20 h-20 object-cover rounded-3xl"
          src={image}
          alt="Player"
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{battingType}</p>
          <p>{bowlingType}</p>
        </div>
      </div>

      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-11 text-red-500 ">
          <i className="fa-solid fa-minus text-sm"></i>
          <i className="fa-solid fa-dollar-sign"></i>
          {biddingPrice}
        </h2>
        <button onClick={() => handleDeletePlayer(playerId)} className="btn">
          <i className="fa-regular fa-trash-can text-red-500 text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectPlayers;
