import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './painting.json';

export default function App() {
  return (
    <div>
      <Section title="Top week">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
