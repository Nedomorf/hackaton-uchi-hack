import React, {useEffect, useState} from "react";
import styles from './Header.module.css';
import {api} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {setSearchInfoThunk} from "../store/reducers/search";


function Header() {
    const [activeChevron, setChevron] = useState(false);
    const [isArticlesChecked, setIsArticlesChecked] = useState(true);
    const [isPhotoChecked, setIsPhotoChecked] = useState(false);
    const [isVideosChecked, setIsVideosChecked] = useState(true);
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
        dispatch(setSearchInfoThunk(input.replace(/ /g, "+").toLowerCase()));
    }

    function onKeyDownInput(e) {
        if (e.key === 'Enter') {
            search();
        }
    }

    function onClickChevron() {
        setChevron(!activeChevron);
    }

    return (
        // <div className='main'>
        //     {/*<div className="header-container">*/}
        //     <div className="search">
        //         <div className="search-icon">
        //             <img src="https://www.svgrepo.com/show/18282/search.svg"
        //                  alt="search"
        //                  width='26px'
        //                  height='26px'
        //             />
        //         </div>
        //         <input type="text" className='search-input' placeholder='Search...'/>
        //         <div onClick={onClickChevron} className={`'chevron' ${!activeChevron && 'chevronReverse'}`}>
        //             <img src="https://www.svgrepo.com/show/183224/chevron.svg"
        //                  alt="chevron"
        //                  width='26px'
        //                  height='26px'
        //             />
        //         </div>
        //     </div>
        //
        //     {activeChevron &&
        //     <div className="categories">
        //         <div className="checkbox-item">
        //             <input type="checkbox" id="articles"/>
        //             <label htmlFor="articles">Статьи</label>
        //         </div>
        //
        //         <div className="checkbox-item">
        //             <input type="checkbox" id="photo"/>
        //             <label htmlFor="photo">Фото</label>
        //         </div>
        //
        //         <div className="checkbox-item">
        //             <input type="checkbox" id="videos"/>
        //             <label htmlFor="videos">Видео</label>
        //         </div>
        //     </div>
        //     }
        //     {/*</div>*/}
        // </div>
        <div className={styles.main}>
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <img src="https://www.svgrepo.com/show/18282/search.svg"
                         alt="search"
                         width='26px'
                         height='26px'
                    />
                </div>
                <input type="text" className={styles.searchInput} placeholder='Search...'/>
                {/*(!activeChevron && styles.chevronReverse)*/}
                <div onClick={() => setChevron(!activeChevron)}
                     className={`${styles.chevron} ${!activeChevron && styles.chevronReverse}`}>
                    <img src="https://www.svgrepo.com/show/183224/chevron.svg"
                         alt="chevron"
                         width='26px'
                         height='26px'
                    />
                </div>
            </div>
            {/*// TODO*/}
            {/*// calculate height depends on items num ( (itemHeight * i) / 4 )*/}
            <div className={styles.categoriesContainer}>
                <div className={`${styles.categories} ${activeChevron && styles.activeCategories}`}>
                    <div className={styles.categoriesHeader}></div>
                    <div className={`${styles.categoriesItem} ${isArticlesChecked && styles.checkedCategoriesItem}`}
                         onClick={() => setIsArticlesChecked(!isArticlesChecked)}>
                        <input type="checkbox" id="articles" checked={isArticlesChecked} hidden/>
                        <label htmlFor="articles">
                            {
                                isArticlesChecked
                                    ? <img src="https://www.svgrepo.com/show/286554/check.svg"
                                           alt="checked"
                                           width='26px'
                                           height='26px'
                                    />
                                    : <img src="https://www.svgrepo.com/show/311991/cross-mark.svg"
                                           alt="unchecked"
                                           width='26px'
                                           height='26px'
                                    />
                            }
                            Articles
                        </label>
                    </div>
                    <div className={styles.categoriesItem}>
                        <input type="checkbox" id="photos" checked={isPhotoChecked} hidden/>
                        <label htmlFor="photos">Photos</label>
                    </div>
                    <div className={styles.categoriesItem}>
                        <input type="checkbox" id="videos" checked={isVideosChecked} hidden/>
                        <label htmlFor="videos">Videos</label>
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
                                    <div onClick={onClickChevron}
                                         className={`chevron${activeChevron ? ' chevronReverse' : ''}`}>
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
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
            }

            export default Header;
