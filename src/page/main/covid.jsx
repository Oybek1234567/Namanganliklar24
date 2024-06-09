import Covid from "../../../public/covid.png";
import { Icons } from "../../assets/icons/Icons";
const CovidPage = () => {
    return (
        <section className='covid'>
            <div className='covid__virus'>
                <img
                    src={Covid}
                    alt='covid-virus'
                    className='covid__virus_img'
                />
                <h2 className='covid__virus_title'>
                    Коронавирус COVID-19 в Узбекистане
                </h2>
            </div>
            <ul className='covid__news'>
                <li className='covid__news_infected'>
                    <Icons.infected />
                    <span className='covid__news_infected-info'>
                        <p className='covid__news_infected-text'>
                            Инфицированы
                        </p>
                        <b className='covid__news_infected-count'>2753</b>
                    </span>
                </li>
                <li className='covid__news_recover'>
                    <Icons.recovered />
                    <span className='covid__news_recover-info'>
                        <p className='covid__news_recover-text'>Выздоровели</p>
                        <b className='covid__news_recover-count'>2245</b>
                    </span>
                </li>
                <li className='covid__news_dead'>
                    <Icons.dead />
                    <span className='covid__news_dead-info'>
                        <p className='covid__news_dead-text'>Умерли</p>
                        <b className='covid__news_dead-count'>12</b>
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default CovidPage;
