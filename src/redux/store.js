// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'


// const middleware = [thunk]

// const store = createStore(
//    rootReducer,
//    composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todosSlice from "../components/TodoList/todosSlice";

const store = configureStore({
   reducer: {
      filters: filtersSlice.reducer,
      todoList: todosSlice.reducer
   },

})


export default store