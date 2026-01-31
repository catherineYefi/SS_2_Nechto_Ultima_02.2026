import { Target, CheckCircle } from 'lucide-react';

export default function Slide24Fixations() {
  return (
    <div className="slide slide-24">
      <h2>Фиксации на 9 сезон</h2>

      <div className="fix-hero">
        <span className="fix-hero-kicker">Ключевая фиксация</span>
        <div className="fix-hero-text">Ультима = элитное сообщество</div>
      </div>

      <div className="fix-cards">
        <div className="fix-card-strong">
          <div className="fix-card-strong-head">
            <Target className="icon accent" />
            <h3 className="fix-card-strong-title">Роль в экосистеме</h3>
          </div>
          <div className="fix-card-strong-text">Вершина траектории роста в экосистеме</div>
        </div>

        <div className="fix-card-strong fix-card-strong--accent">
          <div className="fix-card-strong-head">
            <Target className="icon accent" />
            <h3 className="fix-card-strong-title">Стандарты</h3>
          </div>
          <div className="fix-card-strong-text">Вход, ритм, плотность, ресурсы</div>
        </div>
      </div>

      <div className="fix-metrics">
        <div className="fix-metrics-title">
          <CheckCircle className="icon success" />
          <span>Метрики успеха</span>
        </div>

        <div className="fix-metrics-chips">
          <div className="fix-metric-chip">Выполнение плана</div>
          <div className="fix-metric-chip">Retention 95%+</div>
        </div>
      </div>
    </div>
  );
}
