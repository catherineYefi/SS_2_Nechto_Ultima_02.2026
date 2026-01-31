import { CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide18Trackers() {
  const assets = [
    '100+ компаний в опыте трекеров',
    'Обучены лично Дашкиевым и Калашниковым',
    'Действующие предприниматели с живыми бизнесами',
    'Насмотренность на типичные ошибки и золотые задачи',
  ];

  const focus = [
    'Ритм без выгорания: раз в 2 недели',
    'Лидерская поддержка: плотный коннект еженедельно',
    'Инвестиции в удержание: мастермайнды, слёты',
    'Командная динамика: синхронизации трекеров',
  ];

  return (
    <div className="slide">
      <h2>Команда трекеров — сердце Ультимы</h2>

      <div className="trackers-grid">
        <section className="trackers-block">
          <h3 className="trackers-title">Ключевой актив:</h3>
          <ul className="trackers-list">
            {assets.map((t) => (
              <li key={t} className="trackers-item">
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="trackers-block trackers-block--accent">
          <h3 className="trackers-title">Фокус на 9 сезон:</h3>
          <ul className="trackers-list">
            {focus.map((t) => (
              <li key={t} className="trackers-item">
                <CheckCircle className="inline-icon icon success" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <Lightbulb className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>Вывод:</strong> Сильная команда = качество продукта
        </p>
      </div>
    </div>
  );
}
