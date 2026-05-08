import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { $ } from '../../lib/dom-selector';

interface Props {
  id: string;
  name: string;
  extraClass?: string;
}

let globalActiveFighterId: string | null = null;
let globalHideFighterTimer: ReturnType<typeof setTimeout> | null = null;

const MemberCard: React.FC<Props> = ({ id, name, extraClass }: Props) => {
  const [isActivated, setIsActivated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const cyan = '#00ffe7';
  const magenta = '#ff2d78';

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
      if (globalActiveFighterId !== id && isActivated) setIsActivated(false);
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
    if (globalHideFighterTimer) { clearTimeout(globalHideFighterTimer); globalHideFighterTimer = null; }
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
    text?.classList.remove('animate-zoom-in'); text?.classList.add('animate-zoom-out');
    img?.classList.remove('animate-slide-up-fade'); img?.classList.add('animate-fade-out-down');
    mask?.classList.replace('translate-x-full', '-translate-x-full');
    globalHideFighterTimer = setTimeout(() => {
      text?.classList.add('hidden'); img?.classList.add('hidden');
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
        e.preventDefault(); e.stopPropagation();
        setIsActivated(true); handlePointerEnterLogic(id);
      } else {
        window.location.href = `/squad/${id}`;
      }
    } else {
      window.location.href = `/squad/${id}`;
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
          bgcolor: 'transparent', boxShadow: 'none', overflow: 'hidden',
          border: isActivated && isMobile ? `1.5px solid ${cyan}` : 'none',
          transition: 'border 0.2s ease',
        }}
        onMouseEnter={() => !isMobile && handlePointerEnterLogic(id)}
        onMouseLeave={() => !isMobile && handlePointerLeaveLogic()}
      >
        <CardMedia
          component="img"
          className="aspect-[900/1200] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          image={`/images/members/cards/${id}.webp`}
          alt={name}
          loading="lazy"
        />

        {/* Shimmer on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full pointer-events-none" />

        {/* Cyan border glow on hover */}
        <div
          className="absolute inset-0 rounded-lg border-0 opacity-0 transition-all duration-300 group-hover:border-2 group-hover:opacity-100 pointer-events-none"
          style={{ borderColor: `${cyan}99` }}
        />

        {/* Bottom magenta glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${magenta}20, transparent)` }} />
      </Card>

      {/* Name tag */}
      <div className="absolute inset-0 flex translate-y-2 flex-col items-center justify-end rounded-lg bg-gradient-to-t from-black/95 via-black/50 to-transparent p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
        <CardContent sx={{ p: '4px !important' }}>
          <Typography
            variant="subtitle2"
            sx={{ color: cyan, fontFamily: 'RussoOne', fontSize: '0.7rem', letterSpacing: 1 }}
          >
            {name}
          </Typography>
        </CardContent>
      </div>
    </Box>
  );
};

export default MemberCard;
