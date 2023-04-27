import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PlayerInfo = ({ playerInformation }) => {
  console.log(playerInformation);
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
  const navigate = useNavigate()
  const handleGoBack = () =>{
      navigate(-1)
  }
  const [fold, setFold] = useState(true)
  const {
    name,
    nationality,
    currentClub,
    currentAddress,
    maritalStatus,
    marketPrice,
    passingAccuracy,
    dribble,
    goals,
    assists,
    position,
    crossSuccessRate,
    goalsPerSeason,
    assistsPerSeason,
    fitness,
    description,
    images,
  } = playerInformation;
  return (
    <div>
      <div className="flex-col lg:mt-44 mt-20  flex max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto relative">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={images}
            alt="Player image"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <p className=" text-gray-900 text-2xl font-bold">Name: {name}</p>
          <p className=" text-gray-900">Nationality: {nationality}</p>
          <p className=" text-gray-900">Position: {position}</p>
          <p className="mb-5 text-gray-900">CurrentClub: {currentClub}</p>
          <p className="mb-5 text-gray-900">CurrentAddress: {currentAddress}</p>
          <p className="mb-5 text-gray-900">MaritalStatus: {maritalStatus}</p>
          {fold ? (
            <>
              <p className=" text-gray-500">
                {description?.substring(0, 100)}.....
              </p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=" text-gray-900">{description}.....</p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
            
          )}
          <button
            onClick={handleGoBack}
            className="btn absolute lg:bottom-10 bottom-0 inline-block"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
