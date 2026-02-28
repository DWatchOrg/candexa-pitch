import PitchDeck from './pitch/PitchDeck';

export const metadata = {
  title: 'Candexa AI — Investor Pitch Deck',
  description: 'The New Job Network. In Your Inbox.',
};

export default function Home() {
  return (
    <main className="main-wrapper">
      <PitchDeck />
    </main>
  );
}
