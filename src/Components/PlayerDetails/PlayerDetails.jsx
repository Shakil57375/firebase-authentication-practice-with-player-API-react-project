import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams } from 'react-router-dom';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

const PlayerDetails = () => {
    const {Id} = useParams()
    const playerDetail = useLoaderData()
    // console.log(playerDetail);
    console.log(Id);
    const [playerInformation, setPlayerInformation] = useState({})
    useEffect(()=>{
        const playerData = playerDetail && playerDetail.find(player => player.id === parseInt(Id));
        setPlayerInformation(playerData)
    },[Id])
    
    return (
        <div>
            {
                <PlayerInfo playerInformation = {playerInformation} key={playerInformation.id} ></PlayerInfo>
            }
        </div>
    );
};

export default PlayerDetails;