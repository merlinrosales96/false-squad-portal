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
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Image } from "../../components/Image";

const videos = [
    {
        id: "B9synWjqBn8",
        title: "Fein"
    },
    {
        id: "5EpyN_6dqyk?si=CgKWGkcD-KJn1ibu",
        title: "Timeless"
    },
    {
        id: "dQw4w9WgXcQ",
        title: "Never gonna give you up"
    },
    {
        id: "eVTXPUF4Oz4",
        title: "In the end"
    },
    {
        id: "kXYiU_JCYtU",
        title: "Numb"
    },
    {
        id: "fJ9rUzIMcZQ",
        title: "Bohemian Rhapsody"
    }
];

const YouTubeGallery: React.FC = () => {
    return (
        <Box component="section" id='videos' sx={{height:"100vh"}} className="flex flex-col items-center gap-6 p-6 pt-16 mb-20">
            <Image image="/images/sections/videos.png" alt="" className="mx-auto overflow-hidden rounded-xl object-cover object-center" />

            <Box>
                <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <Card key={video.id}>
                            <CardMedia>
                                <iframe
                                    className="w-full h-64 aspect-video"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="h6">
                                    {video.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default YouTubeGallery;
