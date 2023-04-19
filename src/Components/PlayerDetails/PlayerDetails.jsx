import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

const PlayerDetails = () => {
    const playerDetails = useLoaderData()
    console.log(playerDetails.players);
    return (
        <div>
            {
                playerDetails.players.map(player => <PlayerInfo player = {player} key = {player.idPlayer} ></PlayerInfo> )
            }
        </div>
    );
};

export default PlayerDetails;