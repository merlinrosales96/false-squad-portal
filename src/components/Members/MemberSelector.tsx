import React from 'react';
import MemberCard from './MemberCard';

interface FighterCardProps {
  id: string;
  name: string;
}

const MemberSelector: React.FC<FighterCardProps> = ({ id, name }) => {
  return (
    <div className="relative">
      {/* Boxer Card */}
      <MemberCard id={id} name={name} />

      {/* Fighter Info */}
      <div
        id="fighter-container"
        className="pointer-events-none absolute inset-0 hidden flex-col items-center peer-hover:flex peer-focus:flex peer-focus-visible:flex"
      >
        {/* Fighter Name */}
        <div className="relative top-96 mx-auto h-[4.5rem] flex w-full items-center justify-center z-10 animate-zoom-in">
          <img
            data-id={`hero-text-${id}`}
            src={`/images/members/text/${id}.png`}
            alt={name}
            decoding="async"
            className="w-auto h-full absolute mask-fade-text"
            loading="lazy"
          />
        </div>

        {/* Fighter Image */}
        <div className="mask-fade-bottom relative bottom-0 mx-auto h-[80vh] flex w-full items-center justify-center animate-slide-up-fade">
          <img
            data-id={`hero-image-${id}`}
            src={`/images/members/big/${id}.png`}
            alt={name}
            decoding="async"
            className="w-auto h-full absolute"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberSelector;
