import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { $ } from '../../lib/dom-selector';

interface Props {
  id: string;
  name: string;
  extraClass?: string;
}

const MemberCard: React.FC<Props> = ({ id, name, extraClass }: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [$landing, setLanding] = useState($('#landing'));
  let currentFighterId: string | null = null
  let hideFighterTimer: ReturnType<typeof setTimeout>
  const boxerCards = document.querySelectorAll('.boxer-card')

  useEffect(() => {
    const handleResize = () => {
      setLanding($('#landing'))
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(mobile);
      const $fighterSelector = document.getElementById('selectorFighter');
      if (mobile && $fighterSelector) {
        $fighterSelector.remove(); // cuidado: esto elimina el elemento del DOM permanentemente
      }
    };

    // Ejecutar al inicio
    handleResize();

    // Agregar el listener
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setLanding($('#landing'))
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(mobile);
      const $fighterSelector = document.getElementById('selectorFighter');
      if (mobile && $fighterSelector) {
        $fighterSelector.remove(); // cuidado: esto elimina el elemento del DOM permanentemente
      }
    };

    // Ejecutar al inicio
    handleResize();

    // Agregar el listener
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePointerEnter = (id: string) => {
    if (currentFighterId) {
      // si ya hay un luchador visible, lo ocultamos
      clearTimeout(hideFighterTimer)

      const heroText = $(`[data-id="hero-text-${currentFighterId}"]`)
      const heroImage = $(`[data-id="hero-image-${currentFighterId}"]`)
      const heroMaskFadeText = $(`#mask-fade-text-${currentFighterId}`)

      heroText?.classList.add('hidden')
      heroImage?.classList.add('hidden')
      heroMaskFadeText?.classList.remove('translate-x-full')
      heroMaskFadeText?.classList.add('-translate-x-full')
      currentFighterId = null
    }

    const heroText = $(`[data-id="hero-text-${id}"]`)
    const heroImage = $(`[data-id="hero-image-${id}"]`)
    const heroMaskFadeText = $(`#mask-fade-text-${id}`)

    if (heroText && heroImage) {
      heroText.classList.remove('animate-zoom-out')
      heroImage.classList.remove('animate-fade-out-down')
    }

    // si el luchador que entras es el mismo que ya se muestra
    // entonces no hacemos nada
    if (currentFighterId === id) return

    // si ya estamos mostrando un luchador, tenemos que ocultarlo
    if (currentFighterId) {
      const currentHeroText = $(`[data-id="hero-text-${currentFighterId}"]`)
      const currentHeroImage = $(`[data-id="hero-image-${currentFighterId}"]`)
      const currentHeroMaskFadeText = $(`#mask-fade-text-${currentFighterId}`)

      if (currentHeroText && currentHeroMaskFadeText && currentHeroImage) {
        currentHeroText.classList.add('hidden')
        currentHeroImage.classList.add('hidden')

        currentHeroText.classList.remove('animate-zoom-in')
        currentHeroImage.classList.remove('animate-slide-up-fade')
        currentHeroMaskFadeText?.classList.remove('translate-x-full')
        currentHeroMaskFadeText?.classList.add('-translate-x-full')
      }
    }

    $landing?.classList.add('hidden')

    // mostramos el luchador que quiere ver el usuario
    heroText?.classList.remove('hidden')
    heroText?.classList.add('animate-zoom-in')
    heroImage?.classList.remove('hidden')
    heroImage?.classList.add('animate-slide-up-fade')
    heroMaskFadeText?.classList.remove('-translate-x-full')
    heroMaskFadeText?.classList.add('translate-x-full')

    currentFighterId = id
  };

  const handlePointerLeave = () => {
    let showFighter = false

    if (!currentFighterId) return

    if (isMobile) {
      for (const card of boxerCards) {
        if (card.getAttribute('data-id') === currentFighterId) {
          if (card.getAttribute('data-selected') === 'true') {
            showFighter = true
            break
          }
        }
      }

      if (showFighter) return
    }
    $landing?.classList.remove('hidden')

    const heroText = $(`[data-id="hero-text-${currentFighterId}"]`)
    const heroImage = $(`[data-id="hero-image-${currentFighterId}"]`)
    const heroMaskFadeText = $(`#mask-fade-text-${currentFighterId}`)

    if (heroText && heroImage) {
      heroText.classList.remove('animate-zoom-int')
      heroImage.classList.remove('animate-slide-up-fade')

      heroText.classList.add('animate-zoom-out')
      heroImage.classList.add('animate-fade-out-down')

      heroMaskFadeText?.classList.remove('translate-x-full')
      heroMaskFadeText?.classList.add('-translate-x-full')

      heroText.classList.add('hidden')
      heroImage.classList.add('hidden')
      currentFighterId = null

      hideFighterTimer = setTimeout(() => {
      }, 500)
    }
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
        onMouseEnter={() => handlePointerEnter(id)}
        onMouseLeave={() => handlePointerLeave()}>
        <CardMedia
          component="img"
          className="aspect-[900/1200] h-full w-full bg-gradient-to-t from-gray-50/40 via-gray-50/20 to-transparent object-cover transition-transform duration-500 group-hover:scale-110"
          image={`/images/members/big/${id}.webp`}
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