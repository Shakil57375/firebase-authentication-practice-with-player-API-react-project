import React from "react";

const MyPlayers = ({ players, handleRemoveItem}) => {
  // console.log(players);
  const {
    pace,
    shooting,
    passing,
    club_flag,
    National_flag,
    dribbling,
    defending,
    physicality,
    images,
    name,
    position,
    diving,
    handling,
    kicking,
    reflexes,
    speed,
    positioning,
    id
  } = players;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="flex gap-10">
          <div>
            <h1 className="flex-grow">{position}</h1>
            <img className="w-12 h-8 mb-6" src={club_flag} alt="" />
            <img className="w-12 h-8" src={National_flag} alt="" />
          </div>
          <div className="">
          <img className="w-56 h-44"
            src={images}
            alt="Shoes"
          />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">{name}</h2>
          <div className="flex justify-between">
            <div>
            {
              pace && <div>{pace} PAC</div>
            }
            {
              shooting && <div>{shooting} SHO</div>
            }
            {
              passing && <div>{passing} PAS</div>
            }
            {
              diving && <div>{diving} DIV</div>
            }
            {
              handling && <div>{handling} HAN</div>
            }
            {
              kicking && <div>{kicking} KIC</div>
            }
            </div>
            <div>
            {
              dribbling && <div>{dribbling} DRI</div>
            }
            {
              defending && <div>{defending} DEF</div>
            }
            {
              physicality && <div>{physicality} PHY</div>
            }
            {
              reflexes && <div>{reflexes} REF</div>
            }
            {
              speed && <div>{speed} SPE</div>
            }
            {
              positioning && <div>{positioning} POS</div>
            }
            </div>
          </div>
          <div className="card-actions justify-center">
            <button onClick={() => handleRemoveItem (id)} className="btn btn-primary">Remove player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlayers;
