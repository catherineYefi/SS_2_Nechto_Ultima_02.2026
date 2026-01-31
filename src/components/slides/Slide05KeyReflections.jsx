import { AlertTriangle } from 'lucide-react';

export default function Slide05KeyReflections() {
  const reflections = [
    'Формат воспринимался как групповое трекерство, а не отдельный режим',
    'Не хватало "движа", ритма и ощущения элитарности',
    'Weekly-ритм перегружал и участников, и трекеров',
    'Фокус был на продажах и админ-формате, но не на удержании команды трекеров',
  ];

  return (
    <div className="slide">
      <h2>4 ключевые рефлексии</h2>

      <div className="reflections-grid">
        {reflections.map((text, idx) => (
          <div key={text} className="reflection-card">
            <div className="reflection-head">
              <div className="reflection-number">{String(idx + 1).padStart(2, '0')}</div>
              <AlertTriangle className="reflection-icon icon warning" />
            </div>
            <div className="reflection-text">{text}</div>
          </div>
        ))}
      </div>

      <div className="note note-compact">
        <p>Трекеры перегружались weekly-ритмом → выгорание снижало качество ведения групп</p>
      </div>
    </div>
  );
}
