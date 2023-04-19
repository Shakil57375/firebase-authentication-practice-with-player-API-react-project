import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PlayerInfo = ({player}) => {
    // console.log(player);
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
      }
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
    const [fold, setFold] = useState(true)
    const {strDescriptionEN,strBirthLocation,strNationality,strPosition,strSport,strCutout,strWeight} = player
    return (
        <div>
        <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto mt-5'>
        {/* Image Container */}
        <div className=' lg:w-1/2 h-full'>
          <img
            src={strCutout}
            alt='Player image'
            className='object-cover w-full  lg:h-full'
          />
        </div>
        {/* Details Container */}
        <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
          <p className=' text-gray-900'>BirthPlace: {strBirthLocation}</p>
          <p className=' text-gray-900'>Nationality: {strNationality}</p>
          <p className=' text-gray-900'>Positon: {strPosition}</p>
          <p className='mb-5 text-gray-900'>Profession: {strSport}</p>
          <p className='mb-5 text-gray-900'>Weight: {strWeight}</p>
          {fold ? (
            <>
              <p className=' text-gray-500'>{strDescriptionEN.substring(0, 100)}.....</p>
              <span
                className='cursor-pointer text-blue-600 '
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=' text-gray-900'>{strDescriptionEN}.....</p>
              <span
                className='cursor-pointer text-blue-600 '
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}
          <button onClick={handleGoBack} className="btn absolute bottom-2 inline-block">Go Back</button>
        </div>
      </div>
        </div>
    );
};

export default PlayerInfo;