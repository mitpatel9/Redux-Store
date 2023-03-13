import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES= Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
})

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data:[],
    status:STATUSES.IDLE,
  },
//   reducers: {
//    setProduct: (state, action) => {
//       state.data= action.payload
//     },
//     setStatus:(state, action)=>{
//         state.status= action.payload
//     },

//   },
  extraReducers:(builder)=>{
    builder.addCase(featchProduct.pending,(state,action)=>{
        state.status=STATUSES.LOADING
    }).addCase(featchProduct.fulfilled,(state,action)=>{
        state.data=action.payload
        state.status=STATUSES.IDLE
    }).addCase(featchProduct.rejected,(state,action)=>{
        state.status=STATUSES.ERROR
    })
    },
});

export const {setProduct ,setStatus} = productSlice.actions;
export default productSlice.reducer;


//thunk
//first method
///products/featch ----identifire
export const featchProduct=createAsyncThunk("products/featch", async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
     const data= await res.json();
     return data;
});

//second method
// export function featchProduct(){
//  return async function featchProductThunk(dispatch,getState){
//     dispatch(setStatus(STATUSES.LOADING))
//     try{
//         const res = await fetch("https://fakestoreapi.com/products")
//         const data= await res.json()
//         dispatch(setProduct(data));
//         dispatch(setStatus(STATUSES.IDLE))
//     }catch(error){
//         console.log(error)
//         dispatch(setStatus(STATUSES.ERROR))
//     }
//  }
// }