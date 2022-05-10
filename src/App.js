import './App.css';
import { Profile } from './component/form/Profile';
import { History } from './component/history/History';
import { Orders } from './component/active orders/Active_orders';


function App() {
  return (
    <div className="App">
      <Profile/>
      <History/>
      <Orders/>
    </div>
  );
}

export default App;
