import "./App.css";
import { Profile } from "./components/form/Profile";
import { History } from "./components/history/History";
import { Orders } from "./components/active orders/Active_orders";
import { List } from "./components/listcontent/list";
import { Button } from "./components/button";
import { BasketsModal } from "./components/baskets_modal";
import { BasketsSave } from "./components/baskets_save";

function App() {
    return (
        <div className="App">
            {/* <Profile/> */}
            {/* <History/> */}
            {/* <Orders/> */}
            {/* <List/> */}
            {/* <Button color="blue">Оформить заказ</Button>
            <Button color="orange">В корзину</Button> */}
            <BasketsModal/>
            <BasketsSave/>
        </div>
    );
}

export default App;
