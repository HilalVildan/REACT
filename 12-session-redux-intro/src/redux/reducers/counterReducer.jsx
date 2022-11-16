const counterReducer = (state = { counterSonuc: 0 }, action) => {
  switch (action.type) {
    case "ARTTIR":
      return {
        counterSonuc: state.counterSonuc + 1,
        text1: action.payload,
      };

      case "AZALT":

      return {
        counterSonuc: state.counterSonuc-1,
        text1: action.payload
      };

    case "RESET":

    return {
      counterSonuc: 0,
      text1 : action.payload
      
    }

    default:
      return state;
  }

  
};

export default counterReducer;
