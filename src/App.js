import "./App.css";
import { useSelector } from "react-redux";
import Amount from "./components/Amount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";

function App() {
  const { account } = useSelector((state) => state);

  return (
    <div className="App">
      <header style={{ margin: 10 }}>{`Amount - ${account}`}</header>
      <Amount />
      <Deposit />
      <Withdraw />
    </div>
  );
}

export default App;
