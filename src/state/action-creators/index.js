const money = (action, amount) => {
  return (dispatch) => {
    dispatch({
      type: action,
      payload: amount,
    });
  };
};

export const depositMoney = money.bind(this, "deposit");
export const withdrawMoney = money.bind(this, "withdraw");
