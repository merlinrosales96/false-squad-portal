/*import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Members } from '../../utils/MembersList';
import MemberSelector from '../../components/Members/MemberSelector';

const firstRow = Members.slice(0, 6);
const leftRow = firstRow.slice(0, 3);
const rightRow = firstRow.slice(3);
const secondRow = Members.slice(6);

const MemberHero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full">
      <div className="mask-fade-bottom absolute inset-0 w-full bg-cover bg-center bg-[url('/images/banner2.avif')]" />

      <Box className="relative flex w-full flex-col items-center p-8 text-center">
        <Box
          id="landing"
          className={`absolute top-0 flex w-full flex-col items-center py-16 group-hover:hidden group-focus-within:hidden`}
        >
          <Typography
            variant="h3"
            className="text-theme-seashell animate-fade-in animate-delay-300 mt-4 font-light leading-none"
          >
            <strong>26</strong> DE <br /> <strong>JULIO</strong>
          </Typography>

          <figure className="animate-fade-in relative mt-8">
            <img
              className="relative z-20 h-auto w-64"
              src="/images/logo.png"
              alt="La Velada del Año V"
              loading="lazy"
            />
            <div className="absolute top-0 z-0 w-64 h-64 bg-pink-400/80 blur-2xl"></div>
          </figure>

          <Box className="relative z-50">
            <Typography
              variant="h3"
              className="text-theme-seashell animate-fade-in animate-delay-500 z-0 mt-4 font-light leading-none"
            >
              ESTADIO<br />LA CARTUJA,<br /><strong>SEVILLA</strong>
            </Typography>
            <div className="absolute -inset-2 -z-10 h-full w-full bg-pink-400/80 blur-2xl"></div>

            <Link
              href="https://twitch.tv/ibai"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in animate-delay-700 z-50 mt-4 inline-block font-light leading-none transition hover:scale-125"
            >
              TWITCH.TV<br /><strong>IBAI</strong>
            </Link>
          </Box>
        </Box>

        <Box className="relative flex h-full w-full max-w-6xl flex-col items-center justify-end gap-4 p-8">
          <Box className="flex w-full flex-wrap justify-between px-4">
            <Box className="flex flex-wrap justify-start gap-4">
              {leftRow.map(({ id, name }) => (
                <MemberSelector
                  key={id}
                  id={id}
                  name={name}
                />
              ))}
            </Box>

            <Box className="flex flex-wrap justify-end gap-4">
              {rightRow.map(({ id, name }) => (
                <MemberSelector
                  key={id}
                  id={id}
                  name={name}
                />
              ))}
            </Box>
          </Box>

          <Box className="flex flex-wrap justify-center gap-4 sm:justify-between">
            {secondRow.map(({ id, name }) => (
              <MemberSelector
                key={id}
                id={id}
                name={name}
              />
            ))}
          </Box>
        </Box>

        
      </Box>
    </section>
  );
};

export default MemberHero;*/


// Componente de React adaptado con Material UI y Tailwind CSS
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { MEMBERS } from '../../const/members';
import SelectMember from '../../components/Members/SelectMember';

const LandingPage = () => {
  //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const defaultImage = '/images/logo.png';
  const [image, setImage] = useState<string>(defaultImage);
  const [name, setName] = useState<string>(defaultImage);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      //setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='members' className="relative flex min-h-screen w-full">
      <div className="absolute inset-0 w-full bg-cover bg-center animate-fade-in duration-75 opacity-20"></div>
      <div className="absolute inset-0 w-full bg-black opacity-10"></div>

      <Box className="relative flex w-full flex-col items-center p-8 text-center">
        <Box id="landing" className="absolute top-0 flex w-full flex-col items-center py-16">
          <Typography className="text-theme-seashell animate-fade-in mt-4 text-xs font-medium sm:text-base">
          </Typography>
          {
            !show ?
              <>
                <Box className="animate-fade-in relative">
                  <img
                    //src={image}
                    src="/images/logo.png"
                    alt="La Velada del Año V"
                    className={`relative z-0 h-auto w-48 sm:w-72 md:w-80 lg:w-96'}`}
                  />
                </Box>

                <Box className="relative z-0">
                  <img
                    src="/images/sections/miembros.png"
                    alt="La Velada del Año V"
                    className="relative z-20 h-auto w-48 sm:w-72 md:w-80 lg:w-96"
                  />
                </Box>
              </>
              :
              <Box className="animate-fade-in relative">
                <img
                  src={image}
                  //src="/images/members/big/merlino.png"
                  alt="La Velada del Año V"
                  className={`mask-bottom-fade relative z-10 h-auto w-48 sm:w-72 md:w-80 lg:w-96`}
                />
                <img
                  src={name}
                  alt="Abby Name"
                  className="absolute bottom-5 left-1/2 w-[70%] -translate-x-1/2 z-20"
                />
              </Box>
          }
        </Box>
        <SelectMember
          members={MEMBERS}
          setImage={setImage}
          setShow={setShow}
          setName={setName}
        />
      </Box>
    </section>
  );
};

export default LandingPage;

