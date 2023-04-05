// const initState = {
//    search: '',
//    status: 'All',
//    priorities: []
// }

// const filtersReducer = (state = initState, action) => {
//    // console.log({state, action})
//    switch (action.type) {
//       case 'filters/s':
//// inmutation
//          return {
//             ...state,
//             search: action.payload
//          }
//       case 'filters/statusFilterChange':
//          return {
//             ...state,
//             status: action.payload
//          }
//       case 'filters/prioritiesFilterChange':
//          return {
//             ...state,
//             priorities: action.payload
//          }
//       default:
//          return state
//    }
// }

// export default filtersReducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    //Generate action creators and can be mutation
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },

    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(statusFilterTodo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = action.payload;
      })
      .addCase(prioritiesFilterTodo.fulfilled, (state, action) => {
        state.priorities = action.payload;
      });
  },
});

export const statusFilterTodo = createAsyncThunk(
  "/api/statusFilterTodo",
  async (status) => {
    fetch("/api/statusFilter", {
      method: "POST",
      body: JSON.stringify(status),
    });
    return status;
  }
);

export const prioritiesFilterTodo = createAsyncThunk(
  "/api/prioritiesFilterTodo",
  async (priorities) => {
    fetch("/api/prioritiesFilter", {
      method: "POST",
      body: JSON.stringify(priorities),
    });
    return priorities;
  }
);
export default filtersSlice;
