import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Withdraw = () => {
  const { amount } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <button onClick={() => withdrawMoney(amount)} style={{ margin: 10 }}>
        Withdraw
      </button>
    </div>
  );
};

export default Withdraw;
