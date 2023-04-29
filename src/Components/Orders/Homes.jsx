import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Player from "../Player/Player";
import { addToDb, getShoppingCart } from "../utilities/fakedb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState(null);
  const players = useLoaderData();
  const filteredPlayer = filter
    ? players.filter((player) => player.position === filter)
    : players;
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  useEffect(() => {
    const storedPlayer = getShoppingCart();
    const playerCart = [];
    for (const id in storedPlayer) {
      const savedPlayers = players.find((player) => player.id === id);
      // console.log(savedPlayers);
      if (savedPlayers) {
        const quantity = storedPlayer[id];
        savedPlayers.quantity = quantity;
        playerCart.push(savedPlayers);
      }
    }
    setCart(playerCart);
  }, [players]);
  const handleAddToCart = (player) => {
    if (selectedPlayers.includes(player)) {
      toast("Player already added ❌");
      return;
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      toast("Player added ✔️");
    }
    let newCart = [];
    const exist = cart.find((pd) => parseInt(pd.id) === player.id);
    if (!exist) {
      player.quantity = 1;
      newCart = [...cart, player];
    } else {
      exist.player = exist.player + 1;
      const remaining = cart.filter((pd) => parseInt(pd.id) !== player.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(player.id);
  };
  console.log(cart);
  let quantity = 0;
  let totalPrice = 0;
  let totalShipping = 0;
  for (const player of cart) {
    totalPrice = totalPrice + parseInt(player.marketPrice);
    quantity = quantity + player.quantity;
    // console.log(quantity);
    // console.log(totalPrice);
    if (player.quantity === 0) {
      player.quantity = 1;
    }
    // another way to do so
    // product.quantity = product.quantity || 1;
  }

  return (
    <div>
      <div className="gap-4 flex justify-start items-center mb-10 text-center px-2">
        <div className="mt-56 fixed -top-6 lg:-top-24 z-50 left-0 lg:ml-20 ml-0 dropdown dropdown-right">
          <label tabIndex={0} className="btn m-1">
            Filter By
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow gap-1 rounded-box w-52">
              <button onClick={() => setFilter('goal_Keeper')} className="btn btn-primary">Goal-Keepers</button>
              <button onClick={() => setFilter('Forward')} className="btn btn-primary">Forwards</button>
              <button onClick={() => setFilter('Mid_fielder')} className="btn btn-primary">Mid-fielders</button>
              <button onClick={() => setFilter('winger')} className="btn btn-primary">Wingers</button>
              <button onClick={() => setFilter('Left_back')} className="btn btn-primary">Left-backs</button>
              <button onClick={() => setFilter('Right_back')} className="btn btn-primary">Right-backs</button>
          </ul>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col sm:justify-normal lg:justify-between sm:px-4 lg:px-20">
        <div className="grid lg:w-9/12 mt-32 w-full z-20 lg:grid-cols-2  sm:grid-cols-1 gap-4">
          {filteredPlayer &&
            filteredPlayer.map((player) => (
              <Player
                player={player}
                handleAddToCart={handleAddToCart}
                key={player.name}
              ></Player>
            ))}
        </div>
        <div className="lg:grid lg:w-3/12 w-full  lg:grid-cols-1 bg-blue-600 text-white lg:mt-28  fixed right-0 top-20 z-40 px-10 py-4 lg:rounded rounded-none shadow-xl  gap-4">
          <h1 className="text-3xl font-semibold">Your Buys</h1>
          <p>Selected Players: {quantity} </p>
          <p>Total Price : {totalPrice} </p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
