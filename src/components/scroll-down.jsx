import React from 'react';
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ScrollDown = ({ to }) => {
  return (
    <div className="flex justify-center items-center py-6">
      <Link
        to={to}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <ArrowDownwardIcon className="text-black dark:text-white w-8 h-8 hover:scale-125 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ScrollDown;
