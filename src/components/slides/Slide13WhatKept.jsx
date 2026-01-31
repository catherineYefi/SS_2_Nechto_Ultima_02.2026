import { CheckCircle, RefreshCw } from 'lucide-react';

export default function Slide13WhatKept() {
  const kept = [
    'Стратегические сессии — максимальная глубина',
    'Роль трекера — отделять главное от второстепенного',
    'Групповая динамика — когда была, результаты лучше',
    'Экспертность команды трекеров',
  ];

  const changed = [
    'Ритм: с weekly на bi-weekly',
    'Позиционирование: в элитное сообщество',
    'Фокус: на качество и удержание команды',
    'Элитарность: мастермайнды, слёты, события',
  ];

  return (
    <div className="slide">
      <h2>Что мы сохранили из 8 сезона</h2>

      <div className="keep-grid">
        <section className="keep-block">
          <h3 className="keep-title">Работало и усиливаем:</h3>
          <ul className="keep-list">
            {kept.map((t) => (
              <li key={t} className="keep-item">
                <CheckCircle className="inline-icon icon success" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="keep-block keep-block--accent">
          <h3 className="keep-title">Меняем:</h3>
          <ul className="keep-list">
            {changed.map((t) => (
              <li key={t} className="keep-item">
                <RefreshCw className="inline-icon icon accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
