import React, { useEffect, useState } from "react";
import { Box, Typography, Container, alpha, Skeleton } from "@mui/material";
import { Image } from "../../components/Image";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID      = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const MAX_RESULTS     = 6;

interface YTVideo {
  id:       string;
  title:    string;
  featured: boolean;
}

const YouTubeGallery: React.FC = () => {
  const [videos, setVideos]   = useState<YTVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
      console.warn("Faltan VITE_YOUTUBE_API_KEY o VITE_YOUTUBE_CHANNEL_ID en .env");
      setError(true);
      setLoading(false);
      return;
    }

    const url =
      `https://www.googleapis.com/youtube/v3/search` +
      `?key=${YOUTUBE_API_KEY}` +
      `&channelId=${CHANNEL_ID}` +
      `&part=snippet` +
      `&order=date` +
      `&type=video` +
      `&maxResults=${MAX_RESULTS}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const items: YTVideo[] = (data.items ?? []).map(
          (item: any, index: number) => ({
            id:       item.id.videoId,
            title:    item.snippet.title,
            featured: index === 0,
          })
        );
        setVideos(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("YouTube API error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      component="section"
      id="videos"
      sx={{
        minHeight: "100vh",
        py: 14,
        bgcolor: "#060608",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <Box sx={{
        position: "absolute", inset: 0, opacity: 0.025,
        backgroundImage: `
          linear-gradient(rgba(255,45,120,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,45,120,0.8) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />

      {/* Side glow */}
      <Box sx={{
        position: "absolute", top: "30%", right: "-5%", zIndex: 0,
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)",
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Box component="span" className="section-tag" sx={{ justifyContent: "center" }}>
            Contenido
          </Box>
          <Image
            image="/images/sections/videos.webp"
            alt="Videos Title"
            className="mx-auto mb-4 w-full max-w-[300px]"
          />
          <Typography sx={{
            fontFamily: "RussoOne", letterSpacing: 4,
            fontSize: "0.75rem", color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}>
            Highlights & Fails — YouTube
          </Typography>
        </Box>

        {/* Error state */}
        {error && (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.3)", fontFamily: "RussoOne", letterSpacing: 2 }}>
              No se pudieron cargar los videos.
            </Typography>
            <Typography
              component="a"
              href="https://www.youtube.com/@falsesquadtalks"
              target="_blank"
              sx={{ color: "#ff2d78", fontFamily: "RussoOne", fontSize: "0.85rem", mt: 1, display: "block" }}
            >
              Ver canal en YouTube →
            </Typography>
          </Box>
        )}

        {/* Loading skeletons */}
        {loading && !error && (
          <Box sx={{
            display: "grid", gap: 2.5,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          }}>
            {Array.from({ length: MAX_RESULTS }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                sx={{
                  borderRadius: "14px", bgcolor: alpha("#0e0e12", 0.8),
                  height: i === 0 ? 400 : 220,
                  gridColumn: { md: i === 0 ? "span 2" : "span 1" },
                  gridRow:    { md: i === 0 ? "span 2" : "span 1" },
                }}
              />
            ))}
          </Box>
        )}

        {/* Video grid */}
        {!loading && !error && (
          <Box sx={{
            display: "grid", gap: 2.5,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gridAutoRows: "minmax(220px, auto)",
          }}>
            {videos.map((video) => (
              <Box
                key={video.id}
                sx={{
                  borderRadius: "14px",
                  bgcolor: alpha("#0e0e12", 0.8),
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.35s ease",
                  position: "relative",
                  overflow: "hidden",
                  gridColumn: { md: video.featured ? "span 2" : "span 1" },
                  gridRow:    { md: video.featured ? "span 2" : "span 1" },
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(255,45,120,0.3)",
                    boxShadow: "0 10px 40px rgba(255,45,120,0.12)",
                  },
                  "&::after": {
                    content: '""', position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.5), transparent)",
                    opacity: 0, transition: "opacity 0.3s",
                  },
                  "&:hover::after": { opacity: 1 },
                }}
              >
                <Box sx={{ width: "100%", height: video.featured ? "88%" : "78%", position: "relative" }}>
                  <iframe
                    style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&color=white`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Box sx={{
                  p: 2, display: "flex", alignItems: "center", gap: 1.5,
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}>
                  <Box sx={{
                    width: 6, height: 6, borderRadius: "50%",
                    bgcolor: video.featured ? "#ff2d78" : "#00ffe7",
                    boxShadow: `0 0 8px ${video.featured ? "#ff2d78" : "#00ffe7"}`,
                    flexShrink: 0,
                  }} />
                  <Typography sx={{
                    fontFamily: "RussoOne",
                    fontSize: video.featured ? "1rem" : "0.82rem",
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: 0.5,
                    // Truncar títulos largos
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
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
            <Typography
              component="a"
              href="https://www.youtube.com/@falsesquadtalks"
              target="_blank"
              sx={{
                display: "inline-flex", alignItems: "center", gap: 1.5,
                px: 5, py: 1.8, borderRadius: "10px",
                border: "1.5px solid rgba(255,45,120,0.3)",
                color: "#ff2d78", fontFamily: "RussoOne",
                fontSize: "0.9rem", letterSpacing: 1.5,
                textDecoration: "none",
                bgcolor: "rgba(255,45,120,0.04)",
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: "rgba(255,45,120,0.1)",
                  borderColor: "#ff2d78",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(255,45,120,0.2)",
                },
              }}
            >
              VER TODO EN YOUTUBE →
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default YouTubeGallery;
