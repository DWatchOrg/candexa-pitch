import PitchDeck from './PitchDeck';

export const metadata = {
  title: 'Candexa AI — Investor Pitch Deck',
  description: 'The New Job Network. In Your Inbox.',
};

export default function PitchPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2d2d2d', padding: '20px' }}>
      <PitchDeck />
    </main>
  );
}
