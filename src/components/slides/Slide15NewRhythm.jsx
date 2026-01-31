import { Calendar, Zap, Clock } from 'lucide-react';

export default function Slide15NewRhythm() {
  return (
    <div className="slide slide-15">
      <h2>Новый ритм работы</h2>
      <p className="section-subtitle section-subtitle--hero">Ритм, который держит энергию и не выматывает</p>

      <div className="timeline-grid timeline-grid--force-3">
        <div className="timeline-item timeline-item--tight">
          <Calendar className="inline-icon" />
          <h3 className="timeline-title">Старт: первые 2 недели</h3>
          <ul className="timeline-list timeline-list--tight">
            <li>Максимальный фокус команды</li>
            <li>Плотное погружение</li>
            <li>Быстрые реакции</li>
          </ul>
        </div>

        <div className="timeline-item timeline-item--tight">
          <Zap className="inline-icon" />
          <h3 className="timeline-title">Первый месяц</h3>
          <ul className="timeline-list timeline-list--tight">
            <li>Подготовка к СС: инструменты с эффектом WOW</li>
            <li>Офлайн стратегическая сессия</li>
            <li>Фиксация решений</li>
          </ul>
        </div>

        <div className="timeline-item timeline-item--tight">
          <Clock className="inline-icon" />
          <h3 className="timeline-title">Основной ритм</h3>
          <ul className="timeline-list timeline-list--tight">
            <li>Раз в 2 недели — встреча с трекером</li>
            <li>Раз в 2 недели — встреча с лидером десятки</li>
            <li>Чередование форматов</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
