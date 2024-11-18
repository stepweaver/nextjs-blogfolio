import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub size={24} />, path: '' },
  { icon: <FaLinkedin size={24} />, path: '' },
];

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
