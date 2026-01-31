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
        <p className="statement-text">8 сезон не стал переходом в новый продукт.</p>
        <p className="statement-text">Это было удержанием старой модели и подготовкой к переходу.</p>
        <div className="divider"></div>
        <p className="statement-text" style={{color: '#818cf8', fontWeight: 600}}>
          9 сезон — это первый сезон, где начинается переход в новый продукт.
        </p>
        <p className="statement-text" style={{color: '#818cf8', fontWeight: 600}}>
          Ультима становится элитным сообществом, а не просто твердым форматом.
        </p>
        <div className="divider"></div>
        <h1 className="brand-title" style={{marginTop: '2rem'}}>ULTIMA 9.0</h1>
        <p className="brand-tagline">Где цели превращаются в результат</p>
      </div>
    </div>
  );
}
