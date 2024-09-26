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
      isSupportedChain: true,

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
