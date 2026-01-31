import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function Slide07AManagement() {
  return (
    <div className="slide">
      <h2>8 сезон: управленческая перестройка</h2>
      <p className="section-subtitle section-subtitle--hero">
        Как новая команда пересобрала продукт в движении
      </p>

      <section className="story-block">
        <h3 className="story-title">Контекст</h3>
        <div className="story-lines">
          <p className="story-line">В 8 сезоне новая команда взяла полное управление Ultima</p>
          <p className="story-line">Пересборка продукта &quot;на ходу&quot;, без паузы, без внешних ресурсов</p>
        </div>
      </section>

      <section className="story-callout">
        <p className="story-callout-lead">
          <strong>Несмотря на сложности:</strong>
        </p>

        <div className="story-callout-row">
          <AlertTriangle className="inline-icon icon warning" />
          <p className="story-callout-text">Продукт стал управляемым и автономным</p>
        </div>
      </section>

      <div className="conclusion full-width conclusion--compact">
        <CheckCircle className="conclusion-icon" />
        <p>
          <strong>8 сезон — не провал, а подготовка к смене класса</strong>
        </p>
      </div>
    </div>
  );
}
