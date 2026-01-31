import { Target, CheckCircle } from 'lucide-react';

export default function Slide24Fixations() {
  return (
    <div className="slide">
      <h2>Фиксации на 9 сезон</h2>

      <div className="big-quote highlight big-quote--hero big-quote--tight">
        <p>Ультима = элитное сообщество</p>
      </div>

      <div className="fix-grid fix-grid--tight">
        <div className="fix-card">
          <Target className="inline-icon icon accent" />
          <div className="fix-text">Вершина траектории роста в экосистеме</div>
        </div>

        <div className="fix-card fix-card--accent">
          <Target className="inline-icon icon accent" />
          <div className="fix-text">Стандарты: вход, ритм, плотность, ресурсы</div>
        </div>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight">
        <div className="metrics-row">
          <CheckCircle className="inline-icon icon success" />
          <h3 className="metrics-title metrics-title--inline">Метрики успеха:</h3>
          <p className="metrics-line metrics-line--inline">• Выполнение плана • Retention 95%+</p>
        </div>
      </div>
    </div>
  );
}
