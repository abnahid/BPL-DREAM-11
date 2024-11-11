/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Player from "./Player";
import SelectedPlayer from "./SelectedPlayer";

const Main = ({ setCoinBalance, coinBalance }) => {
  const [players, setPlayer] = useState([]);
  const [selectPlayers, setSelectPlayer] = useState([]);
  const [playersHandle, setPlayersHandle] = useState(true);
  const [addPlayers, setAddPlayer] = useState([]);

  useEffect(() => {
    fetch("/players.JSON")
      .then((res) => res.json())
      .then((data) => setPlayer(data.players));
  }, []);

  const HandlePlayersBtn = (value) => {
    setPlayersHandle(value);

    const filterPlayer = players.filter((player) =>
      addPlayers.includes(player.playerId)
    );
    setSelectPlayer(filterPlayer);
  };

  const handleDeletePlayer = (id) => {
    const playerToRemove = players.find((player) => player.playerId === id);

    if (playerToRemove) {
      setCoinBalance(
        (prevBalance) => prevBalance + playerToRemove.biddingPrice
      );
    }

    const exitPlayer = selectPlayers.filter((player) => player.playerId !== id);
    setSelectPlayer(exitPlayer);

    const filterPlayer = addPlayers.filter((playerId) => playerId !== id);
    setAddPlayer(filterPlayer);
  };

  const choosePlayer = (biddingPrice, playerId) => {
    if (coinBalance < biddingPrice) {
      toast.error("Error! Balance is too low to add this player.", {
        position: "top-right",
      });
      return;
    }

    if (addPlayers.length >= 6) {
      toast.warn("Error! You can only add up to six players.", {
        position: "top-right",
      });
      return;
    }

    if (addPlayers.includes(playerId)) {
      toast.error("Error! This player is already selected.", {
        position: "top-right",
      });
      return;
    }

    setCoinBalance((prevBalance) => prevBalance - biddingPrice);
    setAddPlayer((prev) => [...prev, playerId]);
    toast.success("Player added successfully!", {
      position: "top-right",
    });
  };

  return (
    <div className="mb-52 container mx-auto ">
      <div className="flex justify-between mx-5 my-10">
        <h2 className="text-3xl font-bold text-gray-900">
          {playersHandle
            ? "Available Players"
            : `Selected Players (${addPlayers.length}/6)`}
        </h2>
        <div className="join font-bold text-2xl">
          <button
            onClick={() => HandlePlayersBtn(true)}
            className="btn join-item bg-yellow-300"
          >
            Available
          </button>
          <button
            onClick={() => HandlePlayersBtn(false)}
            className="btn join-item"
          >
            Selected ({addPlayers.length})
          </button>
        </div>
      </div>

      {playersHandle ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
          {players.map((player) => (
            <Player
              choosePlayer={choosePlayer}
              player={player}
              key={player.playerId}
            ></Player>
          ))}
        </div>
      ) : (
        <div className="mx-5">
          {selectPlayers.map((player) => (
            <SelectedPlayer
              handleDeletePlayer={handleDeletePlayer}
              key={player.playerId}
              player={player}
            ></SelectedPlayer>
          ))}

          <button
            onClick={() => HandlePlayersBtn(true)}
            className="btn join-item bg-yellow-300 outline outline-offset-8 outline-yellow-400 hover:bg-yellow-400 transition-colors"
          >
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
