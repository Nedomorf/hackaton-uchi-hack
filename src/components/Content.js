import './Content.css';

function Content(){
    return(
        <div className="content-container">
            <div className='content'>
                <div className='main'>
                    <p>Статья 1: sdcjvnjdfnvjfdn jdfnvkjldfnvljkvjk vjkldv lkdfn jvk jkdnv lkdnf jkdnfv ...</p>
                    <p>Статья 2: sdcjvnjdfnvjfdn jdfnvkjldfnvljkvjk vjkldv lkdfn jvk jkdnv lkdnf jkdnfv ...</p>
                </div>
                <div className='categories'>
                    <p><input type="checkbox" name="Статьи" value="Статьи" checked />Статьи</p>
                    <p><input type="checkbox" name="Фото" value="Фото"/>Фото</p>
                    <p><input type="checkbox" name="Видео" value="Видео"/>Видео</p>
                </div>
            </div>
        </div>
    )
}

export default Content;