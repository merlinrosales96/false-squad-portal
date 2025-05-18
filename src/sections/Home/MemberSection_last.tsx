/*import { Container, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';

const members = [
    { name: 'Juan', role: 'Líder del grupo', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Pedro', role: 'Editor de videos', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Luis', role: 'Experto en juegos', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Carlos', role: 'Community Manager', avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'David', role: 'Técnico de audio', avatar: 'https://i.pravatar.cc/150?img=5' }
];

const Members = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                Conoce a los Miembros
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {members.map((member, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 2,
                                boxShadow: 3,
                                textAlign: 'center'
                            }}
                        >
                            <Avatar
                                alt={member.name}
                                src={member.avatar}
                                sx={{ width: 100, height: 100, mb: 2 }}
                            />
                            <CardContent>
                                <Typography variant="h6">{member.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Members;*/
/*
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const members = [
  { name: 'Juan', role: 'Líder del grupo', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Pedro', role: 'Editor de videos', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Luis', role: 'Experto en juegos', avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Carlos', role: 'Community Manager', avatar: 'https://i.pravatar.cc/150?img=4' },
  { name: 'David', role: 'Técnico de audio', avatar: 'https://i.pravatar.cc/150?img=5' }
];

const Members = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Conoce a los Miembros
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {members.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                padding: 2, 
                boxShadow: 3, 
                textAlign: 'center', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover .avatar': {
                    transform: 'scale(1.3) translateY(-20%)',
                  }
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.avatar}
                  className="avatar"
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    mb: 2, 
                    transition: 'transform 0.3s ease',
                    zIndex: 1,
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Members;

*/

/*import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Card, Box } from '@mui/material';

type MemberProps = {
    size: number;
    memberImage: string;
};

const MemberCard = ({ memberImage, size = 150 }: MemberProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            sx={{
                width: size,
                height: size,
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#222', // fondo oscuro para que destaque
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            elevation={6}
        >
            <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                    position: 'absolute',
                    width: size * 0.5,
                    height: size * 0.5,
                    objectFit: 'contain',
                    transition: 'opacity 0.5s ease',
                    opacity: hovered ? 0 : 1,
                    zIndex: 2,
                }}
            />

            <Box
                component="img"
                src={memberImage}
                alt="Member"
                sx={{
                    width: size,
                    height: size,
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease',
                    opacity: hovered ? 1 : 0,
                    zIndex: 1,
                    borderRadius: 2,
                }}
            />
        </Card>
    );
};

export default function MembersSection() {
    const members = [
        { name: 'Juan', role: 'Líder del grupo', avatar: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Pedro', role: 'Editor de videos', avatar: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Luis', role: 'Experto en juegos', avatar: 'https://i.pravatar.cc/150?img=3' },
        { name: 'Carlos', role: 'Community Manager', avatar: 'https://i.pravatar.cc/150?img=4' },
        { name: 'David', role: 'Técnico de audio', avatar: 'https://i.pravatar.cc/150?img=5' }
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: 4,
            }}
        >
            {members.map((m) => (
                <MemberCard
                    key={m.name}
                    memberImage={m.avatar}
                    size={150}
                />
            ))}
        </Box>
    );
}*/


/*import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Card, Box } from '@mui/material';
import { Image } from '../../components/Image';

export default function MembersSection() {
    const [currentImage, setCurrentImage] = useState(logo);

    const members = [
        { name: 'Juan', role: 'Líder del grupo', avatar: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Pedro', role: 'Editor de videos', avatar: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Luis', role: 'Experto en juegos', avatar: 'https://i.pravatar.cc/150?img=3' },
        { name: 'Carlos', role: 'Community Manager', avatar: 'https://i.pravatar.cc/150?img=4' },
        { name: 'David', role: 'Técnico de audio', avatar: 'https://i.pravatar.cc/150?img=5' }
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: 4,
            }}
        >
            <Image image={currentImage} alt="logo" className="items-center justify-center mx-auto overflow-hidden rounded-xl w-fit h-fit object-center" />


            {members.map((m) => (
                <Card
                    sx={{
                        width: 150,
                        height: 150,
                        borderRadius: 2,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#222', // fondo oscuro para que destaque
                    }}
                    onMouseEnter={() => setCurrentImage(m.avatar)}
                    onMouseLeave={() => setCurrentImage(logo)}
                    elevation={6}
                >

                    <Box
                        component="img"
                        src={m.avatar}
                        alt="Member"
                        sx={{
                            width: 150,
                            height: 150,
                            objectFit: 'cover',
                            transition: 'opacity 0.5s ease',
                            zIndex: 1,
                            borderRadius: 2,
                        }}
                    />
                </Card>
            ))}
        </Box>
    );
}*/


//import logo from '../../assets/images/logo.png';
//import React, { useState } from 'react';
import { Box, Card, CardMedia } from '@mui/material';
import { Members } from '../../utils/MembersList';
import { Image } from '../../components/Image';
import miembros from '../../assets/images/miembros.png';

const MembersSection = () => {
    //const [hoveredMember, setHoveredMember] = useState<string>(logo);

    /*const handleMouseEnter = (avatar: string) => {
        setHoveredMember(avatar);
    };

    const handleMouseLeave = () => {
        setTimeout(() => setHoveredMember(logo), 500); // Retardo de 500 ms solo si no hay otro hover
    };*/

    return (
        <Box
            sx={{

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                p: 4,
            }}
        >
            <Image image={miembros} alt="" className="mx-auto overflow-hidden rounded-xl object-cover object-center" />
            {/*
            <Box
                sx={{
                    position: 'relative',
                    width: 150,
                    height: 150,
                }}
            >
                <Avatar
                    src={hoveredMember}
                    alt="logo or avatar"
                    sx={{
                        width: '100%',
                        height: '100%',
                        transition: 'opacity 0.5s ease-in-out',
                        opacity: 1,
                        position: 'absolute',
                    }}
                />
            </Box>
*/}
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {Members.map((member) => (
                    /*<Card
                        key={member.name}
                        onMouseEnter={() => handleMouseEnter(member.image)}
                        onMouseLeave={() => handleMouseLeave()}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 180,
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <CardMedia
                            sx={{ height: "140" }}
                            image={member.image}
                            title={member.name}
                        />
                    </Card>*/
                    <Card
                        sx={{
                            border: "2px solid #00FEFE",
                            width: 200,
                            height: 300,
                            overflow: 'hidden',
                            borderRadius: 2,
                            boxShadow: 3,
                            cursor: 'pointer',
                        }}
                        elevation={4}
                    >
                        <CardMedia
                            component="img"
                            image={member.image}
                            alt={member.name}
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
                ))}
            </Box>
        </Box>
    );
};

export default MembersSection;

