import React from 'react';
import { MEMBERS } from '../../const/members';
import SelectYourMember from '../../components/Members/SelectYourMember';
//import { keyframes } from '@mui/material';

/*const flicker = keyframes`
  0%, 94%, 100% { opacity: 1; }
  95% { opacity: 0.3; }
  97% { opacity: 0.6; }
`;*/

const SquadSection: React.FC = () => {
  return (
    <section
      id='squad'
      className="relative flex min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#04040a' }}
    >
      {/* Grid bg */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ top: '5%', left: '-8%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,231,0.06) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ top: '15%', right: '-8%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)' }} />

      {/* Scanline */}
      <div className="scanlines-overlay" />

      <div className="relative flex w-full flex-col items-center p-8 text-center">

        {/* Landing */}
        <div id="landing" className="absolute top-0 flex w-full flex-col items-center justify-center" style={{ paddingTop: '14vh' }}>

          {/* System status */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '4px 14px', borderRadius: '3px', marginBottom: '20px',
            background: 'rgba(0,255,231,0.04)',
            border: '1px solid rgba(0,255,231,0.15)',
            fontSize: '0.62rem', letterSpacing: '4px',
            color: 'rgba(0,255,231,0.7)', fontFamily: 'RussoOne',
          }}>
            <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#00ffe7', boxShadow: '0 0 6px #00ffe7' }} />
            AGENTES ACTIVOS // {MEMBERS.length} CONECTADOS
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: 'RussoOne',
            fontSize: 'clamp(2.8rem, 9vw, 6rem)',
            lineHeight: 0.95, margin: '0 0 8px 0',
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '-2px',
          }}>
            EL{' '}
            <span style={{ color: '#00ffe7', textShadow: '0 0 16px rgba(0,255,231,0.7), 0 0 50px rgba(0,255,231,0.3)' }}>
              SQUAD
            </span>
          </h2>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '12px 0 16px', width: '100%', maxWidth: 400, justifyContent: 'center' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,255,231,0.3))' }} />
            <span style={{ fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 4, color: 'rgba(0,255,231,0.4)' }}>◆</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(0,255,231,0.3), transparent)' }} />
          </div>

          {/* Hint */}
          <p style={{
            fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: '4px',
            color: 'rgba(255,255,255,0.18)', margin: 0,
            textTransform: 'uppercase',
          }}>
            Pasa el cursor sobre un agente
          </p>
        </div>

        <SelectYourMember members={MEMBERS} />
      </div>
    </section>
  );
};

export default SquadSection;
