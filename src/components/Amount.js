import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function App() {
  const dispatch = useDispatch();
  const { updateBalance } = bindActionCreators(actionCreators, dispatch);
  const handleAmountChange = (e) => {
    updateBalance(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <input
        placeholder={0}
        onChange={handleAmountChange}
        style={{ margin: 10 }}
      />
    </div>
  );
}

export default App;
