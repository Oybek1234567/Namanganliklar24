import { Icons } from "../../assets/icons/Icons";
import Popular from "../../page/main/popular";
import PresidentImg from "../../../public/caution.jpg";
import Karantin from "../../../public/karantin.jpg";
import Sardoba from "../../../public/sardoba.jpg";
import PresidentUz from "../../../public/prezident.jpg";

const Info = () => {
    return (
        <div className='info-article container'>
            <div className='info'>
                <div className='info__body'>
                    <h2 className='info__body_title'>
                        Шавкат Мирзиёев строго предупредил хокимов всех уровней
                    </h2>
                    <span className='latest-news__lists_card-date'>
                        <Icons.calendar />
                        11:31 / 15.05.2020
                    </span>
                    <div className='info__body_img'>
                        <img src={PresidentImg} alt='caution' />
                    </div>
                    <span className='info__body_text'>
                        <b>
                            19 мая состоялось видеоселекторное совещание,
                            посвященное дополнительным мерам поддержки
                            предпринимательства.
                        </b>
                        <br />
                        <br />
                        <p>
                            По данным пресс-службы главы государства, из-за
                            пандемии в Узбекистане число бедных и безработных
                            увеличится, а доходы семей уменьшатся. На совещании
                            обсуждены дополнительные меры и приоритетные задачи
                            в этом направлении.
                        </p>
                        <br />
                        <p>
                            Прежде всего, серьезное внимание уделено обеспечению
                            гарантий прав предпринимателей и неприкосновенности
                            их имущества.
                        </p>
                        <br />
                        <b>
                            <i>
                                «Предупреждаю всех хокимов. Если имущество хоть
                                одного предпринимателя будет изъято незаконно,
                                хоким одной лишь отставкой не отделается, но и
                                ответит перед законом», - подчеркнул Шавкат
                                Мирзиёев.
                            </i>
                        </b>
                        <br />
                        <br />
                        <p>
                            Компетентным ведомствам даны указания усилить
                            ответственность за нарушение неприкосновенности
                            собственности, обеспечить полноценное исполнение
                            решений суда о компенсации имущества
                            предпринимателей.
                        </p>
                        <br />
                        <p>
                            Согласно поручению президента деловая активность в
                            каждом районе и городе будет анализироваться на
                            ежемесячной основе.
                        </p>
                        <br />
                        <p>
                            Бизнес-омбудсман будет вносить правительству
                            информацию о хокимах районов и городов, которые
                            допускают нарушения прав и неприкосновенности
                            собственности предпринимателей.
                        </p>
                        <br />
                        Кабинетом Министров будет рассматриваться вопрос о
                        соответствии должности хокимов городов и районов,
                        которые не решают проблемы предпринимателей и не
                        работают с ними в достаточной мере.
                    </span>
                    <div className='info__body_links'>
                        <a href='#'>#хоким </a>
                        <a href='#'>#Шавкат Мирзиёев </a>
                        <a href='#'>#пандемия</a>
                    </div>
                    <hr className='info__body_line' />
                </div>
                <Popular />
            </div>
            <div className='info__body_lists'>
                <h3>Новости по теме</h3>
                <ul className='grid-news__list'>
                    <li className='grid-news__list_items'>
                        <img
                            src={PresidentUz}
                            alt='President Uzbekistan'
                            width={386}
                            height={190}
                        />
                        <p className='grid-news__list_items-text'>
                            Мирзиёев рассказал, зачем было построено
                            Сардобинское водохранилище
                        </p>
                        <span className='grid-news__list_items-date'>
                            05:28 / 16.05.2020
                        </span>
                    </li>
                    <li className='grid-news__list_items'>
                        <img
                            src={Karantin}
                            alt='Karantin'
                            width={386}
                            height={190}
                        />
                        <p className='grid-news__list_items-text'>
                            Карантин в Узбекистане продлен до 1 июня
                        </p>
                        <span className='grid-news__list_items-date'>
                            05:28 / 16.05.2020
                        </span>
                    </li>
                    <li className='grid-news__list_items'>
                        <img
                            src={Sardoba}
                            alt='Sardoba'
                            width={386}
                            height={190}
                        />
                        <p className='grid-news__list_items-text'>
                            Обмелевшая Сардоба: стихия или человеческий фактор?
                        </p>
                        <span className='grid-news__list_items-date'>
                            05:28 / 16.05.2020
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
