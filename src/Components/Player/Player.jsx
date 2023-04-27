import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Player = ({ player, handleAddToCart }) => {
      // console.log(player);
    const navigation = useNavigation();
if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>
  }
  
  const {name,images, marketPrice, id, position}  = player
  // console.log(player);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mt-28 lg:mt-44 ">
        <figure className="px-10 pt-10">
          <img
            src={images} 
            alt="Shoes"
            className="rounded-xl h-[300px] w-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: <span>$</span> {marketPrice} million</p>
          <p>Position: {position} </p>
          <div className="card-actions">
            <Link to={`/player/${id}`}>
              <button className="btn btn-primary mr-8">See details</button>
            </Link>
            <button onClick={ () => handleAddToCart(player)} className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
