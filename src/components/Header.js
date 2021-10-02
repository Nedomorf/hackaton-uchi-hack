import React, {useEffect, useState} from "react";
import styles from './Header.module.css';
import {api} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {setSearchInfoThunk} from "../store/reducers/search";


function Header() {
    const [activeChevron, setChevron] = useState(false);
    const [isArticlesChecked, setIsArticlesChecked] = useState(true);
    const [isPhotoChecked, setIsPhotoChecked] = useState(false);
    const [isVideosChecked, setIsVideosChecked] = useState(false);
    const [isExcelChecked, setIsExcelChecked] = useState(false);
    const [isPdfChecked, setIsPdfChecked] = useState(false);
    const [isWordChecked, setIsWordChecked] = useState(false);
    const [isPowerpointChecked, setIsPowerpointChecked] = useState(false);
    const [input, setInput] = useState('');
    const [transformedQuery, setTransformedQuery] = useState('');

    const searchInfo = useSelector((state) => state.SearchReducer.searchInfo)
    const dispatch = useDispatch()

    useEffect(() => {
/*
        api.getPPT('соня+мармедадова')
*/
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
                    <div className={`${styles.categoriesItem} ${isArticlesChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="articles" checked={isArticlesChecked} hidden/>
                        <label onClick={() => setIsArticlesChecked(!isArticlesChecked)} htmlFor="articles">
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
                    <div className={`${styles.categoriesItem} ${isPhotoChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="photos" checked={isPhotoChecked} hidden/>
                        <label onClick={() => setIsPhotoChecked(!isPhotoChecked)} htmlFor="photos">
                            {
                                isPhotoChecked
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
                            Photos</label>
                    </div>
                    <div className={`${styles.categoriesItem} ${isVideosChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="videos" checked={isVideosChecked} hidden/>
                        <label onClick={() => setIsVideosChecked(!isVideosChecked)} htmlFor="videos">
                            {
                                isVideosChecked
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
                            Videos</label>
                    </div>
                    <div className={`${styles.categoriesItem} ${isExcelChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="articles" checked={isExcelChecked} hidden/>
                        <label onClick={() => setIsExcelChecked(!isExcelChecked)} htmlFor="articles">
                            {
                                isExcelChecked
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
                            Excel
                        </label>
                    </div>
                    <div className={`${styles.categoriesItem} ${isPdfChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="articles" checked={isPdfChecked} hidden/>
                        <label onClick={() => setIsPdfChecked(!isPdfChecked)} htmlFor="articles">
                            {
                                isPdfChecked
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
                            Pdf
                        </label>
                    </div>
                    <div className={`${styles.categoriesItem} ${isWordChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="articles" checked={isWordChecked} hidden/>
                        <label onClick={() => setIsWordChecked(!isWordChecked)} htmlFor="articles">
                            {
                                isWordChecked
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
                            Word
                        </label>
                    </div>
                    <div className={`${styles.categoriesItem} ${isPowerpointChecked && styles.checkedCategoriesItem}`}>
                        <input type="checkbox" id="articles" checked={isPowerpointChecked} hidden/>
                        <label onClick={() => setIsPowerpointChecked(!isPowerpointChecked)} htmlFor="articles">
                            {
                                isPowerpointChecked
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
                            PowerPoint
                        </label>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;