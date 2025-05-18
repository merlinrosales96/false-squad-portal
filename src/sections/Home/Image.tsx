/*import React, { useState, useRef } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const images = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
  'https://picsum.photos/800/400?random=4',
  'https://picsum.photos/800/400?random=5',
];

const ImageGallery = () => {
  const defaultImage = images[0];
  const [displayImage, setDisplayImage] = useState(defaultImage);

  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (image: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDisplayImage(image);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setDisplayImage(defaultImage);
    }, 2000);
  };

  return (
    <Box className="flex flex-col items-center gap-6 p-6">
      
      <Box
        className="w-[800px] h-[400px] overflow-hidden rounded-lg shadow-lg relative"
        style={{ perspective: 1000 }}
      >
        <img
          key={displayImage} // para forzar re-render y animación
          src={displayImage}
          alt="Imagen Principal"
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          style={{ transformOrigin: 'center bottom' }}
        />
      </Box>

      
      <Box className="flex gap-4 overflow-auto max-w-[850px]">
        {images.map((image, idx) => (
          <Card
            key={idx}
            sx={{ width: 140, cursor: 'pointer' }}
            onMouseEnter={() => handleMouseEnter(image)}
            onMouseLeave={handleMouseLeave}
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <CardMedia
              component="img"
              height="90"
              image={image}
              alt={`Miniatura ${idx + 1}`}
              className="rounded-t-lg"
            />
            <CardContent>
              <Typography variant="body2" align="center">
                Imagen {idx + 1}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ImageGallery;
*/
/*
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const images = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
  'https://picsum.photos/800/400?random=4',
  'https://picsum.photos/800/400?random=5',
];

const ImageGallery = () => {
  const defaultImage = images[0];
  const [displayImage, setDisplayImage] = useState(defaultImage);
  const [animating, setAnimating] = useState<'none' | 'slideUp' | 'fadeOut'>('none');
  const timeoutRef = useRef<number | null>(null);

  // Maneja cuando se pasa el mouse en la miniatura
  const handleMouseEnter = (image: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (image === displayImage) return;

    setAnimating('slideUp'); // animar salida imagen actual

    setTimeout(() => {
      setDisplayImage(image); // cambiar imagen
      setAnimating('none');   // quitar animación para que la nueva aparezca sin animación
    }, 300); // tiempo igual a duración animación slideUp
  };


  // Maneja cuando se quita el mouse
  const handleMouseLeave = () => {
    if (displayImage === defaultImage) return;

    // Espera 3 segundos antes de empezar el fade out
    timeoutRef.current = window.setTimeout(() => {
      setAnimating('fadeOut');

      // Después de la animación (0.5s), cambia a imagen original
      timeoutRef.current = window.setTimeout(() => {
        setDisplayImage(defaultImage);
        setAnimating('none');
      }, 500);
    }, 3000);
  };


  return (
    <Box className="flex flex-col items-center gap-6 p-6">
      <Box
        className="w-[800px] h-[400px] overflow-hidden rounded-lg shadow-lg relative"
        style={{ perspective: 1000 }}
      >
        <img
          key={displayImage}
          src={displayImage}
          alt="Imagen Principal"
          className={` 
      w-full h-full object-cover aspect-auto absolute top-0 left-0
      transition-opacity duration-300 ease-out z-0
      ${animating === 'slideUp' ? 'animate-stretch-up' : ''}
      ${animating === 'fadeOut' ? 'animate-fade-out' : ''}
    `}
        />

        <Box className="flex gap-4 overflow-auto max-w-[850px] relative z-10">
          {images.map((image, idx) => (
            <Card
              key={idx}
              sx={{ width: 140, cursor: 'pointer' }}
              onMouseEnter={() => handleMouseEnter(image)}
              onMouseLeave={handleMouseLeave}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <CardMedia
                component="img"
                height="90"
                image={image}
                alt={`Miniatura ${idx + 1}`}
                className="rounded-t-lg"
              />
              <CardContent>
                <Typography variant="body2" align="center">
                  Imagen {idx + 1}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default ImageGallery;
*/

/*
import React, { useState } from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import { Members } from '../../utils/MembersList';
import { Image } from '../../components/Image';

const cards = [
  {
    id: 1,
    title: 'TheGrefg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/TheGrefg_2019.jpg',
  },
  {
    id: 2,
    title: 'Westcol',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Westcol_2023.jpg',
  },
  {
    id: 3,
    title: 'Rivers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rivers_2023.jpg',
  },
  {
    id: 4,
    title: 'Ampeter',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ampeter_2023.jpg',
  },
];

const ImageTransitionEffect = () => {
  const defaultImage = logo;
  const [displayImage, setDisplayImage] = useState(defaultImage);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (image: string) => {
    setDisplayImage(image);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(false);
      setDisplayImage(defaultImage);
    }, 500); // Espera 3 segundos antes de volver
  };

  return (
    <Box sx={{height:"100vh"}} className="flex flex-col items-center gap-4">
      <Box className="relative w-fit h-fit overflow-hidden">
        <CardMedia
          component="img"
          src={displayImage}
          alt="Imagen Principal"
          className={`w-64 h-64 object-cover transition-all duration-700 ease-out ${
            hovered ? 'scale-110 translate-y-[-50%]' : 'scale-100 translate-y-0'
          }`}
        />
      </Box>
      <Box className="flex gap-4">
        {Members.map((card) => (
          <Card
            key={card.id}
            onMouseEnter={() => handleMouseEnter(card.image)}
            onMouseLeave={handleMouseLeave}
            className="w-40 h-40 bg-gray-800 text-white flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-gray-700"
          >
            <Typography>{card.name}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ImageTransitionEffect;*/


/*import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import { Members } from '../../utils/MembersList';

const ImageTransitionEffect = () => {
  const [displayImage, setDisplayImage] = useState(logo);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (image: string) => {
    setDisplayImage(image);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(false);
      setDisplayImage(logo);
    }, 3000);
  };

  return (
    <Box className="flex flex-col items-center gap-4 relative">
      <motion.div
        className="w-[800px] h-[400px] overflow-hidden"
        style={{ position: 'relative', top: hovered ? '-100px' : '0', zIndex: -1 }}
        animate={{ y: hovered ? -50 : 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.img
          src={displayImage}
          alt="Imagen Principal"
          className="w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <Box className="flex gap-4 relative z-10">
        {Members.map((card) => (
          <Card
            key={card.id}
            onMouseEnter={() => handleMouseEnter(card.image)}
            onMouseLeave={handleMouseLeave}
            className="w-40 h-40 bg-gray-800 text-white flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-gray-700"
          >
            <Typography>{card.name}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ImageTransitionEffect;
*/


import React from 'react';
import logo from '../../assets/images/logo.png';

const BackgroundImageText: React.FC = () => {
  return (
    <div className="relative w-full h-64 text-white text-4xl font-bold flex items-center justify-center">
      <img 
        src={logo}
        alt="Fondo" 
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      Texto Frente a la Imagen
    </div>
  );
};

export default BackgroundImageText;
