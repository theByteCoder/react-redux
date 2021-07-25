import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const [amount, setAmount] = useState(0);
  const { account } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <header style={{ margin: 10 }}>{`Amount - ${account}`}</header>
      <input
        placeHolder={0}
        onChange={handleAmountChange}
        style={{ margin: 10 }}
      />
      <button onClick={() => depositMoney(amount)} style={{ margin: 10 }}>
        Deposit
      </button>
      <button onClick={() => withdrawMoney(amount)} style={{ margin: 10 }}>
        Withdraw
      </button>
    </div>
  );
}

export default App;
