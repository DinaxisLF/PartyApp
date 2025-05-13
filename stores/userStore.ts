// stores/userStore.ts
import { create } from "zustand";

type UserType = "regular" | "artist";

interface UserStore {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userType: "regular",
  setUserType: (type) => set({ userType: type }),
}));
