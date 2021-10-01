import './Header.css';

function Header(){
    return(
        <div className='header'>
            <div className="box">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..."/>
                </div>
            </div>
            <section className="group-burger">
                <div className="burger"></div>
                <div className="menu-burger">
                    <div className="click-close"></div>
                    <a href="#a1" className="menu-item">Все</a>
                    <a href="#a2" className="menu-item">Статьи</a>
                    <a href="#a3" className="menu-item">Фото</a>
                    <a href="#a4" className="menu-item">Видео</a>
                </div>
            </section>
        </div>
    )
}

export default Header;