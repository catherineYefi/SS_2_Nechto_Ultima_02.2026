import { Package, Zap, Users } from 'lucide-react';

export default function Slide25Projects() {
  return (
    <div className="slide">
      <h2>Проекты на 9 сезон</h2>
      <p className="section-subtitle">Три ключевых направления</p>
      
      <div className="projects-grid">
        <div className="project-box">
          <Package className="inline-icon" style={{width: '3rem', height: '3rem'}} />
          <h3>Продукт 2.0</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Завершение переупаковки в элитное сообщество</span>
            </li>
            <li className="insight-item">
              <span className="text">Отладка ритма и качества (bi-weekly, контур БИ)</span>
            </li>
            <li className="insight-item">
              <span className="text">Усиление элитарности через эксклюзивные события</span>
            </li>
            <li className="insight-item">
              <span className="text">Тестирование новых форматов (мастермайнды, доп. эфиры)</span>
            </li>
          </ul>
        </div>
        
        <div className="project-box">
          <Zap className="inline-icon" style={{width: '3rem', height: '3rem'}} />
          <h3>Конвертор 2.0</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Поиск основного конвертера помимо слётов</span>
            </li>
            <li className="insight-item">
              <span className="text">Тестирование гипотез: эфиры экспертов, эфиры трекеров</span>
            </li>
            <li className="insight-item">
              <span className="text">Мастермайнды на слётах — инструмент удержания и элитарности</span>
            </li>
            <li className="insight-item">
              <span className="text">Усиление работы с кейсами как social proof</span>
            </li>
          </ul>
        </div>
        
        <div className="project-box">
          <Users className="inline-icon" style={{width: '3rem', height: '3rem'}} />
          <h3>Расширение ЦА и лидов</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Выход за пределы действующих участников Нечто</span>
            </li>
            <li className="insight-item">
              <span className="text">Привлечение холодной ЦА ААА через контент и амбассадоров</span>
            </li>
            <li className="insight-item">
              <span className="text">Тестирование СС как входной точки в Ультиму</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
