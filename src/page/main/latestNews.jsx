import { Link } from "react-router-dom";
import Factory from "../../../public/factory.jpg";
import Meeting from "../../../public/meeting.jpg";
import Traffic from "../../../public/traffic.jpg";
import { Icons } from "../../assets/icons/Icons";
const LatestNews = () => {
    return (
        <section className='latest-news'>

            <h2 className='latest-news__title'>Последние новости</h2>
            <ul className='latest-news__lists'>
                <Link to={"/info"}>
                
                <li className='latest-news__lists_card'>
                    <img src={Factory} alt='factory in Sardoba' />
                    <div>
                        <h3 className='latest-news__lists_card-title'>
                            По факту прорыва Сардобинского водохранилища
                            возбуждено уголовное дело
                        </h3>
                        <p className='latest-news__lists_card-text'>
                            После прорыва дамбы Сардобинского водохранилища
                            возбуждено уголовное дело, сообщили в пресс-службе
                            Генпрокуратуры Узбекистана.
                        </p>
                        <span className='latest-news__lists_card-date'>
                            <Icons.calendar />
                            11:31 / 15.05.2020
                        </span>
                    </div>
                </li>
                <li className='latest-news__lists_card'>
                    <img src={Meeting} alt='Meeting' />
                    <div>
                        <h3 className='latest-news__lists_card-title'>
                            Мирзиёев: «Нам следовало бы принять некоторые
                            правила карантина как часть повседневной жизни»
                        </h3>
                        <p className='latest-news__lists_card-text'>
                            Президент Узбекистана заявил, что после того, как
                            угроза коронавируса исчезнет, в стране следовало бы
                            принять некоторые правила периода карантина как
                            часть своей повседневной жизни.
                        </p>
                        <span className='latest-news__lists_card-date'>
                            <Icons.calendar />
                            11:31 / 15.05.2020
                        </span>
                    </div>
                </li>
                <li className='latest-news__lists_card'>
                    <img src={Traffic} alt='traffic' />
                    <div>
                        <h3 className='latest-news__lists_card-title'>
                            В Ташкенте планируют ввести новую систему
                            электронных проездных билетов
                        </h3>
                        <p className='latest-news__lists_card-text'>
                            Целью этих изменений является максимально возможное
                            сокращение количества других маршрутов на улицах,
                            где проходят основные маршруты.
                        </p>
                        <span className='latest-news__lists_card-date'>
                            <Icons.calendar />
                            11:31 / 15.05.2020
                        </span>
                    </div>
                </li>
                <li className='latest-news__lists_card'>
                    <img src={Factory} alt='factory in Sardoba' />
                    <div>
                        <h3 className='latest-news__lists_card-title'>
                            По факту прорыва Сардобинского водохранилища
                            возбуждено уголовное дело
                        </h3>
                        <p className='latest-news__lists_card-text'>
                            После прорыва дамбы Сардобинского водохранилища
                            возбуждено уголовное дело, сообщили в пресс-службе
                            Генпрокуратуры Узбекистана.
                        </p>
                        <span className='latest-news__lists_card-date'>
                            <Icons.calendar />
                            11:31 / 15.05.2020
                        </span>
                    </div>
                </li>
                <li className='latest-news__lists_card'>
                    <img src={Meeting} alt='Meeting' />
                    <div>
                        <h3 className='latest-news__lists_card-title'>
                            Мирзиёев: «Нам следовало бы принять некоторые
                            правила карантина как часть повседневной жизни»
                        </h3>
                        <p className='latest-news__lists_card-text'>
                            Президент Узбекистана заявил, что после того, как
                            угроза коронавируса исчезнет, в стране следовало бы
                            принять некоторые правила периода карантина как
                            часть своей повседневной жизни.
                        </p>
                        <span className='latest-news__lists_card-date '>
                            <Icons.calendar />
                            11:31 / 15.05.2020
                        </span>
                    </div>
                </li>
                <li className='latest-news__lists_card'>
                    <img src={Traffic} alt='traffic' />
                    <div>
                        <h3 className='latest-news__lists_card-title'>
                            В Ташкенте планируют ввести новую систему
                            электронных проездных билетов
                        </h3>
                        <p className='latest-news__lists_card-text'>
                            Целью этих изменений является максимально возможное
                            сокращение количества других маршрутов на улицах,
                            где проходят основные маршруты.
                        </p>
                        <span className='latest-news__lists_card-date'>
                            <Icons.calendar />
                            11:31 / 15.05.2020
                        </span>
                    </div>
                </li>
                </Link>
            </ul>
            <button className='latest-news__btn'>Больше новостей</button>
        </section>
    );
};

export default LatestNews;
