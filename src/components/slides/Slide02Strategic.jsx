import {
  Users,
  Target,
  MessageCircle,
  BarChart3,
  Zap,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

export default function Slide02Strategic() {
  return (
    <div className="slide">
      <h2>Нечто: сообщество или система результата?</h2>

      <div className="compare-grid">
        <section className="compare-column">
          <h3 className="compare-title">
            <Users className="inline-icon" />
            Сообщество
          </h3>

          <ul className="compare-list">
            <li className="compare-item">
              <Users className="inline-icon" />
              <span>Среда</span>
            </li>
            <li className="compare-item">
              <MessageCircle className="inline-icon" />
              <span>Смыслы</span>
            </li>
            <li className="compare-item">
              <Zap className="inline-icon" />
              <span>Энергия</span>
            </li>
            <li className="compare-item">
              <MessageSquare className="inline-icon" />
              <span>Обсуждение</span>
            </li>
          </ul>
        </section>

        <section className="compare-column compare-column--accent">
          <h3 className="compare-title">
            <Target className="inline-icon" />
            Система результата
          </h3>

          <ul className="compare-list">
            <li className="compare-item">
              <BarChart3 className="inline-icon" />
              <span>Подготовка</span>
            </li>
            <li className="compare-item">
              <BarChart3 className="inline-icon" />
              <span>Управленческие решения</span>
            </li>
            <li className="compare-item">
              <TrendingUp className="inline-icon" />
              <span>Внедрение</span>
            </li>
            <li className="compare-item">
              <CheckCircle className="inline-icon" />
              <span>Измеримые изменения</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="conclusion conclusion--compact">
        <Lightbulb className="conclusion-icon" />
        <p>
          <strong>Вывод:</strong> Ультима — механизм перехода Нечто в систему результата.
        </p>
      </div>
    </div>
  );
}
