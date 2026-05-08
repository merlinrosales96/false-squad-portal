import { Box, IconButton, Typography, Container, keyframes } from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";

const flicker = keyframes`
  0%, 94%, 100% { opacity: 1; }
  95% { opacity: 0.4; }
  97% { opacity: 0.7; }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ py: 7, bgcolor: '#04040a', borderTop: '1px solid rgba(0,255,231,0.06)', position: 'relative', overflow: 'hidden' }}>
      {/* Grid bg */}
      <Box className="grid-bg" sx={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Top accent line */}
      <Box sx={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '1px', background: 'linear-gradient(90deg, transparent, #00ffe7, #ff2d78, transparent)', opacity: 0.4 }} />

      {/* Watermark */}
      <Typography sx={{
        position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'RussoOne', fontSize: '9rem', fontWeight: 900,
        color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.018)',
        whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
      }}>
        FALSE SQUAD
      </Typography>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{
          display: 'flex', flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between', gap: 5,
          pb: 5, mb: 4, borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>

          {/* Brand */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1.5 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#00ffe7', boxShadow: '0 0 8px #00ffe7', animation: `${flicker} 5s infinite` }} />
              <Typography sx={{ fontFamily: 'RussoOne', letterSpacing: 4, fontSize: '1.1rem', background: 'linear-gradient(90deg, #00ffe7, #ff2d78)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                FALSE SQUAD
              </Typography>
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', lineHeight: 1.9, fontFamily: 'system-ui' }}>
              Clips, juegos y buen ambiente.<br />
              Más que un grupo, una familia.
            </Typography>
          </Box>

          {/* Social */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 4, color: 'rgba(255,255,255,0.2)', mb: 2 }}>
              // REDES
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { href: 'https://www.tiktok.com/@false.squad', color: '#ff0050', icon: <FaTiktok size={17} /> },
                { href: 'https://www.instagram.com/false.squad/', color: '#e1306c', icon: <Instagram fontSize="small" /> },
                { href: 'https://www.youtube.com/@falsesquadtalks', color: '#ff0000', icon: <YouTube fontSize="small" /> },
              ].map((s, i) => (
                <IconButton key={i} href={s.href} target="_blank" sx={{
                  color: 'rgba(255,255,255,0.3)', width: 42, height: 42,
                  border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: s.color,
                    borderColor: `${s.color}50`,
                    bgcolor: `${s.color}12`,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 8px 20px ${s.color}30`,
                  },
                }}>
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Status */}
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 4, color: 'rgba(255,255,255,0.2)', mb: 1.5 }}>
              // ESTADO
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {[
                { label: 'SQUAD', status: 'ONLINE', color: '#00ffe7' },
                { label: 'CAOS', status: 'ACTIVO', color: '#ff2d78' },
                { label: 'ASCO', status: 'NINGUNO', color: '#9b5de5' },
              ].map((row) => (
                <Box key={row.label} sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                  <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 2, color: 'rgba(255,255,255,0.2)' }}>{row.label}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: row.color, boxShadow: `0 0 5px ${row.color}`, animation: `${flicker} ${4 + Math.random() * 3}s infinite` }} />
                    <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 2, color: row.color }}>{row.status}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Typography sx={{ textAlign: 'center', fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 3, color: 'rgba(255,255,255,0.12)' }}>
          © {year} FALSE SQUAD // TODOS LOS DERECHOS RESERVADOS // VEN 🇻🇪
        </Typography>
      </Container>
    </Box>
  );
}
