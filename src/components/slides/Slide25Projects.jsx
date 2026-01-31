import { Package, Zap, Users } from 'lucide-react';

export default function Slide25Projects() {
  const product = [
    'Переупаковка в элитное сообщество',
    'Отладка ритма и качества',
    'Усиление элитарности через события',
    'Тестирование новых форматов',
  ];

  const converter = [
    'Поиск конвертеров кроме слётов',
    'Тестирование эфиров экспертов',
    'Мастермайнды на слётах',
    'Усиление работы с кейсами',
  ];

  const audience = [
    'За пределы участников Нечто',
    'Привлечение холодной ЦА ААА',
    'Контент и амбассадоры',
    'СС как входная точка',
  ];

  return (
    <div className="slide">
      <h2>Проекты на 9 сезон</h2>
      <p className="section-subtitle section-subtitle--hero">Три ключевых направления</p>

      <div className="projects-grid projects-grid--tight">
        <section className="project-card">
          <div className="project-head">
            <Package className="project-icon icon accent" />
            <h3 className="project-title">Продукт 2.0</h3>
          </div>
          <ul className="project-list">
            {product.map((t) => (
              <li key={t} className="project-item">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="project-card project-card--accent">
          <div className="project-head">
            <Zap className="project-icon icon warning" />
            <h3 className="project-title">Конвертор 2.0</h3>
          </div>
          <ul className="project-list">
            {converter.map((t) => (
              <li key={t} className="project-item">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="project-card">
          <div className="project-head">
            <Users className="project-icon icon accent" />
            <h3 className="project-title">Расширение ЦА</h3>
          </div>
          <ul className="project-list">
            {audience.map((t) => (
              <li key={t} className="project-item">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
