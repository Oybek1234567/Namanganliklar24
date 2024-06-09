import { Icons } from "../../assets/icons/Icons";
import Facebook from "../../../public/facebook.jpg";
import Twitter from "../../../public/twitter.jpg";
import Odnoklasniki from "../../../public/odnoklasnik.jpg";
import GooglePlay from "../../../public/playmarket.jpg";
import Appstore from "../../../public/appstore.jpg";
const Contact = () => {
    return (
        <div className='contact container'>
            <h3 className='contact__heading'>Напишите нам</h3>
            <div className='contact__form'>
                <div className='contact__form_login'>
                    <input
                        type='text'
                        placeholder='Имя'
                        className='contact__form_login-name'
                        required
                    />
                    <input
                        type='email'
                        placeholder='Электронная почта'
                        className='contact__form_login-email'
                        required
                    />
                    <input
                        type='number'
                        placeholder='Номер телефона'
                        className='contact__form_login-number'
                        required
                    />
                    <input
                        type='text'
                        placeholder='Тема'
                        className='contact__form_login-theme'
                        required
                    />
                    <textarea
                        placeholder='Текст'
                        className='contact__form_login-text'
                        required></textarea>
                    <button className='contact__form_login-btn'>
                        Прикрепить файл <Icons.file />{" "}
                    </button>
                    <div className='contact__form_login-code-btn'>
                        <button className='contact__form_login-code'>
                            Код{" "}
                        </button>
                        <span>4 k 7 Z a</span>
                    </div>
                    <button className='contact__form_login-submit'>
                        Отправить
                    </button>
                </div>
                <div className='contact__form_info'>
                    <div className='contact__form_info-logo'>
                        <Icons.logo />
                    </div>
                    <div className='contact__form_info-email'>
                        <p>Электронная почта</p>
                        <p>info@namanganliklar24.uz</p>
                    </div>
                    <div className='contact__form_info-web'>
                        <p>Социальные сети</p>
                        <span className='contact__form_info-web_img'>
                            <img src={Facebook} alt='facebook' />
                            <img src={Twitter} alt='twitter' />
                            <img src={Odnoklasniki} alt='odnoklasniki' />
                        </span>
                    </div>
                    <div className='contact__form_info-telegram'>
                        <p>Телеграм канал</p>
                        <a href='https://web.telegram.org/k/'>
                        <button className='contact__form_info-telegram_btn'>
                            <Icons.purpleTelegram />
                            Подписатся
                        </button>
                        </a>
                    </div>
                    <div className='contact__form_info-app'>
                        <p>Мобильная приложение</p>
                        <img src={GooglePlay} alt='play market' />
                        <img src={Appstore} alt='app store' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
