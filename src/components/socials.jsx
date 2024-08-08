import React from 'react';
import { socialMedia } from '../config/index';
import Icon from './Icons';

const Social = () => {
  return (
    <div className="fixed bottom-0 right-0 p-4 px-2 lg:px-6">
      <ul className="flex flex-col items-center space-y-4">
        {socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a 
              href={url} 
              aria-label={name} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 hover:translate-y-[-3px] transition-transform"
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