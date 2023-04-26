import { getShoppingCart } from "../Components/utilities/fakedb";

export const selectedPlayers = async () => {
    const players = await fetch('/data.json');
    const player = await players.json();
    const storedJobs = getShoppingCart()
    const savedPlayers = []
    for (const id in storedJobs){
        const addedPlayers = player.find(pl => pl.id === id)
        if(addedPlayers){
            savedPlayers.push(addedPlayers)
        }
    }
    return savedPlayers;
}