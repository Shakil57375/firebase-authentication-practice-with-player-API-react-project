import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams } from 'react-router-dom';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

const PlayerDetails = () => {
    const {id} = useParams()
    const playerDetail = useLoaderData()
    // console.log(playerDetail);
    // console.log(id);
    const [playerInformation, setPlayerInformation] = useState({})
    useEffect(()=>{
        const playerData = playerDetail && playerDetail.find(player => player.id === id);
        setPlayerInformation(playerData)
    },[id])
    return (
        <div>
            {
                <PlayerInfo playerInformation = {playerInformation} ></PlayerInfo>
            }
        </div>
    );
};

export default PlayerDetails;