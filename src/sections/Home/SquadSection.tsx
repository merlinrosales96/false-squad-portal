import React from 'react';
import { MEMBERS } from '../../const/members';
import SelectYourMember from '../../components/Members/SelectYourMember';

const SquadSection: React.FC = () => {
  return (
    <section
      id='squad'
      className="squad-section relative flex min-h-screen w-full overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      <div className="squad-glow-left absolute pointer-events-none" />
      <div className="squad-glow-right absolute pointer-events-none" />
      <div className="scanlines-overlay" />

      <div className="relative flex w-full flex-col items-center p-8 text-center">
        <div id="landing" className="squad-landing absolute top-0 flex w-full flex-col items-center justify-center">

          <div className="squad-status-tag">
            <span className="squad-status-dot" />
            AGENTES ACTIVOS // {MEMBERS.length} CONECTADOS
          </div>

          <h2 className="squad-title">
            EL <span className="neon-cyan">SQUAD</span>
          </h2>

          <div className="squad-divider">
            <div className="squad-divider-line" />
            <span className="squad-divider-diamond">◆</span>
            <div className="squad-divider-line squad-divider-line--right" />
          </div>

          <p className="squad-hint">Pasa el cursor sobre un agente</p>
        </div>

        <SelectYourMember members={MEMBERS} />
      </div>
    </section>
  );
};

export default SquadSection;