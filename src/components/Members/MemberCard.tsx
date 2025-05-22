import React/*, { useRef }*/ from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface Props {
  id: string;
  name: string;
  extraClass?: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberCard: React.FC<Props> = ({ id, name, extraClass = '', setShow, setImage, setName }) => {
  //const timeoutRef = useRef<{ enter: number | null; leave: number | null }>({ enter: null, leave: null });

/*const handlePointerEnter = () => {
  // Cancelamos cualquier timeout pendiente para leave o enter
  if (timeoutRef.current.leave) {
    clearTimeout(timeoutRef.current.leave);
    timeoutRef.current.leave = null;
  }
  if (timeoutRef.current.enter) {
    clearTimeout(timeoutRef.current.enter);
    timeoutRef.current.enter = null;
  }

  const image = `/images/members/big/${id}.png`;

  setAnimation('slideUp');

  timeoutRef.current.enter = window.setTimeout(() => {
    setImage(image);
    setAnimation('none');
    timeoutRef.current.enter = null;
  }, 300);
};

const handlePointerLeave = () => {
  // Cancelamos cualquier timeout pendiente para enter o leave
  if (timeoutRef.current.enter) {
    clearTimeout(timeoutRef.current.enter);
    timeoutRef.current.enter = null;
  }
  if (timeoutRef.current.leave) {
    clearTimeout(timeoutRef.current.leave);
    timeoutRef.current.leave = null;
  }

  if (displayImage === defaultImage) return; // si está seleccionado no hacemos fadeOut

  timeoutRef.current.leave = window.setTimeout(() => {
    setAnimation('fadeOut');
    timeoutRef.current.leave = window.setTimeout(() => {
      setImage(defaultImage);
      setAnimation('none');
      timeoutRef.current.leave = null;
    }, 500);
  }, 1000);
};
*/

  const handlePointerEnter = () => {
    setShow(true);
    setImage(`/images/members/big/${id}.png`);
    setName(`/images/members/text/${id}.png`);
  };

  const handlePointerLeave = () => {
    setShow(false);
    setImage(`/images/logo.png`);
    setName('');
  };

  return (
    <a
      className={`member-card ${extraClass} inline-block transition-all w-24 sm:w-24 md:w-16 lg:w-20 xl:w-24 2xl:w-26 group relative rounded-lg duration-300 hover:scale-110 hover:shadow-lg hover:z-20 focus-visible:scale-110 focus-visible:shadow-lg focus-visible:z-20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-tickle-me-pink`}
      aria-label={`Ver perfil del miembro ${name}`}
      href={`/miembro/${id}`}
      data-id={id}
    >
      <Card
        key={id}
        className="relative rounded-lg"
        onMouseEnter={() => handlePointerEnter()}
        onMouseLeave={() => handlePointerLeave()}>
        <CardMedia
          component="img"
          className="aspect-[900/1200] h-full w-full bg-gradient-to-t from-gray-50/40 via-gray-50/20 to-transparent object-cover transition-transform duration-500 group-hover:scale-110"
          image={`/images/members/big/${id}.png`}
          alt={`Tarjeta del miembro ${name}`}
          loading="lazy"
        />

        <div className="absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full pointer-events-none"></div>

        <div className="border-theme-tickle-me-pink/70 absolute inset-0 rounded-lg border-0 opacity-0 transition-all duration-300 group-hover:border-2 group-hover:opacity-100 pointer-events-none"></div>
      </Card>

      <div className="absolute inset-0 flex translate-y-2 flex-col items-center justify-end rounded-lg bg-gradient-to-t from-pink-950/90 via-pink-950/40 to-transparent p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
        <CardContent>
          <Typography
            variant="subtitle2"
            className="text-theme-tickle-me-pink text-xs font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
          >
            {name}
          </Typography>
        </CardContent>
      </div>

      <div className="bg-theme-tickle-me-pink absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 transform rounded-t-md transition-all duration-300 group-hover:w-2/3 pointer-events-none"></div>
    </a >
  );
};

export default MemberCard;