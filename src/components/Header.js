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
        </div>
    )
}

export default Header;