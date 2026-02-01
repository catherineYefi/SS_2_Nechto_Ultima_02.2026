export default function Slide26Resume() {
  return (
    <div className="slide slide-26-resume">
      <h2>ULTIMA 9.0: Резюме</h2>
      <p className="section-subtitle section-subtitle--hero">Вся история на одном слайде</p>

      <div className="resume-grid resume-grid--top">
        {/* RESULTS */}
        <section className="resume-card resume-card--orange">
          <div className="resume-card-head">
            <span className="resume-emoji" aria-hidden="true">📊</span>
            <h3 className="resume-title">РЕЗУЛЬТАТЫ 8 СЕЗОНА</h3>
          </div>
          <div className="resume-body">
            <ul className="resume-list">
              <li>46 участников</li>
              <li>18,5 млн ₽ выручки</li>
              <li>R 20.5%</li>
              <li>422 тыс ₽ средний чек</li>
            </ul>
          </div>
        </section>

        {/* PAINS */}
        <section className="resume-card resume-card--red">
          <div className="resume-card-head">
            <span className="resume-emoji" aria-hidden="true">⚠️</span>
            <h3 className="resume-title">ОСНОВНЫЕ БОЛИ</h3>
          </div>
          <div className="resume-body">
            <ul className="resume-list">
              <li>Воспринималась как трекерство</li>
              <li>Не хватало элитарности и движа</li>
              <li>Weekly-ритм перегружал</li>
              <li>Фокус на продажах, не на команде</li>
            </ul>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="resume-card resume-card--orange">
          <div className="resume-card-head">
            <span className="resume-emoji" aria-hidden="true">🔄</span>
            <h3 className="resume-title">РЕФЛЕКСИЯ КОМАНДЫ</h3>
          </div>

          <div className="resume-body resume-body--split">
            <div className="resume-kv">
              <div className="resume-k">Задача:</div>
              <div className="resume-v">→ Удержать контур и подхватить</div>
            </div>

            <div className="resume-kv">
              <div className="resume-k">Результат:</div>
              <div className="resume-v">→ Хотели новый продукт</div>
              <div className="resume-v">→ Сделали выводы и зачатки</div>
            </div>
          </div>
        </section>
      </div>

      <div className="resume-bridge">
        <span className="resume-bridge-text">8 сезон = подготовка к переходу</span>
      </div>

      <div className="resume-grid resume-grid--bottom">
        {/* VALUE */}
        <section className="resume-card resume-card--purple">
          <div className="resume-card-head">
            <span className="resume-emoji" aria-hidden="true">💎</span>
            <h3 className="resume-title">ЦЕННОСТЬ ДЛЯ НЕЧТО</h3>
          </div>

          <div className="resume-body">
            <div className="resume-check">
              <div className="resume-check-line">
                <span className="resume-check-emoji" aria-hidden="true">✅</span>
                <span>Усиление основного продукта</span>
              </div>
              <div className="resume-sub"> (эфиры/домашки/разборы)</div>
            </div>

            <div className="resume-check">
              <div className="resume-check-line">
                <span className="resume-check-emoji" aria-hidden="true">✅</span>
                <span>Рост экономики</span>
              </div>
              <div className="resume-sub"> (LTV, AOV, прибыль)</div>
            </div>

            <div className="resume-check">
              <div className="resume-check-line">
                <span className="resume-check-emoji" aria-hidden="true">✅</span>
                <span>Удержание и репутация</span>
              </div>
              <div className="resume-sub"> (участники, кейсы, бренд)</div>
            </div>
          </div>
        </section>

        {/* GOALS */}
        <section className="resume-card resume-card--green">
          <div className="resume-card-head">
            <span className="resume-emoji" aria-hidden="true">🎯</span>
            <h3 className="resume-title">ЦЕЛИ 9 СЕЗОНА</h3>
          </div>

          <div className="resume-body">
            <div className="resume-goal">
              <div className="resume-goal-k">Минимум:</div>
              <div className="resume-goal-v">50 млн (R 15-17%)</div>
            </div>

            <div className="resume-goal">
              <div className="resume-goal-k">Оптимум:</div>
              <div className="resume-goal-v">60 млн (R 16-18%)</div>
            </div>

            <div className="resume-goal">
              <div className="resume-goal-k">Амбиция:</div>
              <div className="resume-goal-v">70 млн (R 19-21%)</div>
            </div>
          </div>
        </section>

        {/* KEY PROJECTS */}
        <section className="resume-card resume-card--blue">
          <div className="resume-card-head">
            <span className="resume-emoji" aria-hidden="true">🚀</span>
            <h3 className="resume-title">КЛЮЧЕВЫЕ ПРОЕКТЫ</h3>
          </div>

          <div className="resume-body">
            <div className="resume-project">
              <div className="resume-project-n">1.</div>
              <div className="resume-project-t">
                <div className="resume-project-title">Продукт 2.0</div>
                <div className="resume-sub">Переупаковка в элитное сообщество</div>
              </div>
            </div>

            <div className="resume-project">
              <div className="resume-project-n">2.</div>
              <div className="resume-project-t">
                <div className="resume-project-title">Конвертор 2.0</div>
                <div className="resume-sub">Поиск основного конвертера</div>
              </div>
            </div>

            <div className="resume-project">
              <div className="resume-project-n">3.</div>
              <div className="resume-project-t">
                <div className="resume-project-title">Расширение ЦА</div>
                <div className="resume-sub">Выход за пределы Нечто</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
