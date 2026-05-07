export interface Member {
  id: string
  name: string
  role: string;    // "El Carry", "El Toxic", "El Sniper"
  description: string;
  stats: {
    skill: number;   // 0-100
    toxicity: number; 
    luck: number;
  };
  favGame: string;
}