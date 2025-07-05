import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { FaBehance } from 'react-icons/fa';

const iconMap = {
  github: <GitHub />,   
  linkedin: <LinkedIn />,
  behance: <FaBehance size={21}/>,
  email: <Email />
};

const Icon = ({ name, className }) => {
  return <span className={className}>{iconMap[name]}</span>;
};

export default Icon;
