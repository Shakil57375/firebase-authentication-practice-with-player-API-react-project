import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyPlayers from '../../MyPlayers/MyPlayers';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Team = () => {
    const selectedPlayers = useLoaderData()
    const [cart, setCart] = useState(selectedPlayers)
    console.log(selectedPlayers);
    const handleRemoveItem = (id) =>{
        setCart(cart.filter(player => player.id !== id))
        removeFromDb(id)
    }
    const handleResetTeam = () =>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div>
            <div className='grid sm:px-5 lg:px-20 sm:grid-cols-1 mt-28 lg:mt-44 lg:grid-cols-3 gap-10'>
                {
                    cart.map(players => <MyPlayers handleRemoveItem = {handleRemoveItem} handleResetTeam = {handleResetTeam} players ={players} key={players.id}></MyPlayers>)
                }
            </div>
            <div  className='w-full text-center'> 
                <Link to="/players">
                    <button onClick={handleResetTeam} className="btn btn-primary mt-5 ">Reset Team</button>
                </Link>
            </div>
        </div>
    );
};

export default Team;