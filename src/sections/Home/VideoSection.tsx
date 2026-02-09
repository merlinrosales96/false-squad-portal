/*import { Box, Grid, Container } from '@mui/material';
import { Image } from '../../components/Image';
import video from '../../../public/images/sections/videos.png';

const VideoSection = () => {

    const videos = [
        'B9synWjqBn8', // Video 1
        'dQw4w9WgXcQ', // Video 2
        '3JZ_D3ELwOQ', // Video 3
        'tVj0ZTS4WF4', // Video 4
        '5EpyN_6dqyk?si=CgKWGkcD-KJn1ibu', // Video 5
        'kJQP7kiw5Fk'  // Video 6
    ];

    return (
        <Box component="section" id="videos" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 6 }}>
            <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 16, gap: 3 }}>
                <Box component="div">
                    <Image image={video} alt="" className="mx-auto overflow-hidden rounded-xl object-cover object-center" />
                    <Grid container spacing={3} sx={{ mt: 4 }}>
                        {videos.map((videoId, index) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingTop: '56.25%',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: 3
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default VideoSection;*/

import React from "react";
import { Box, Typography, Card, alpha, Container } from "@mui/material";
import { Image } from "../../components/Image";

const videos = [
    { id: "B9synWjqBn8", title: "Fein", featured: true },
    { id: "5EpyN_6dqyk", title: "Timeless" },
    { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up" },
    { id: "eVTXPUF4Oz4", title: "In the End" },
    { id: "kXYiU_JCYtU", title: "Numb" },
    { id: "fJ9rUzIMcZQ", title: "Bohemian Rhapsody" }
];

const YouTubeGallery: React.FC = () => {
    // Función para limpiar el ID por si viene con parámetros de share
    const getCleanId = (id: string) => id.split('?')[0];

    return (
        <Box 
            component="section" 
            id='videos' 
            sx={{ 
                minHeight: "100vh", 
                py: 12,
                bgcolor: 'background.default'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Image 
                        image="/images/sections/videos.webp" 
                        alt="Videos Title" 
                        className="mx-auto mb-4 w-full max-w-[350px]" 
                    />
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontFamily: 'RussoOne', 
                            color: 'secondary.main', 
                            letterSpacing: 2,
                            opacity: 0.8 
                        }}
                    >
                        HIGHLIGHTS & FAILS
                    </Typography>
                </Box>

                <Box 
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        gridAutoRows: 'minmax(250px, auto)'
                    }}
                >
                    {videos.map((video) => (
                        <Card 
                            key={video.id}
                            sx={{
                                borderRadius: '20px',
                                bgcolor: alpha('#121212', 0.5),
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.3s ease-in-out',
                                position: 'relative',
                                overflow: 'hidden',
                                // El video destacado ocupa más espacio
                                gridColumn: {
                                    md: video.featured ? 'span 2' : 'span 1'
                                },
                                gridRow: {
                                    md: video.featured ? 'span 2' : 'span 1'
                                },
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'primary.main',
                                    boxShadow: (theme) => `0 10px 30px ${alpha(theme.palette.primary.main, 0.2)}`,
                                }
                            }}
                        >
                            <Box sx={{ width: '100%', height: video.featured ? '85%' : '75%' }}>
                                <iframe
                                    className="w-full h-full border-0"
                                    src={`https://www.youtube.com/embed/${getCleanId(video.id)}?modestbranding=1&rel=0`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </Box>
                            
                            <Box sx={{ p: 2, textAlign: 'center' }}>
                                <Typography 
                                    variant="subtitle1" 
                                    sx={{ 
                                        fontFamily: 'RussoOne', 
                                        color: 'text.primary',
                                        fontSize: video.featured ? '1.2rem' : '0.9rem'
                                    }}
                                >
                                    {video.title}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default YouTubeGallery;