import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  rating: {
    Safety: 0,
    Communication: 0
  },
  Traits: [],
  recommand: null,
  totalRating: 0,
  formReveal: false,
  popupReveal: false,
  message: "",
  setRating: (name, rate) => {
    set((state) => ({
      ...state,
      rating: {
        ...state.rating,
        [name]: rate
      }
    }));
  },
  setRecommand: (name) => {
    set((state) => ({
      ...state,
      recommand: name
    }));
  },
  addTraits: (value) => {
    set((state) => ({
      ...state,
      Traits: state.Traits.includes(value)
        ? state.Traits.filter((option) => option !== value)
        : [...state.Traits, value]
    }));
  },
  setFormReveal: () => {
    set((state) => ({
      ...state,
      formReveal: !state.formReveal
    }));
  },
  setPopupReveal: () => {
    set((state) => ({
      ...state,
      popupReveal: !state.popupReveal
    }));
  },
  setMessage: (message) => {
    set((state) => ({
      ...state,
      message
    }));
  }
});

store = devtools(store);
store = persist(store, { name: "review" });

const useStore = create(store);

export default useStore;
