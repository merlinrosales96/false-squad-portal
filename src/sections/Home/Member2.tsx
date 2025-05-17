import React, { useState } from 'react';
import { Box, Card, CardMedia } from '@mui/material';

interface ImageCardProps {
  imageSrc: string;
  altText?: string;
  size?: number;
  onHover: (src: string | null) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, altText = '', size = 150, onHover }) => {
  return (
    <Card
      sx={{
        width: size,
        height: size,
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
        cursor: 'pointer',
      }}
      elevation={4}
      onMouseEnter={() => onHover(imageSrc)}
      onMouseLeave={() => onHover(null)}
    >
      <CardMedia
        component="img"
        image={imageSrc}
        alt={altText}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
    </Card>
  );
};

const MembersSection = () => {
  const members = [
    { name: 'Juan', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Pedro', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Luis', avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, p: 4 }}>
      {/* Área donde se muestra la imagen grande */}
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 4,
          position: 'relative',
          backgroundColor: '#eee',
        }}
      >
        {hoveredImage && (
          <Box
            component="img"
            src={hoveredImage}
            alt="Hovered"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: hoveredImage ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        )}
      </Box>

      {/* Cards de imagenes */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {members.map((member) => (
          <ImageCard
            key={member.name}
            imageSrc={member.avatar}
            altText={member.name}
            size={100}
            onHover={setHoveredImage}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MembersSection;
