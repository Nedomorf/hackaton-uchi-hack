import './Header.css';
import {useState} from "react";

function Header(){
    const [activeChevron, setChevron] = useState(false);

    function onClickChevron(){
        setChevron(!activeChevron);
    }

    return(
        <div className='wrapper'>
            <div className="header-container">
                <div className="box">
                    <div className="search-icon">
                        <img src="https://www.svgrepo.com/show/18282/search.svg"
                             alt="search"
                             width='26px'
                             height='26px'
                        />
                    </div>
                    <input type="text" className='search-input' placeholder='Search...'/>
                    <div onClick={ onClickChevron } className={`chevron${activeChevron?' chevronReverse':''}`}>
                        <img src="https://www.svgrepo.com/show/183224/chevron.svg"
                             alt="chevron"
                             width='26px'
                             height='26px'
                        />
                    </div>
                </div>

                {activeChevron &&
                    <div className="categories">
                        <div className="checkbox-item">
                            <input type="checkbox" id='Статьи'/>
                            <label htmlFor="Статьи">Статьи</label>
                        </div>

                        <div className="checkbox-item">
                            <input type="checkbox" id='Фото'/>
                            <label htmlFor="Фото">Фото</label>
                        </div>

                        <div className="checkbox-item">
                            <input type="checkbox" id='Видео'/>
                            <label htmlFor="Видео">Видео</label>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;