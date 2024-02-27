// store.js
import { create } from "zustand";

const useFormStore = create((set) => ({
  name: "",
  email: "",
  image: null, // Use null to represent no image initially
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setImage: (image) => set({ image }),
}));

export default useFormStore;
