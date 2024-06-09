import News from "./Popular & Latest";
import CovidPage from "./covid";
import GridNews from "./gridNews";
import Notification from "./notification";
import Product from "./product";

const Main = () => {
    return (
        <main className='container'>
            <CovidPage />
            <GridNews />
            <Notification />
            <News />
            <Product />
        </main>
    );
};

export default Main;
