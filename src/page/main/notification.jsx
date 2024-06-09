import { Link } from "react-router-dom";
import Bell from "../../../public/bell.png"
const Notification = () => {
  return (
      <div className='notification'>
          <img src={Bell} alt='notification' width={31} height={35} />
          <p className='notification__title'>
              Хотите узнать новости первыми? подключите уведомления!
          </p>
          <Link to={"/contact"}>
          <button className='notification__btn'>Включит уведомления!</button>
          </Link>
      </div>
  );
}

export default Notification
