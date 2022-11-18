const initial = { görevler: [{ id: 0, text: "Work on Redux" }] };





const todoReducer = (
  state = initial,action
) => {
  switch (action.type) {
    case "EKLE":
      return {
        görevler: [
          ...state.görevler,
          { id: state.görevler.length, text: action.payload },
        ],
      };

    case "SIL":
      return initial
      ;

    default:
      return state;
  }
};

export default todoReducer;
