export default function Slide26Final() {
  return (
    <div className="slide final-slide" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
      <div className="final-message">
        <p className="statement-text" style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>8 сезон — подготовка к переходу.</p>
        <p className="statement-text" style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>9 сезон — первый сезон переходу в новый продукт.</p>
        <div className="divider"></div>
        <p className="statement-text" style={{color: '#818cf8', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem'}}>
          Ультима становится элитным сообществом.
        </p>
        <p className="statement-text" style={{color: '#818cf8', fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem'}}>
          Не просто формат, а смена класса продукта.
        </p>
        <div className="divider"></div>
        <h1 className="brand-title" style={{marginTop: '1.5rem', fontSize: '5rem'}}>ULTIMA 9.0</h1>
        <p className="brand-tagline" style={{fontSize: '1.4rem'}}>Где цели превращаются в результат</p>
      </div>
    </div>
  );
}
