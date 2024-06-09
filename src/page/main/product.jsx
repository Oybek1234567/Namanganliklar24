import Phone from "../../../public/phone.png";
import googlePlay from "../../../public/googleplay.svg";
import appStore from "../../../public/appstore.svg";
import { Link } from "react-router-dom";
const Product = () => {
  return (
      <section className='product'>
      <img src={Phone} alt='phone' className="product__img"/>
      <div>
          <h3 className='product__title'>
              Всегда будьте в курсе последних новостей!
          </h3>
          <p className="product__text">
              Установите мобильное приложение NAMANGANLIKLAR24 и все новости в
              вашем кармане!
          </p>
      </div>
          <Link to={"/"} className='product__contents'>
              <img
                  src={googlePlay}
                  alt='google play'
                  className='product__contents_img'/>
              <img
                  src={appStore}
                  alt='app store'
                  className='product__contents_img-two'
               />
          </Link>
      </section>
  );
}

export default Product
