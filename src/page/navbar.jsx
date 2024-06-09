import { Icons } from "../assets/icons/Icons";
import Banner from "../../public/banner.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='container'>
            <nav className='navbar'>
                <Link to={"/"} className='navbar__logo'>
                    <Icons.logo />
                </Link>
                <ul className='navbar__courses'>
                    <li className='navbar__courses_value'>
                        $ <span className='navbar__courses_price'>10137.2</span>
                    </li>

                    <li className='navbar__courses_value'>
                        P <span className='navbar__courses_price'>138.26</span>
                    </li>

                    <li className='navbar__courses_value'>
                        E{" "}
                        <span className='navbar__courses_price'> 10988.72</span>
                    </li>
                </ul>

                <button className='navbar__search-btn'>
                    <Icons.search />
                </button>
                <button className='navbar__language_btn'>
                    <Icons.ru /> <span>РУ</span>
                </button>
                <a href='https://web.telegram.org/k/'>
                    <button className='navbar__subs_btn'>
                        <Icons.whiteTelegram />
                        <span>Подписатся</span>
                    </button>
                </a>

                <ul className='navbar__branches'>
                    <li>
                        <a href='#'>Узбекистана</a>
                    </li>
                    <li>
                        <a href='#'>Мир</a>
                    </li>
                    <li>
                        <a href='#'>Экономика</a>
                    </li>
                    <li>
                        <a href='#'>Политика</a>
                    </li>
                    <li>
                        <a href='#'>Общество</a>
                    </li>
                    <li>
                        <a href='#'>Технологии</a>
                    </li>
                    <li>
                        <a href='#'>Спорт</a>
                    </li>
                    <li>
                        <a href='#'>Культура</a>
                    </li>
                    <li>
                        <a href='#'>Происшествия</a>
                    </li>
                    <li>
                        <a href='#'>Туризм</a>
                    </li>
                </ul>
                <div className='navbar__banner'>
                    <img src={Banner} alt='banner' width={1160} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
