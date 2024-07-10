import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
};

// 1. redux toolkie 예제 적용 전
// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

// 2. redux toolkie 예제 적용 후
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getAllProduct(state, action) {
      // 이걸 어떻게 호출하지?
      // 언제까지 ...state 할거야... 생략
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

console.log("productSlice : ", productSlice);

export const productActions = productSlice.actions;

export default productSlice.reducer; // reducer를 store에 전달하기 위해 export
