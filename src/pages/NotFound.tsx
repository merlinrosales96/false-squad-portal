import { Box, Typography, Button, Container } from '@mui/material';
//import { Image } from '../../components/common/Image';
import { useNavigate } from 'react-router-dom';
import { ErrorOutline } from '@mui/icons-material';
//import NotFoundLogo from '../../assets/404.png';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container sx={{ mt: 14, mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
            <Box>
                <ErrorOutline sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                <Typography variant='h3' gutterBottom>
                    Pagina no encontrada
                </Typography>
                {/*
                <Image image={NotFoundLogo} alt="" className="items-center justify-center mx-auto overflow-hidden rounded-xl w-1/2 h-1/2 object-center" />
                */}
                <Typography variant='body1' color='text.secondary' mb={3}>
                    Lo sentimos, pero la página que buscas no está disponible. Por favor, regresa a la página principal de False Squad.
                </Typography>
                <Button variant='contained' color='primary' onClick={handleGoHome}>
                    Ir a la página principal
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;