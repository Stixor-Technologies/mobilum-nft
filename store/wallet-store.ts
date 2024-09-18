import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

interface Wallet {
  accountAddress: string;
  chainId: string;
}

interface WalletState {
  wallet: Wallet;
  isWalletConnected: boolean; // New state added
}

interface Actions {
  updateWallet: (value: Wallet) => void;
  setWalletConnected: (value: boolean) => void;

  // loginUser: (user: User) => void;
}

export const useWalletStore = create<WalletState & Actions>()(
  persist(
    immer((set) => ({
      wallet: {
        accountAddress: "",
        chainId: "",
      },
      isWalletConnected: false, // Initialize with default value

      updateWallet: (value: Wallet) =>
        set((state) => {
          console.log("walletVal", value);
          state.wallet = value;
        }),

      setWalletConnected: (value: boolean) =>
        set((state) => {
          console.log("value", value);
          state.isWalletConnected = value;
        }),
      // loginUser: (user: User) =>
      //   set((state) => {
      //     state.user = user;
      //   }),
    })),
    {
      name: "wallet-info",
      storage: createJSONStorage(() => localStorage),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState as WalletState),
      }),
    },
  ),
);
