import { Container, Grid, Box } from '@mui/material';
import { Image } from '../../components/Image';
import video from '../../assets/images/videos.png';

const videos = [
    'B9synWjqBn8', // Video 1
    'dQw4w9WgXcQ', // Video 2
    '3JZ_D3ELwOQ', // Video 3
    'tVj0ZTS4WF4', // Video 4
    '5EpyN_6dqyk?si=CgKWGkcD-KJn1ibu', // Video 5
    'kJQP7kiw5Fk'  // Video 6
];

const Videos = () => {
    return (
        <Container sx={{ height: "100vh", mt: 4, mb: 4 }}>
            <Image image={video} alt="" className="mx-auto overflow-hidden rounded-xl object-cover object-center" />
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {videos.map((videoId, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
        </Container>
    );
};

export default Videos;
