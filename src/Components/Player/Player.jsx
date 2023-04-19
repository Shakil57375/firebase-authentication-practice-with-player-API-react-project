import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Player = ({ player , handleAddToCart }) => {
      console.log(player);
    const navigation = useNavigation();
if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>
  }
  const {strPlayer,strCutout, idPlayer, idTeam}  = player
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={strCutout} 
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Nicname: {strPlayer}</h2>
            <p>Price : $<span>{idTeam}</span> </p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link to={`/service/${idPlayer}`}>
              <button className="btn btn-primary">See details</button>
            </Link>
            <button onClick={() => handleAddToCart(player)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
