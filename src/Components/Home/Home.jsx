import React from 'react';
import main_image from '../../../public/55106-soccer-empty-state.json'
import Lottie from 'lottie-react'
const Home = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col-reverse mt-20 justify-normal lg:justify-between items-start lg:px-32 px-4'>
                <div className='lg:w-6/12 w-full mt-0 lg:mt-32'>
                    <p className='lg:text-6xl text-3xl font-bold text-blue-800 mb-4'> Build Your Dream 11 Team and Conquer the Game!</p>
                    <p className='lg:text-3xl text-2xl font-semibold text-blue-600 mb-4'>Create Your Fantasy Football Team with Ease.</p>
                    <p className='text-[16px]'>Welcome to our platform where you can pick your own dream 11 players and create a winning team! With our user-friendly interface, it's easy to select your favorite players and strategies for the next big match. Whether you're a seasoned cricket fan or just getting started, our site offers everything you need to build a top-performing team. So, what are you waiting for? Start assembling your dream 11 team today and lead them to victory!</p>
                </div>
                <div className='lg:w-6/12 w-full'>
                    <Lottie animationData={main_image} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;

/* 

*/