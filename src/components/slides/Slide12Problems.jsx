import { XCircle, Lightbulb } from 'lucide-react';

export default function Slide12Problems() {
  const positioning = [
    'Воспринималась как групповое трекерство',
    'Движение "от встречи к встрече"',
    'Не было постоянного движа',
    'Отсутствовало ощущение элитарности',
  ];

  const format = [
    'Weekly-ритм приводил к усталости',
    'Слабая групповая идентичность',
    'Не было фокуса на удержании трекеров',
  ];

  return (
    <div className="slide">
      <h2>Почему прошлая модель Ультимы не работала</h2>

      <div className="problems-grid">
        <section className="problems-block">
          <h3 className="problems-title">Проблемы позиционирования</h3>

          <ul className="problems-list">
            {positioning.map((t) => (
              <li key={t} className="problems-item">
                <XCircle className="inline-icon icon error" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="problems-block problems-block--accent">
          <h3 className="problems-title">Проблемы формата</h3>

          <ul className="problems-list">
            {format.map((t) => (
              <li key={t} className="problems-item">
                <XCircle className="inline-icon icon error" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <Lightbulb className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>Вывод:</strong> Ультима ощущалась как сервис, а не элитное сообщество
        </p>
      </div>
    </div>
  );
}
