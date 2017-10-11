import _ from 'lodash';

export const APPEND_VALUE = "APPEND_VALUE";
export const EQUAL_OPERATION = "EQUAL_OPERATION";
export const CLEAR_OPERATION = "CLEAR_OPEATION";

const binaryOperand = new Set(["/", "+", "-", "*"]);

const operandMap = {
  π: Math.PI,
  e: Math.E
};

export const onButtonPressed = symbol => {
  return async (dispatch, getState) => {
    // current is a string expression
    const { current, isTyping } = getState().display;
    let currentNumber;
    if (!_.isUndefined(operandMap[current])) {
      currentNumber = operandMap[current];
    }else {
      currentNumber = parseFloat(current);
    }

    let payload;
    switch (symbol) {
      case "C":
        dispatch({
          type: CLEAR_OPERATION
        });
        break;
      case "±":
        payload = `${currentNumber < 0
          ? Math.abs(currentNumber)
          : -currentNumber}`;
        dispatchResultToReducer(dispatch, APPEND_VALUE, payload);
        break;
      case "%":
        payload = `${(currentNumber / 100).toFixed(2)}`;
        dispatchResultToReducer(dispatch, EQUAL_OPERATION, payload);
        break;
      case "sin":
        payload = `${Math.sin(currentNumber)}`;
        dispatchResultToReducer(dispatch, EQUAL_OPERATION, payload);
        break;
      case "√":
        payload = `${Math.sin(currentNumber)}`;
        dispatchResultToReducer(dispatch, EQUAL_OPERATION, payload);
        break;
      case "²":
        payload = `${currentNumber * currentNumber}`;
        dispatchResultToReducer(dispatch, EQUAL_OPERATION, payload);
        break;
      case "/":
      case "+":
      case "-":
      case "*":
        const operand = current.substr(-1);
        if (binaryOperand.has(operand)) {
          payload = `${current.substr(0, current.length - 1)}${symbol}`;
          dispatchResultToReducer(dispatch, APPEND_VALUE, payload);
        } else {
          payload = `${current}${symbol}`;
          dispatchResultToReducer(dispatch, APPEND_VALUE, payload);
        }
        break;
      case "=":
        const expression = current.replace(/π|e/g, function(matched) {
          return operandMap[matched];
        });
        try {
          payload = `${eval(expression)}`;
          dispatchResultToReducer(dispatch, EQUAL_OPERATION, payload);
        } catch (e) {
          dispatchResultToReducer(dispatch, EQUAL_OPERATION, "NaN");
        }
        break;
      default:
        if ((current === "0" || !isTyping) && symbol !== ".") {
          dispatchResultToReducer(dispatch, APPEND_VALUE, symbol);
        } else {
          dispatchResultToReducer(dispatch, APPEND_VALUE, current + symbol);
        }
    }
  };
};

const dispatchResultToReducer = (dispatch, type, payload) => {
  return dispatch({ type, payload });
};
