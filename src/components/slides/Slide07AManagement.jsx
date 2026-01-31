import { CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';

export default function Slide07AManagement() {
  const contextLines = [
    'В 8 сезоне новая команда взяла полное управление Ultima',
    'Пересборка продукта "на ходу", без паузы, без внешних ресурсов',
  ];

  const keyResults = [
    'Средний чек вырос с 195к до 422к (×2,2)',
    'Выручка удержана на уровне 18,5 млн ₽',
    'Продукт стал управляемым и автономным',
  ];

  const builtFromScratch = [
    'Полная автономность: продукт, операционка, контент',
    'Инструменты давления на результат: калькуляторы, дашборд, портал',
    'Ребрендинг своими силами: логотип, стили, презентации (~800к)',
    'Системный результат: Ultima как автономный юнит',
  ];

  return (
    <div className="slide">
      <h2>8 сезон: управленческая перестройка</h2>
      <p className="section-subtitle section-subtitle--hero">
        Как новая команда пересобрала продукт в движении
      </p>

      <div className="management-grid">
        <section className="management-block">
          <h3 className="management-title">Контекст</h3>
          <div className="management-lines">
            {contextLines.map((t) => (
              <p key={t} className="management-line">
                {t}
              </p>
            ))}
          </div>
        </section>

        <section className="management-block management-block--accent">
          <h3 className="management-title">Ключевой управленческий результат</h3>
          <p className="management-lead">
            <strong>Несмотря на сложности:</strong>
          </p>

          <ul className="management-list">
            {keyResults.map((t, i) => (
              <li key={t} className="management-item">
                {i === 0 ? (
                  <TrendingUp className="inline-icon" />
                ) : i === 1 ? (
                  <BarChart3 className="inline-icon" />
                ) : (
                  <CheckCircle className="inline-icon" />
                )}
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="management-block management-block--wide">
        <h3 className="management-title">Что создано с нуля</h3>

        <div className="chips-grid">
          {builtFromScratch.map((t) => (
            <div key={t} className="chip">
              <CheckCircle className="chip-icon icon success" />
              <div className="chip-text">{t}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="conclusion full-width conclusion--compact">
        <p>
          <strong>8 сезон — не провал, а подготовка к смене класса</strong>
        </p>
      </div>
    </div>
  );
}
