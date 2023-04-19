import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Player from '../Player/Player';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Home = () => {
    const [cart, setCart] = useState([]);
    const players = useLoaderData()

    useEffect(() => {
        // console.log(players);
        const storedPlayer = getShoppingCart();
        const playerCart = [];
        for(const id in storedPlayer){
            // console.log(id);
            const savedPlayers = players.player.find(player => player.idPlayer === id);
            // console.log(savedPlayers)
            if(savedPlayers){
                const quantity = storedPlayer[id];
                savedPlayers.idTeam2= quantity;
                playerCart.push(savedPlayers);
                console.log(savedPlayers);
            }
            // console.log(savedPlayers);
        }
        setCart(playerCart);
    },[players])

    const handleAddToCart = (player) =>{
        // console.log(player);
        const newCart = [...cart, player];
        setCart(newCart);
        addToDb(player.idPlayer);

    }
    // console.log(players.player)
    // console.log(cart)
    let totalPrice = 0;
    for (const player of cart){
        totalPrice = totalPrice + parseInt(player.idTeam);
    }
    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + tax;
    return (
        <div className='w-full flex justify-between mx-20'>
            <div className='grid w-9/12 lg:grid-cols-2 sm:grid-cols-1  gap-4'>
            {
                players.player.map(player => <Player handleAddToCart = {handleAddToCart} player  = {player} key = {player.idPlayer}></Player> )
            }
            </div>
            <div className='grid w-3/12 grid-cols-1 bg-blue-600 text-white mt-5 fixed right-0 top-16 px-10 py-4 rounded shadow-xl h-80 gap-4'>
                <h1 className='text-3xl font-semibold'>Your Buys</h1>
                <p>Selected Players: {cart.length} </p>
                <p>Total Price : {totalPrice} </p>
                <p>Tax : {tax.toFixed(2)} </p>
                <h6>Grand Total : {grandTotal.toFixed(2)} </h6>
            </div>
        </div>
    );
};

export default Home;