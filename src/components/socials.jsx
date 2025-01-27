import React from 'react';
import { socialMedia } from '../config/index';
import Icon from './Icons';

const Social = () => {
  return (
    <div className="fixed bottom-0 right-0 p-2 lg:p-4 px-2 lg:px-4">
      <ul className="flex flex-col items-center space-y-4">
        {socialMedia.map(({ url, name }, i) => (
          <li key={i} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'>
            <a
              href={url} 
              aria-label={name} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2"
            >
              <Icon name={name} className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
