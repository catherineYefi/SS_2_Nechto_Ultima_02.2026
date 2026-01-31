import { CheckCircle, RefreshCw } from 'lucide-react';

export default function Slide13WhatKept() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1rem'}}>Что мы сохранили из 8 сезона</h2>
      
      <div className="two-column" style={{gap: '1.2rem', margin: '1rem 0'}}>
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Работало и усиливаем:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Стратегические сессии — максимальная глубина</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Роль трекера — отделять главное от второстепенного</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Групповая динамика — когда была, результаты лучше</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Экспертность команды трекеров</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Меняем:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <RefreshCw className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Ритм: с weekly на bi-weekly</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <RefreshCw className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Позиционирование: в элитное сообщество</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <RefreshCw className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Фокус: на качество и удержание команды</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <RefreshCw className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Элитарность: мастермайнды, слёты, события</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
