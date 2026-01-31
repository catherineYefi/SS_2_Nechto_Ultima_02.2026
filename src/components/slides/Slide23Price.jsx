import { AlertTriangle, Lightbulb } from 'lucide-react';

export default function Slide23Price() {
  return (
    <div className="slide">
      <h2>Цена отсутствия Ультимы</h2>
      <p className="section-subtitle">Что теряет Нечто без Ультимы</p>
      
      <div className="two-column">
        <div>
          <ul className="insight-list compact">
            <li className="insight-item">
              <AlertTriangle className="icon warning" />
              <span className="text">Отток зрелых предпринимателей в другие сообщества</span>
            </li>
            <li className="insight-item">
              <AlertTriangle className="icon warning" />
              <span className="text">Отток трекеров как доп. усиления экосистемы</span>
            </li>
            <li className="insight-item">
              <AlertTriangle className="icon warning" />
              <span className="text">Потолок роста: невозможность двигать ЦА ААА вверх по траектории</span>
            </li>
          </ul>
        </div>
        
        <div>
          <ul className="insight-list compact">
            <li className="insight-item">
              <AlertTriangle className="icon warning" />
              <span className="text">Снижение LTV, среднего чека, доп. выручки и прибыли</span>
            </li>
            <li className="insight-item">
              <AlertTriangle className="icon warning" />
              <span className="text">Слабее кейсовая база для продвижения</span>
            </li>
            <li className="insight-item">
              <AlertTriangle className="icon warning" />
              <span className="text">Риск остаться "soft-сообществом" без твёрдых результатов</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Вывод:</strong> Ультима — это не просто продукт. Это инфраструктура роста всей экосистемы.</p>
      </div>
    </div>
  );
}
