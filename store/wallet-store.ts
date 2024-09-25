// import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";
// import { persist, createJSONStorage } from "zustand/middleware";

// interface Wallet {
//   accountAddress: string;
//   chainId: string;
// }

// interface WalletState {
//   wallet: Wallet;
//   isWalletConnected: boolean;
// }

// interface Actions {
//   updateWallet: (value: Wallet) => void;
//   setWalletConnected: (value: boolean) => void;
// }

// export const useWalletStore = create<WalletState & Actions>()(
//   persist(
//     immer((set) => ({
//       wallet: {
//         accountAddress: "",
//         chainId: "",
//       },
//       isWalletConnected: false, // Initialize with default value

//       updateWallet: (value: Wallet) =>
//         set((state) => {
//           console.log("walletVal", value);
//           state.wallet = value;
//         }),

//       setWalletConnected: (value: boolean) =>
//         set((state) => {
//           console.log("value", value);
//           state.isWalletConnected = value;
//         }),
//       // loginUser: (user: User) =>
//       //   set((state) => {
//       //     state.user = user;
//       //   }),
//     })),
//     {
//       name: "wallet-info",
//       storage: createJSONStorage(() => localStorage),
//       merge: (persistedState, currentState) => ({
//         ...currentState,
//         ...(persistedState as WalletState),
//       }),
//     },
//   ),
// );

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { Draft } from "immer";

interface WalletState {
  isWalletConnected: boolean | null;
  isRehydrated: boolean;
  isSupportedChain: boolean;
}

interface Actions {
  setRehydrated: () => void;
  setIsWalletConnected: (value: boolean) => void;
  setIsSupportedChain: (value: boolean) => void;
}

export const useWalletStore = create<WalletState & Actions>()(
  persist(
    immer((set) => ({
      isWalletConnected: false,
      isRehydrated: false,
      isSupportedChain: false,

      setRehydrated: () =>
        set((state: Draft<WalletState & Actions>) => {
          state.isRehydrated = true;
        }),

      setIsSupportedChain: (value: boolean) =>
        set((state: Draft<WalletState & Actions>) => {
          state.isSupportedChain = value;
        }),

      setIsWalletConnected: (value: boolean) =>
        set((state) => {
          state.isWalletConnected = value;
        }),
    })),
    {
      name: "wallet-info",
      storage: createJSONStorage(() => localStorage),
      // merge: (persistedState, currentState) => ({
      //   ...currentState,
      //   ...(persistedState as WalletState),
      // }),

      partialize: (state) => {
        return {
          isWalletConnected: state?.isWalletConnected,
          isSupportedChain: state?.isSupportedChain,
        };
      },

      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
          } else {
            state?.setRehydrated();
          }
        };
      },
    },
  ),
);
