import "./Nav.css"

const Nav = () => {
  return (
    <>
      <nav>
      <div className="gif"><iframe src="https://giphy.com/embed/SKGo6OYe24EBG" width="50%" height="50%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cartoon-rainbow-spongebob-SKGo6OYe24EBG"></a></p>
        <ul className="header_menu">
          <li className="menu_item"><a href="#Inicio">Inicio</a></li>
          <li className="menu_item"><a href="#Personagens">Personagens</a></li>
          <li className="menu_item"><a href="#Cenario">Cenario</a></li>
        </ul>
      </nav>
      </>
      );
}
export default Nav; 