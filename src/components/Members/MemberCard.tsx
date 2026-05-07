import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { $ } from '../../lib/dom-selector';

interface Props {
  id: string;
  name: string;
  extraClass?: string;
}

let globalActiveFighterId: string | null = null;
let globalHideFighterTimer: ReturnType<typeof setTimeout> | null = null;

const MemberCard: React.FC<Props> = ({ id, name, extraClass }: Props) => {
  const navigate = useNavigate();
  const [isActivated, setIsActivated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Definimos el color cyan para reusarlo fácilmente
  const cyanColor = '#00cec9';

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (!isMobile) return;
      const target = e.target as HTMLElement;
      if (!target.closest('.member-card') && globalActiveFighterId !== null) {
        handlePointerLeaveLogic(); 
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (globalActiveFighterId !== id && isActivated) {
        setIsActivated(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isActivated, id]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerEnterLogic = (targetId: string) => {
    if (globalActiveFighterId && globalActiveFighterId !== targetId) {
      $(`[data-id="hero-text-${globalActiveFighterId}"]`)?.classList.add('hidden');
      $(`[data-id="hero-image-${globalActiveFighterId}"]`)?.classList.add('hidden');
      $(`#mask-fade-text-${globalActiveFighterId}`)?.classList.replace('translate-x-full', '-translate-x-full');
    }

    if (globalHideFighterTimer) {
      clearTimeout(globalHideFighterTimer);
      globalHideFighterTimer = null;
    }

    $('#landing')?.classList.add('hidden');
    
    const heroText = $(`[data-id="hero-text-${targetId}"]`);
    const heroImage = $(`[data-id="hero-image-${targetId}"]`);
    const heroMask = $(`#mask-fade-text-${targetId}`);

    heroText?.classList.remove('hidden', 'animate-zoom-out');
    heroImage?.classList.remove('hidden', 'animate-fade-out-down');

    heroText?.classList.add('animate-zoom-in');
    heroImage?.classList.add('animate-slide-up-fade');
    heroMask?.classList.replace('-translate-x-full', 'translate-x-full');

    globalActiveFighterId = targetId;
  };

  const handlePointerLeaveLogic = () => {
    if (!globalActiveFighterId) return;

    const text = $(`[data-id="hero-text-${globalActiveFighterId}"]`);
    const img = $(`[data-id="hero-image-${globalActiveFighterId}"]`);
    const mask = $(`#mask-fade-text-${globalActiveFighterId}`);

    text?.classList.remove('animate-zoom-in');
    text?.classList.add('animate-zoom-out');
    
    img?.classList.remove('animate-slide-up-fade');
    img?.classList.add('animate-fade-out-down');
    
    mask?.classList.replace('translate-x-full', '-translate-x-full');

    globalHideFighterTimer = setTimeout(() => {
      text?.classList.add('hidden');
      img?.classList.add('hidden');
      
      if (globalActiveFighterId === id || globalActiveFighterId === null) {
        $('#landing')?.classList.remove('hidden');
        globalActiveFighterId = null;
      }
      setIsActivated(false);
    }, 900); 
  };

  const handleAction = (e: React.MouseEvent) => {
    if (isMobile) {
      if (globalActiveFighterId !== id) {
        e.preventDefault();
        e.stopPropagation();
        setIsActivated(true);
        handlePointerEnterLogic(id);
      } else {
        navigate(`/squad/${id}`);
      }
    } else {
      navigate(`/squad/${id}`);
    }
  };

  return (
    <Box
      onClick={handleAction}
      className={`member-card ${extraClass} inline-block transition-all w-24 sm:w-24 md:w-16 lg:w-20 xl:w-24 2xl:w-26 group relative rounded-lg duration-300 hover:scale-110 cursor-pointer`}
      data-id={id}
    >
      <Card
        className="relative rounded-lg"
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          border: isActivated && isMobile ? `2px solid ${cyanColor}` : 'none',
          transition: 'border 0.2s ease',
          overflow: 'hidden'
        }}
        onMouseEnter={() => !isMobile && handlePointerEnterLogic(id)}
        onMouseLeave={() => !isMobile && handlePointerLeaveLogic()}
      >
        <CardMedia
          component="img"
          className="aspect-[900/1200] h-full w-full bg-gradient-to-t from-gray-50/40 via-gray-50/20 to-transparent object-cover transition-transform duration-500 group-hover:scale-110"
          image={`/images/members/big/${id}.webp`}
          alt={name}
          loading="lazy"
        />
        
        {/* Efecto de rayo de luz (blanco traslúcido) */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full pointer-events-none"></div>
        
        {/* Borde de la tarjeta al hacer HOVER (Ahora Cyan) */}
        <div 
          className="absolute inset-0 rounded-lg border-0 opacity-0 transition-all duration-300 group-hover:border-2 group-hover:opacity-100 pointer-events-none"
          style={{ borderColor: `${cyanColor}b3` }} // El b3 añade transparencia (70%)
        ></div>
      </Card>

      {/* Contenedor del nombre (Fondo negro degradado y texto Cyan) */}
      <div className="absolute inset-0 flex translate-y-2 flex-col items-center justify-end rounded-lg bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
        <CardContent>
          <Typography 
            variant="subtitle2" 
            sx={{ color: cyanColor }} // Color Cyan aplicado aquí
            className="text-xs font-semibold tracking-wide"
          >
            {name}
          </Typography>
        </CardContent>
      </div>
    </Box>
  );
};

export default MemberCard;