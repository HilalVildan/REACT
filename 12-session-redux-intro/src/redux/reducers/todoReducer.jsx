const todoReducer = (
  state = { görevler: [{ id: 0, text: "Work on Redux" }] },
  action
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
      return {
        görevler: [{ id: 0, text: "Work on Redux" }],
      };

    default:
      return state;
  }
};

export default todoReducer;
