import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Deposit = () => {
  const { amount } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { depositMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <button onClick={() => depositMoney(amount)} style={{ margin: 10 }}>
        Withdraw
      </button>
    </div>
  );
};

export default Deposit;
