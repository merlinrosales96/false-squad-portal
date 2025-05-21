import React from 'react';
import Box from '@mui/material/Box';
import type { Members } from '../type/members';

interface Props {
  members: Members[];
}

const BoxerFighterContainer: React.FC<Props> = ({ members }: Props) => {
  return (
    <Box
      id="fighter-container"
      className="pointer-events-none absolute inset-0 flex flex-col items-center"
    >
      <Box className="z-1 relative top-96 mx-auto flex h-[4.5rem] w-full items-center justify-center">
        {members.map(({ id, name }) => (
          <Box key={id} className="relative h-20 overflow-hidden">
            <img
              data-id={`hero-text-${id}`}
              src={`/images/fighters/text/${id}.webp`}
              alt={name}
              decoding="async"
              className="mask-fade-text hidden h-full w-auto"
              loading="lazy"
            />
            <Box
              id={`mask-fade-text-${id}`}
              className="absolute inset-0 -translate-x-full rotate-45 bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-transform duration-[2s] ease-in-out"
            />
          </Box>
        ))}
      </Box>

      <Box className="mask-fade-bottom relative bottom-0 mx-auto flex h-[80vh] w-full items-center justify-center">
        {members.map(({ id, name }) => (
          <img
            key={id}
            data-id={`hero-image-${id}`}
            src={`/images/fighters/big/${id}.webp`}
            alt={name}
            decoding="async"
            className="absolute hidden h-full w-auto object-cover lg:object-contain"
            loading="lazy"
          />
        ))}
      </Box>
    </Box>
  );
};

export default BoxerFighterContainer;
