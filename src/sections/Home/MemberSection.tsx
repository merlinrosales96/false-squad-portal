import logo from '/images/logo.png';
import React, { useState, useRef } from 'react';
import { Box, Card, CardMedia, Stack } from '@mui/material';
import { Members } from '../../utils/MembersList';
import { Image } from '../../components/Image';
import miembros from '../../../public/images/sections/miembros.png';

const MembersSection = () => {
    const defaultImage = logo;
    const [displayImage, setDisplayImage] = useState(logo);
    const [animating, setAnimating] = useState<'none' | 'slideUp' | 'fadeOut'>('none');
    const timeoutRef = useRef<number | null>(null);

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
        }, 1000);
    };


    return (
        <Box component="section" id='members' className="flex flex-col items-center gap-6 p-6">
            <Image image={miembros} alt="" className="mx-auto overflow-hidden rounded-xl object-cover object-center" />

            <Box
                className="w-1/4 h-1/4 overflow-hidden relative"
                style={{ perspective: 1000 }}
            >
                <img
                    key={displayImage}
                    src={displayImage}
                    style={{ zIndex: -1 }}
                    alt="Imagen Principal"
                    className={`w-full h-full object-cover aspect-auto transition-opacity duration-300 ease-out ${animating === 'slideUp' ? 'animate-stretch-up' : ''} ${animating === 'fadeOut' ? 'animate-fade-out' : ''}`}
                />
            </Box>

            <Stack direction="row" spacing={2}>
                {Members.map((member) => (
                    <Card
                        key={member.name}
                        onMouseEnter={() => handleMouseEnter(member.image)}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                            border: "2px solid #00FEFE",
                            width: 150,        // Card más pequeña
                            height: 150,       // Altura fija para la card
                            overflow: 'hidden',
                            borderRadius: 2,
                            boxShadow: 3,
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        elevation={4}
                    >
                        <CardMedia
                            component="img"
                            image={member.image}
                            alt={member.name}
                            sx={{
                                width: '100%',
                                height: 'auto',     // Altura automática para que mantenga proporción
                                maxHeight: 150,     // Máximo alto para que no ocupe toda la card si la imagen es muy alta
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        />
                    </Card>
                ))}
            </Stack>


        </Box>
    );
};

export default MembersSection;

