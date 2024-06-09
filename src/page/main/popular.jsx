import Ads from "../../../public/advertisement.jpg";
const Popular = () => {
    return (
        <article className='popular'>
            <h3 className='popular__heading'>Cамые популярные новости</h3>
            <div className='popular__news'>
                <p className='popular__news_text'>
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                </p>
                <p className='popular__news_date'>11:31 / 15.05.2020</p>
            </div>
            <div className='popular__news'>
                <p className='popular__news_text'>
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                </p>
                <p className='popular__news_date'>11:31 / 15.05.2020</p>
            </div>
            <div className='popular__news'>
                <p className='popular__news_text'>
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                </p>
                <p className='popular__news_date'>11:31 / 15.05.2020</p>
            </div>
            <div className='popular__news'>
                <p className='popular__news_text'>
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                </p>
                <p className='popular__news_date'>11:31 / 15.05.2020</p>
            </div>
            <div className="popular__ads">
                <img src={Ads} alt="advertisement" />
            </div>
        </article>
    );
};

export default Popular;
