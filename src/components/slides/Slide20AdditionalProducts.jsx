import { TestTube, Beaker, Lightbulb } from 'lucide-react';

export default function Slide20AdditionalProducts() {
  return (
    <div className="slide">
      <h2>Дополнительные продукты</h2>
      <p className="section-subtitle">СС как отдельный рычаг роста</p>
      
      <div className="two-column">
        <div>
          <h3>В стадии тестирования (9 сезон):</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <TestTube className="icon" />
              <span className="text">СС для тру-десяток Нечто: 80k/участник → 800k/десятка</span>
            </li>
            <li className="insight-item">
              <TestTube className="icon" />
              <span className="text">СС для компаний: 400-600k/компания</span>
            </li>
            <li className="insight-item">
              <TestTube className="icon" />
              <span className="text">Индивидуальное трекерство: точечные запросы (уже есть входящие)</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>В разработке на Q1-Q2:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <Beaker className="icon" />
              <span className="text">Апсейлы внутри года: доп. СС для участников Ультимы через 3 мес</span>
            </li>
            <li className="insight-item">
              <Beaker className="icon" />
              <span className="text">Пакеты "Ультима + СС компании" для собственников с бизнесом 100+ млн</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Логика:</strong> Вход через Ультиму или СС → допродажа внутри года</p>
      </div>
    </div>
  );
}
