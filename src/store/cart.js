import { defineStore } from "pinia";
import { useProdsStore } from "./products";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      products: [],
      total: 0,
      qty: 0,
    };
  },
  getters: {
    cartTotal: (state) => state.total.toFixed(2),
  },
  actions: {
    addProductToCart(payload) {
      const prods = useProdsStore();
      const productData = prods.products.find((prod) => prod.id === payload.id);
      const productInCartIndex = this.products.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.products[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.products.push(newItem);
      }
      this.qty++;
      this.total += productData.price;
    },

    removeProductFromCart(payload) {
      const prodId = payload.productId;
      const productInCartIndex = this.products.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.products[productInCartIndex];
      this.items.splice(productInCartIndex, 1);
      this.qty -= prodData.qty;
      this.total -= prodData.price * prodData.qty;
    },
  },
});
