import React from 'react';
import { GitHub, Twitter, LinkedIn, Instagram, FastfoodSharp, Email } from '@mui/icons-material';

const iconMap = {
  github: <GitHub />,   
  twitter: <Twitter />,
  linkedin: <LinkedIn />,
  instagram: <Instagram />,
  email: <Email />
};

const Icon = ({ name, className }) => {
  return <span className={className}>{iconMap[name]}</span>;
};

export default Icon;
