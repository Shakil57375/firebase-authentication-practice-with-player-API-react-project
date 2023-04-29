import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const scrollToTop = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo({
            top: scrollTop - scrollTop / 8,
            behavior: 'auto'
          });
        }
    };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowCircleUp className='text-3xl fixed bottom-5 right-5 pointer' />
    </div>
  );
};

export default ScrollToTop;
