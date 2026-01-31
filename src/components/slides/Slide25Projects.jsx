import { Package, Zap, Users } from 'lucide-react';

export default function Slide25Projects() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Проекты на 9 сезон</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Три ключевых направления</p>
      
      <div className="projects-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.9rem', margin: '1rem 0'}}>
        <div className="project-box" style={{padding: '0.9rem'}}>
          <Package className="inline-icon" style={{width: '2rem', height: '2rem'}} />
          <h3 style={{fontSize: '1.4rem', marginBottom: '0.6rem'}}>Продукт 2.0</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Переупаковка в элитное сообщество</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Отладка ритма и качества</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Усиление элитарности через события</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Тестирование новых форматов</span>
            </li>
          </ul>
        </div>
        
        <div className="project-box" style={{padding: '0.9rem'}}>
          <Zap className="inline-icon" style={{width: '2rem', height: '2rem'}} />
          <h3 style={{fontSize: '1.4rem', marginBottom: '0.6rem'}}>Конвертор 2.0</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Поиск конвертеров кроме слётов</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Тестирование эфиров экспертов</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Мастермайнды на слётах</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Усиление работы с кейсами</span>
            </li>
          </ul>
        </div>
        
        <div className="project-box" style={{padding: '0.9rem'}}>
          <Users className="inline-icon" style={{width: '2rem', height: '2rem'}} />
          <h3 style={{fontSize: '1.4rem', marginBottom: '0.6rem'}}>Расширение ЦА</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>За пределы участников Нечто</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Привлечение холодной ЦА ААА</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>Контент и амбассадоры</span>
            </li>
            <li className="insight-item" style={{padding: '0.3rem'}}>
              <span className="text" style={{fontSize: '0.95rem'}}>СС как входная точка</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
