import { CheckCircle, TestTube, Target, Lightbulb } from 'lucide-react';

export default function Slide19Converters() {
  const proven = [
    'Слёты Нечто: LCR 22% → SCR 32% → CR 7%',
    'Кейсы участников',
  ];

  const hypotheses = ['Эфиры экспертов', 'Эфиры трекеров'];

  const retention = ['Движ и элитарность', 'Групповая идентичность', 'Эксклюзивность'];

  return (
    <div className="slide slide-19">
      <h2>Конвертеры Ультимы</h2>
      <p className="section-subtitle section-subtitle--hero">Как Ультима обеспечивает удержание и выручку</p>

      <div className="converters-grid converters-grid--force-3">
        <section className="converter-block">
          <h3 className="converter-title converter-title--normal">Доказанные конвертеры:</h3>
          <ul className="converter-list">
            {proven.map((t) => (
              <li key={t} className="converter-item">
                <CheckCircle className="inline-icon icon success" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="converter-block converter-block--accent">
          <h3 className="converter-title converter-title--normal">Новые гипотезы:</h3>
          <ul className="converter-list">
            {hypotheses.map((t) => (
              <li key={t} className="converter-item">
                <TestTube className="inline-icon icon accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="converter-block converter-block--retention">
          <h3 className="converter-title converter-title--normal">Удержание:</h3>

          <div className="retention-head">
            <Target className="inline-icon icon accent" />
            <div className="retention-title">
              Мастермайнды — 3 раза в год <sup className="retention-sup">*</sup>
            </div>
          </div>

          <div className="retention-pills retention-pills--compact">
            {retention.map((t) => (
              <div key={t} className="retention-pill retention-pill--compact">
                {t}
              </div>
            ))}
          </div>

          <div className="retention-footnote retention-footnote--compact">
            * Только для участников Ультимы
          </div>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight">
        <p className="conclusion-text-inline">
          <strong>Цикл:</strong> Слёт → Ультима → Мастермайнд → Кейс
        </p>
      </div>
    </div>
  );
}
