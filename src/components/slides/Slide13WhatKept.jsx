import { CheckCircle, RefreshCw } from 'lucide-react';

export default function Slide13WhatKept() {
  return (
    <div className="slide">
      <h2>Что мы сохранили из 8 сезона</h2>
      
      <div className="two-column">
        <div>
          <h3>Работало и усиливаем:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Стратегические сессии — максимальная глубина решений</span>
            </li>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Роль трекера — мастерство отделять главное от второстепенного</span>
            </li>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Групповая динамика — когда она была, результаты были сильнее</span>
            </li>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Экспертность команды — трекеры с живым опытом и кейсами</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Меняем:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <RefreshCw className="icon" />
              <span className="text">Ритм: с weekly на bi-weekly (раз в 2 недели)</span>
            </li>
            <li className="insight-item">
              <RefreshCw className="icon" />
              <span className="text">Позиционирование: с "групповое трекерство" → "элитное сообщество"</span>
            </li>
            <li className="insight-item">
              <RefreshCw className="icon" />
              <span className="text">Фокус: с "продажи любой ценой" → "удержание качества и команды"</span>
            </li>
            <li className="insight-item">
              <RefreshCw className="icon" />
              <span className="text">Элитарность: добавляем мастермайнды, слёты, дополнительные события</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
