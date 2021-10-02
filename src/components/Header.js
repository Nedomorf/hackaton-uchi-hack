import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setSearchInfoThunk} from "../store/reducers/search";
import './Header.css';
import {api} from "../api";


function Header(){
    const [activeChevron, setChevron] = useState(false);
    const [input, setInput] = useState('');
    const [transformedQuery, setTransformedQuery] = useState('');

    const searchInfo = useSelector((state) => state.SearchReducer.searchInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        api.getPPT('соня+мармедадова')
    })

    function search() {
        if (!input) {
            return
        }
        dispatch(setSearchInfoThunk(input.replace(/ /g,"+").toLowerCase()));
    }

    function onKeyDownInput(e) {
        if (e.key === 'Enter') {
            search();
        }
    }

    function onClickChevron(){
        setChevron(!activeChevron);
    }

    return(
        <div className='wrapper'>
            <div className="header-container">
                <div className="box">
                    <div className="search-icon">
                        <img
                             onClick={search}
                             src="https://www.svgrepo.com/show/18282/search.svg"
                             alt="search"
                             width='26px'
                             height='26px'
                        />
                    </div>
                    <input value={input}
                           onKeyDown={onKeyDownInput}
                           onChange={(e) => setInput(e.currentTarget.value)}
                           type="text" className='search-input'
                           placeholder='Search...'/>
                    <div onClick={ onClickChevron } className={`chevron${activeChevron?' chevronReverse':''}`}>
                        <img src="https://www.svgrepo.com/show/183224/chevron.svg"
                             alt="chevron"
                             width='26px'
                             height='26px'
                        />
                    </div>
                </div>
                {transformedQuery}

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