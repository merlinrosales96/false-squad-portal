import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography, Container, Skeleton, keyframes } from "@mui/material";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID      = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const MAX_RESULTS     = 6;

const flicker = keyframes`
  0%, 94%, 100% { opacity: 1; }
  95% { opacity: 0.3; }
  97% { opacity: 0.6; }
`;

interface YTVideo {
  id:       string;
  title:    string;
  featured: boolean;
}

async function fetchVideos(): Promise<YTVideo[]> {
  if (!YOUTUBE_API_KEY || !CHANNEL_ID)
    throw new Error("Faltan VITE_YOUTUBE_API_KEY o VITE_YOUTUBE_CHANNEL_ID en .env");

  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?key=${YOUTUBE_API_KEY}` +
    `&channelId=${CHANNEL_ID}` +
    `&part=snippet` +
    `&order=date` +
    `&type=video` +
    `&maxResults=${MAX_RESULTS}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();

  return (data.items ?? []).map((item: any, i: number) => ({
    id:       item.id.videoId,
    title:    item.snippet.title,
    featured: i === 0,
  }));
}

const YouTubeGallery: React.FC = () => {
  const { data: videos = [], isLoading: loading, isError: error } = useQuery({
    queryKey: ['yt-videos', CHANNEL_ID],
    queryFn:  fetchVideos,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <Box component="section" id="videos" sx={{
      minHeight: "100vh", py: 14,
      bgcolor: "#04040a", position: "relative", overflow: "hidden",
    }}>
      <Box className="grid-bg" sx={{ position: "absolute", inset: 0 }} />
      <Box className="scanlines-overlay" />
      <Box sx={{ position: "absolute", top: "20%", right: "-8%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "10%", left: "-8%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,231,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Box component="span" className="section-tag" sx={{ justifyContent: "center" }}>
            Contenido
          </Box>
          <Typography sx={{
            fontFamily: "RussoOne",
            fontSize: { xs: "2.5rem", md: "4rem" },
            lineHeight: 0.95, letterSpacing: "-1px", mb: 1,
            color: "rgba(255,255,255,0.95)",
          }}>
            CLIPS &{" "}
            <Box component="span" className="neon-magenta">FAILS</Box>
          </Typography>
          <Typography sx={{
            fontFamily: "RussoOne", fontSize: "0.62rem",
            letterSpacing: 4, color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase", mt: 1,
          }}>
            // HIGHLIGHTS — YOUTUBE
          </Typography>
        </Box>

        {/* Error */}
        {error && (
          <Box sx={{ textAlign: "center", py: 10, border: "1px solid rgba(255,45,120,0.15)", borderRadius: "6px", bgcolor: "rgba(255,45,120,0.03)" }}>
            <Typography sx={{ fontFamily: "RussoOne", fontSize: "0.65rem", letterSpacing: 4, color: "rgba(255,255,255,0.25)", mb: 2 }}>
              // ERROR: NO SE PUDO CONECTAR CON EL CANAL
            </Typography>
            <Typography component="a" href="https://www.youtube.com/@falsesquadtalks" target="_blank"
              sx={{ color: "#ff2d78", fontFamily: "RussoOne", fontSize: "0.85rem", letterSpacing: 2, display: "block", textDecoration: "none",
                "&:hover": { textShadow: "0 0 10px rgba(255,45,120,0.6)" } }}>
              ▶ IR AL CANAL →
            </Typography>
          </Box>
        )}

        {/* Loading skeletons */}
        {loading && !error && (
          <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" } }}>
            {Array.from({ length: MAX_RESULTS }).map((_, i) => (
              <Skeleton key={`skeleton-${i}`} variant="rectangular" sx={{
                borderRadius: "4px",
                bgcolor: "rgba(255,255,255,0.04)",
                height: i === 0 ? 380 : 200,
                gridColumn: { md: i === 0 ? "span 2" : "span 1" },
                gridRow:    { md: i === 0 ? "span 2" : "span 1" },
                "&::after": { background: "linear-gradient(90deg, transparent, rgba(0,255,231,0.04), transparent)" },
              }} />
            ))}
          </Box>
        )}

        {/* Video grid */}
        {!loading && !error && (
          <Box sx={{
            display: "grid", gap: 2,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" },
            gridAutoRows: "minmax(200px, auto)",
          }}>
            {videos.map((video: any) => (
              <Box key={video.id} sx={{
                borderRadius: "4px",
                bgcolor: "rgba(10,10,18,0.8)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.3s ease",
                position: "relative", overflow: "hidden",
                gridColumn: { md: video.featured ? "span 2" : "span 1" },
                gridRow:    { md: video.featured ? "span 2" : "span 1" },
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "rgba(255,45,120,0.25)",
                  boxShadow: "0 8px 30px rgba(255,45,120,0.1), 0 0 0 1px rgba(255,45,120,0.08)",
                },
                "&::after": {
                  content: '""', position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #ff2d78, transparent)",
                  opacity: 0, transition: "opacity 0.3s",
                },
                "&:hover::after": { opacity: 1 },
                "&::before": video.featured ? {
                  content: '""', position: "absolute", top: 0, left: 0, bottom: 0,
                  width: "2px",
                  background: "linear-gradient(to bottom, #ff2d78, #9b5de5)",
                  zIndex: 2,
                } : {},
              }}>
                <Box sx={{ width: "100%", height: video.featured ? "87%" : "77%", position: "relative" }}>
                  <iframe
                    style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&color=white`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Box sx={{
                  p: 1.5, display: "flex", alignItems: "center", gap: 1.5,
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                  bgcolor: "rgba(4,4,10,0.6)",
                }}>
                  <Box sx={{
                    width: 5, height: 5, borderRadius: "50%", flexShrink: 0,
                    bgcolor: video.featured ? "#ff2d78" : "#00ffe7",
                    boxShadow: `0 0 6px ${video.featured ? "#ff2d78" : "#00ffe7"}`,
                    animation: `${flicker} ${video.featured ? 4 : 6}s infinite`,
                  }} />
                  <Typography sx={{
                    fontFamily: "RussoOne",
                    fontSize: video.featured ? "0.9rem" : "0.75rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: 0.5,
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>
                    {video.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* CTA */}
        {!loading && (
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography component="a" href="https://www.youtube.com/@falsesquadtalks" target="_blank" sx={{
              display: "inline-flex", alignItems: "center", gap: 2,
              px: 5, py: 1.8, borderRadius: "4px",
              border: "1px solid rgba(255,45,120,0.25)",
              color: "#ff2d78", fontFamily: "RussoOne",
              fontSize: "0.82rem", letterSpacing: 2,
              textDecoration: "none",
              bgcolor: "rgba(255,45,120,0.03)",
              transition: "all 0.3s",
              "&:hover": {
                bgcolor: "rgba(255,45,120,0.08)",
                borderColor: "#ff2d78",
                transform: "translateY(-2px)",
                boxShadow: "0 0 20px rgba(255,45,120,0.2)",
              },
            }}>
              ▶ VER TODO EN YOUTUBE
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default YouTubeGallery;