import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPropertiesFiltered } from "../../services/APIrequests";

export const fetchProperties = createAsyncThunk(
  "filter/fetchProperties",
  (string) => {
    // return a Promise containing the data we want
    return getPropertiesFiltered(string);
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
    realProperties: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.value = action.payload;
      return state;
    },
    apiFilter: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.realProperties = action.payload;
      return state;
    },
    setSearch: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.value = action.payload;
      return state;
    },
  },
  extraReducers: {
    [fetchProperties.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.realProperties = payload;
    },
    [fetchProperties.pending]: (state) => {
      state.isLoading = true;
    },
    //   [signupUser.rejected]: (state, { payload }) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.errorMessage = payload.message;
    //   },
    //   [loginUser.fulfilled]: (state, { payload }) => {
    //     state.email = payload.email;
    //     state.username = payload.name;
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     return state;
    //   },
    //   [loginUser.rejected]: (state, { payload }) => {
    //     console.log("payload", payload);
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.errorMessage = payload.message;
    //   },
    //   [loginUser.pending]: (state) => {
    //     state.isLoading = true;
    //   },
    //   [fetchUserBytoken.pending]: (state) => {
    //     state.isLoading = true;
    //   },
    //   [fetchUserBytoken.fulfilled]: (state, { payload }) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;

    //     state.email = payload.email;
    //     state.username = payload.name;
    //   },
    //   [fetchUserBytoken.rejected]: (state) => {
    //     console.log("fetchUserBytoken");
    //     state.isLoading = false;
    //     state.isError = true;
    //   },
  },
});

export const { setFilter, apiFilter, setSearch } = filterSlice.actions;

export const filterSelector = (state) => state.filter;

// export const signupUser = createAsyncThunk(
//   'users/signupUser',
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://mock-user-auth-server.herokuapp.com/api/v1/users',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('data', data);

//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return { ...data, username: name, email: email };
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'users/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://mock-user-auth-server.herokuapp.com/api/v1/auth',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email,
//             password,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('response', data);
//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const fetchUserBytoken = createAsyncThunk(
//   'users/fetchUserByToken',
//   async ({ token }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://mock-user-auth-server.herokuapp.com/api/v1/users',
//         {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Authorization: token,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       let data = await response.json();
//       console.log('data', data, response.status);

//       if (response.status === 200) {
//         return { ...data };
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );
