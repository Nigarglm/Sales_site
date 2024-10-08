// // src/store/formSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   I: '',
//   city: '',
//   area: '',
//   additionalInfo: '',
//   price: '',
//   region: '',
//   settlement: '',
//   images: '',
//   name: '',
//   email: '',
//   phone: '',
//   agent: false,
// };

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     setFormData: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//     resetFormData: () => initialState,
//   },
// });

// export const { setFormData, resetFormData } = formSlice.actions;
// export default formSlice.reducer;
