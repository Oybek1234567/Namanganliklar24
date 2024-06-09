import PresidentUz from "../../../public/prezident.jpg";
import Karantin from "../../../public/karantin.jpg";
import Sardoba from "../../../public/sardoba.jpg";
import Prokuror from "../../../public/prokuror.jpg";
import StopKarantin from "../../../public/stop-karantin.jpg";
import Ambulance from "../../../public/tez-yordam.jpg";
import { Link } from "react-router-dom";

const GridNews = () => {
  return (
      <section className='grid-news'>
          <Link to={"/info"}>
              
          <ul className='grid-news__list'>
              <li className='grid-news__list_items'>
                  <img
                      src={PresidentUz}
                      alt='President Uzbekistan'
                      width={386}
                      height={190}
                  />
                  <p className='grid-news__list_items-text'>
                      Мирзиёев рассказал, зачем было построено Сардобинское
                      водохранилище
                  </p>
                  <span className='grid-news__list_items-date'>
                      05:28 / 16.05.2020
                  </span>
              </li>
              <li className='grid-news__list_items'>
                  <img src={Karantin} alt='Karantin' width={386} height={190} />
                  <p className='grid-news__list_items-text'>
                      Карантин в Узбекистане продлен до 1 июня
                  </p>
                  <span className='grid-news__list_items-date'>
                      05:28 / 16.05.2020
                  </span>
              </li>
              <li className='grid-news__list_items'>
                  <img src={Sardoba} alt='Sardoba' width={386} height={190} />
                  <p className='grid-news__list_items-text'>
                      Обмелевшая Сардоба: стихия или человеческий фактор?
                  </p>
                  <span className='grid-news__list_items-date'>
                      05:28 / 16.05.2020
                  </span>
              </li>
              <li className='grid-news__list_items'>
                  <img src={Prokuror} alt='Prokuror' width={386} height={190} />
                  <p className='grid-news__list_items-text'>
                      Следствие проверяет четыре версии прорыва Сардобинской
                      плотины
                  </p>
                  <span className='grid-news__list_items-date'>
                      05:28 / 16.05.2020
                  </span>
              </li>
              <li className='grid-news__list_items'>
                  <img
                      src={Ambulance}
                      alt='Ambulance'
                      width={386}
                      height={190}
                  />
                  <p className='grid-news__list_items-text'>
                      Выявлено еще 7 случаев коронавируса
                  </p>
                  <span className='grid-news__list_items-date'>
                      05:28 / 16.05.2020
                  </span>
              </li>
              <li className='grid-news__list_items'>
                  <img
                      src={StopKarantin}
                      alt='karantin'
                      width={386}
                      height={190}
                  />
                  <p className='grid-news__list_items-text'>
                      Итоги второго месяца карантина
                  </p>
                  <span className='grid-news__list_items-date'>
                      05:28 / 16.05.2020
                  </span>
              </li>
          </ul>
          </Link>
      </section>
  );
}

export default GridNews
