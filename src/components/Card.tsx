import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface Props {
  id: string;
  name: string;
  versus: string;
  extraClass: string;
}

const BoxerCard: React.FC<Props> = ({ id, name, versus, extraClass }) => {
  return (
    <a
      href={`/member/${id}`}
      className={`boxer-card ${extraClass} inline-block transition-all w-24 sm:w-24 md:w-16 lg:w-20 xl:w-24 2xl:w-26 group relative rounded-lg duration-300 hover:scale-110 hover:shadow-lg hover:z-20 focus-visible:scale-110 focus-visible:shadow-lg focus-visible:z-20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500`}
      aria-label={`Ver perfil del boxeador ${name}`}
      data-id={id}
      data-versus={versus}
    >
      <Card className="relative overflow-hidden rounded-lg">
        <CardMedia
          component="img"
          className="via-40 aspect-[900/1200] h-full w-full bg-gradient-to-t from-gray-50/40 via-gray-50/20 to-transparent object-cover transition-transform duration-500 group-hover:scale-110"
          image={`/images/fighters/cards/${id}.webp`}
          alt={`Tarjeta del boxeador ${name}`}
        />
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
        <div className="border-pink-500/70 absolute inset-0 rounded-lg border-0 opacity-0 transition-all duration-300 group-hover:border-2 group-hover:opacity-100" />
        <CardContent className="absolute inset-0 flex translate-y-2 flex-col items-center justify-end rounded-lg bg-gradient-to-t from-pink-950/90 via-pink-950/40 to-transparent p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Typography variant="h6" className="text-pink-500 text-xs font-semibold tracking-wide drop-shadow-md">
            {name}
          </Typography>
        </CardContent>
        <div className="bg-pink-500 absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 transform rounded-t-md transition-all duration-300 group-hover:w-2/3" />
      </Card>
    </a>
  );
};

export default BoxerCard;
