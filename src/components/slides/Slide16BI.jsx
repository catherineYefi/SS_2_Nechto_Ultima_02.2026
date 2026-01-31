import { CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide16BI() {
  const items = [
    'Входят в стоимость трекинга',
    'Работа с цифрами и управленческими инструментами',
    'Снижение тревожности участников',
    'Повышение качества решений на СС',
  ];

  return (
    <div className="slide">
      <h2>Контур БИ как фундамент качества</h2>
      <p className="section-subtitle section-subtitle--hero">Подготовка как стандарт, а не опция</p>

      <section className="bi-block">
        <h3 className="bi-title">3 групповые встречи по 1,5 часа до СС</h3>

        <ul className="bi-list">
          {items.map((t) => (
            <li key={t} className="bi-item">
              <CheckCircle className="inline-icon icon success" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <Lightbulb className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>Результат:</strong> Участники на СС подготовлены → решения глубже, внедрения быстрее
        </p>
      </div>
    </div>
  );
}
