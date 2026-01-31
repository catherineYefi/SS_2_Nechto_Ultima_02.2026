import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function Slide07AManagement() {
  return (
    <div className="slide">
      <h2>8 сезон: управленческая перестройка</h2>
      <p className="section-subtitle section-subtitle--hero">
        Как новая команда пересобрала продукт в движении
      </p>

      <section className="story-block story-block--tight">
        <h3 className="story-title story-title--tight">Контекст</h3>

        <p className="story-paragraph">
          В 8 сезоне новая команда взяла полное управление Ultima
          <br />
          Пересборка продукта &quot;на ходу&quot;, без паузы, без внешних ресурсов
        </p>
      </section>

      <section className="story-callout story-callout--tight">
        <p className="story-callout-lead story-callout-lead--tight">
          <strong>Несмотря на сложности:</strong>
        </p>

        <div className="story-callout-row">
          <AlertTriangle className="inline-icon icon warning" />
          <p className="story-callout-text story-callout-text--tight">
            Продукт стал управляемым и автономным
          </p>
        </div>
      </section>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <CheckCircle className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>8 сезон — не провал, а подготовка к смене класса</strong>
        </p>
      </div>
    </div>
  );
}
