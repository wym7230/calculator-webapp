export const UNARY_OPERATION = 'UNARY_OPERATION';
export const EQUAL_OPERATION = 'EQUAL_OPERATION';
export const CLEAR_OPERATION = 'CLEAR_OPEATION';

export const onButtonPressed = symbol => {
  return async (dispatch, getState) => {
    // current can be either a number or an expression
    const { current, isTyping } = getState().display;
    const currentNumber = parseFloat(current);
    let payload;
    console.log(current);
    switch (symbol) {
      case 'C':
        dispatch({
          type: CLEAR_OPERATION
        });
        break;
      case '±':
        if (!isNaN(currentNumber)) {
          payload =
            currentNumber < 0 ? Math.abs(currentNumber) : -currentNumber;
          dispatchResultToReducer(dispatch, UNARY_OPERATION, payload);
        }
        break;
      case '%':
        if (!isNaN(currentNumber)) {
          payload = (currentNumber / 100).toFixed(2);
          dispatchResultToReducer(dispatch, UNARY_OPERATION, payload);
        }
        break;
      case '.':
        if (!isNaN(currentNumber)) {
          payload = `${currentNumber}.`;
          dispatchResultToReducer(dispatch, UNARY_OPERATION, payload);
        }
        break;
      case '/':
      case '+':
      case '-':
      case '*':
        const operand = current.substr(-1);
        if (binaryOperand.has(operand)) {
          payload = `${current.substr(0, current.length - 1)}${operand}`;
          dispatchResultToReducer(dispatch, UNARY_OPERATION, payload);
        } else {
          payload = `${current}${symbol}`;
          dispatchResultToReducer(dispatch, UNARY_OPERATION, payload);
        }
        break;
      case '=':
        payload = eval(current);
        dispatchResultToReducer(dispatch, EQUAL_OPERATION, payload);
        break;
      default:
        if (current === '0' || !isTyping) {
          dispatchResultToReducer(dispatch, UNARY_OPERATION, symbol);
        } else {
          dispatchResultToReducer(dispatch, UNARY_OPERATION, current + symbol);
        }
    }
  };
};

const binaryOperand = new Set(['/', '+', '-', 'x']);

const dispatchResultToReducer = (dispatch, type, payload) => {
  return dispatch({ type, payload });
};
