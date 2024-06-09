import { Icons } from "../assets/icons/Icons";

const Footer = () => {
    return (
        <div className='footer '>
            <div className='footer container'>
                <div className='footer__sub'>
                    <div className='footer__logo'>NAMANGANLIKLAR24</div>
                    <p className='footer__sub_text'>
                        Подписывайтесь на наш канал в Telegram и будьте всегда в
                        курсе самых последних новостей:
                    </p>
                    <a href='https://web.telegram.org/k/'>
                    <button className='footer__sub_btn'>
                        <Icons.blueTelegram /> Подписатся
                    </button>
                    </a>
                </div>
                <hr className='footer__line' />
                <div className='footer__about'>
                    <div>
                        <h3 className='footer__about_title'>О сайте</h3>
                        <p className='footer__about_text'>
                            Воспроизводство, копирование, тиражирование,
                            распростране ние и иное использование информации с
                            сайта «NAMANGANLIKLAR24.UZ» возможно только с
                            предварительного письменного разрешения редакции.
                        </p>
                    </div>
                    <ul className='footer__about_items'>
                        <li>
                            <a href='#'>Информация о сайте </a>
                        </li>
                        <li>
                            <a href='#'>Напишите нам </a>
                        </li>
                        <li>
                            <a href='#'>Реклама </a>
                        </li>
                        <li>
                            <a href='#'>Прислать новость</a>
                        </li>
                    </ul>
                    <ul className='footer__about_other-items'>
                        <li>
                            <a href='#'>Использование материалов </a>
                        </li>
                        <li>
                            <a href='#'>Темы дня </a>
                        </li>
                        <li>
                            <a href='#'>Наша команда</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
