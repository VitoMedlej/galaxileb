"use client"

// import { useContext } from "react";
import { loadState, saveState, pushState } from "../Utils/LocalstorageFn";
import { ICartItem } from "../Types/Types";
import { useCartContext } from "@/context/Contexts";

const useCart = () => {
    const {cartOpen, setCartOpen} = useCartContext();
    const incrementQty = (_id:string,newValue ?: number,productselectedSize?:string, productselectedColor?:any) => {
       
        const state = loadState('xMZ31DZ1') || [];
        let foundIndex = state.findIndex((value:ICartItem) => value._id === _id);
        let selectedItem = state[foundIndex];
        
        if (foundIndex !== -1 && selectedItem) {
            if (newValue) {selectedItem.qty = newValue;
            }
            else {
                selectedItem.qty = selectedItem.qty + 1;
            }
            if (productselectedSize) {

                selectedItem.productselectedSize = productselectedSize;
            }
            if (productselectedColor) {
                selectedItem.productselectedColor = productselectedColor;
            }
            state[foundIndex] = selectedItem
            
           saveState('xMZ31DZ1', state)           
           return true
       }
       return false;
    }
    const addToCart = (selectedQuantity = 1,_id:string,product:{title:string,category?:string,img:string,_id:string,price:number,productselectedSize?:string,productselectedColor?:any},open=true,replaceOld = false) => {
       
        
        //1- get the cart from localstorage
         const increased =        incrementQty(_id,selectedQuantity,product?.productselectedSize,product?.productselectedColor)       
        if (increased ) {
            setCartOpen(open ? true : false)
            return
        }
        
            //if we do not have the item in cart, insert it
        pushState('xMZ31DZ1',
        {qty:selectedQuantity || 1,img:product.img,
            category:product?.category || 'Collection',
            title:product.title
        ,_id:product._id,price:product.price,productselectedSize: product?.productselectedSize || '',productselectedColor:product?.productselectedColor})
        if(open) {
             
            setCartOpen(true)
        }
    }
    return {addToCart,incrementQty}
}

export default useCart