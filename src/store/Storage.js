import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartshop") ? JSON.parse(localStorage.getItem("cartshop")) : [ ]
  
// JSON.parse(localStorage.getItem("carts")) || []
  // items: [{}]
  // cartItem:[{ }]
// ]

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart(state, action) {
      const { productId, quantity, favourite } = action.payload
      const idcheck =(state).findIndex(item => item.productId === productId)
      if(idcheck >= 0){
        state[idcheck].quantity+=quantity
      }else{
        state.push({ productId, quantity,favourite })
      }
      localStorage.setItem("cartshop", JSON.stringify(state))
    },
    removeItem(state,action){
      const { productId, quantity } = action.payload
      const idcheck =(state).findIndex(item => item.productId === productId)
      if(idcheck > 0){
        state[idcheck].quantity=quantity
      }else{
        state.filter(item => item.productId !== productId)
      }
      localStorage.setItem("cartshop", JSON.stringify(state))
    },
    changeQuantity(state,action){
        const {productId,quantity} = action.payload;
        const indexProductId = (state).findIndex(item => item.productId === productId);
        if(quantity >0 ){
            state[indexProductId].quantity = quantity
        }else{
            // delete state.items[indexProductId];
            state= ( state).filter(item=>item.productId !== productId  )
        }
        localStorage.setItem("cartshop",JSON.stringify(state))
    },
    favouriteToggle(state){
      if(state.statusTab === false){
        state.statusTab = true
    }else{
        state.statusTab = false
    }
    }

  }

})

export const { addtoCart,removeItem,changeQuantity,addtofavourite,favouriteToggle } = cartSlice.actions;
export default cartSlice.reducer;