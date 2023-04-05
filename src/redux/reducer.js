import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";

// combineREducers() will return below function
// const rootReducer = (state = {}, action) => {
//    return {
//       filters: filtersReducer(state.filters, action),
//       todoList: todoListReducer(state.todoList, action)
//    }
// }

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
