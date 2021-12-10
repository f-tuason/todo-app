const initialState = {
  // start of initial state
  todos: [],
  // end of initial state
};

const reducer = (state = initialState, action) => {
  /*
    action {
      type: ALWAYS CAPITALIZED, NO SPACE,
      payload:,
    }
  */

  switch (action.type) {
    // reducer functions
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DONE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.status = "done";
          }
          return todo;
        }),
      };
    case "UNDO_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.status = "pending";
          }
          return todo;
        }),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    // default function which returns state
    default:
      return state;
  }
};

export default reducer;
