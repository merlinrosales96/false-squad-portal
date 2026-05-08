import { Box, IconButton, Typography, Container, alpha } from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const iconBtn = (color: string) => ({
    color: 'rgba(255,255,255,0.3)',
    width: 44, height: 44,
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    '&:hover': {
      color,
      borderColor: alpha(color, 0.4),
      bgcolor: alpha(color, 0.08),
      transform: 'translateY(-3px)',
      boxShadow: `0 8px 20px ${alpha(color, 0.25)}`,
    },
  });

  return (
    <Box
      component="footer"
      sx={{
        py: 7, mt: 'auto',
        bgcolor: '#060608',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top glow line */}
      <Box sx={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,255,231,0.4), rgba(255,45,120,0.4), transparent)',
      }} />

      {/* Watermark */}
      <Typography sx={{
        position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'RussoOne', fontSize: '10rem', fontWeight: 900,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.015)',
        whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
      }}>
        FALSE SQUAD
      </Typography>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{
          display: 'flex', flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between', gap: 5,
          pb: 5, mb: 4,
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
          {/* Branding */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography sx={{
              fontFamily: 'RussoOne', letterSpacing: 3, fontSize: '1.3rem', mb: 1.5,
              background: 'linear-gradient(90deg, #00ffe7, #ff2d78)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              FALSE SQUAD
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'system-ui' }}>
              Clips, juegos y buen ambiente. <br />
              Más que un grupo, una familia.
            </Typography>
          </Box>

          {/* Social */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.65rem', letterSpacing: 3, color: 'rgba(255,255,255,0.25)', mb: 2 }}>
              NUESTRAS REDES
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center' }}>
              <IconButton href="https://www.tiktok.com/@false.squad" target="_blank" sx={iconBtn('#ff0050')}>
                <FaTiktok size={18} />
              </IconButton>
              <IconButton href="https://www.instagram.com/false.squad/" target="_blank" sx={iconBtn('#e1306c')}>
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton href="https://www.youtube.com/@falsesquadtalks" target="_blank" sx={iconBtn('#ff0000')}>
                <YouTube fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Discord CTA */}
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.65rem', letterSpacing: 3, color: 'rgba(255,255,255,0.25)', mb: 1.5 }}>
              ÚNETE
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'system-ui' }}>
              ¿Quieres jugar con nosotros? <br />
              Únete a nuestro Discord.
            </Typography>
          </Box>
        </Box>

        {/* Copyright */}
        <Typography sx={{
          textAlign: 'center', fontFamily: 'RussoOne',
          fontSize: '0.65rem', letterSpacing: 3, color: 'rgba(255,255,255,0.15)',
        }}>
          © {year} FALSE SQUAD • TODOS LOS DERECHOS RESERVADOS
        </Typography>
      </Container>
    </Box>
  );
}
