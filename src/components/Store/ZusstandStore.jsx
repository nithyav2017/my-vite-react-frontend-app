import React from 'react'
import create from 'zustand'

const useStore = create((set) => ({
   cart: [],
   addProduct: () =>  (product) => set((state) => ({cart: [...state.cart, product]})),
   clearCart: () => set({ cart: [] })}));

export default Store