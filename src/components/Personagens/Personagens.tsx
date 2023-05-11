import "./Personagens.css"

const Personagens = () => {
  return (
    <>
      <section className="personagens" id="Personagens">
        <h1>Alguns Personagens</h1>
        <div className="row">
          <ul>
            <li>
              <iframe src="https://giphy.com/embed/nDSlfqf0gn5g4" width="
              100%" height="
              100%" frameBorder="0" className="giphy-embed"></iframe>
              <h3>Bob</h3>
            </li>
            <li>
            <iframe src="https://giphy.com/embed/eHpWHuEUxHIre" width="
            100%" height="
            100%" frameBorder="0" className="giphy-embed"></iframe>
              <h3>Patrick</h3>
            </li>
            <li>
            <iframe src="https://giphy.com/embed/32rVDqpmBn47C" width="
            100%" height="
            100%" frameBorder="0" className="giphy-embed"></iframe>
              <h3>Lula Molusco</h3>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul>
            <li>
            <iframe src="https://giphy.com/embed/xUPJPJSrkhbpffSgaQ" width="
            100%" height="
            100%" frameBorder="0" className="giphy-embed"></iframe>
              <h3>Sandy</h3>
            </li>
            <li>
            <iframe src="https://giphy.com/embed/26xmI9QjpYXSFHZQY" width="
            100%" height="
            100%" frameBorder="0" className="giphy-embed"></iframe>
              <h3>Gary</h3>
            </li>
            <li>
            <iframe src="https://giphy.com/embed/10hfegXGKVRVNm" width="
            100%" height="
            100%" frameBorder="0" className="giphy-embed"></iframe>
              <h3>Seu Seriguejo</h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Personagens; 