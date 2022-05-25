import "./App.css";
import { Profile } from "./component/form/Profile";
import { History } from "./component/history/History";
import { Orders } from "./component/active orders/Active_orders";
import { List } from "./listcontent/list";
import { Button } from "./button";
import { BasketsModal } from "./baskets_modal";
import { BasketsSave } from "./baskets_save";

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
