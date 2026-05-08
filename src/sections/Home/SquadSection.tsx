import React from 'react';
import { MEMBERS } from '../../const/members';
import SelectYourMember from '../../components/Members/SelectYourMember';

const SquadSection: React.FC = () => {
    return (
        <section
            id='squad'
            className="relative flex min-h-screen w-full overflow-hidden"
            style={{ backgroundColor: '#060608' }}
        >
            {/* Banner de fondo — muy tenue para no pisar el estilo */}
            <div
                className="mask-fade-bottom animate-fade-in absolute inset-0 w-full bg-cover bg-center duration-75"
                style={{
                    backgroundImage: "url('/images/banner.png')",
                    opacity: 0.07,
                }}
            />

            {/* Grid lines — igual que las otras secciones */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: 0.035,
                    backgroundImage: `
                        linear-gradient(rgba(0,255,231,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,231,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Dot grid sutil */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: 0.03,
                    backgroundImage: 'radial-gradient(rgba(0,255,231,0.8) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                }}
            />

            {/* Glow cyan izquierda */}
            <div className="absolute pointer-events-none" style={{
                top: '10%', left: '-8%',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,255,231,0.07) 0%, transparent 70%)',
            }} />

            {/* Glow magenta derecha */}
            <div className="absolute pointer-events-none" style={{
                top: '20%', right: '-8%',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,45,120,0.06) 0%, transparent 70%)',
            }} />

            {/* Contenido principal */}
            <div className="relative flex w-full flex-col items-center p-8 text-center">

                {/* Landing state: título + logo */}
                <div id="landing" className="absolute top-0 flex w-full flex-col items-center justify-center" style={{ paddingTop: '15vh' }}>

                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '6px 16px', borderRadius: '4px', marginBottom: '24px',
                        background: 'linear-gradient(90deg, rgba(0,255,231,0.12), transparent)',
                        borderLeft: '3px solid #00ffe7',
                        fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase',
                        color: '#00ffe7', fontFamily: 'RussoOne',
                    }}>
                        El Squad
                    </div>

                    <h2 style={{
                        fontFamily: 'RussoOne',
                        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                        lineHeight: 1, margin: '0 0 16px 0',
                        color: 'rgba(255,255,255,0.92)',
                        letterSpacing: '-1px',
                    }}>
                        CONOCE EL{' '}
                        <span style={{
                            color: '#00ffe7',
                            textShadow: '0 0 20px rgba(0,255,231,0.6), 0 0 50px rgba(0,255,231,0.3)',
                        }}>
                            SQUAD
                        </span>
                    </h2>
                </div>

                {/* Selector de miembros */}
                <SelectYourMember members={MEMBERS} />
            </div>
        </section>
    );
};

export default SquadSection;
