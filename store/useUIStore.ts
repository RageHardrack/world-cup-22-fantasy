import { RESULTS_TABS } from "~~/constantes";

export type authTab = "Iniciar Sesión" | "Registarse";
export interface UIState {
  selectedTab: string;
  selectedAuthTab: authTab;
}

const state = (): UIState => ({
  selectedTab: useCookie("selectedTab").value || RESULTS_TABS[0],
  selectedAuthTab:
    (useCookie("selectedAuthTab").value as authTab) || "Iniciar Sesión",
});

export const useUIStore = definePiniaStore("WC22F_UI", {
  state,
  getters: {
    getSelectedTab: (state: UIState) => computed(() => state.selectedTab),
    getSelectedAuthTab: (state: UIState) =>
      computed(() => state.selectedAuthTab),
  },
  actions: {
    selectTab(tabValue: string) {
      this.selectedTab = tabValue;
    },
    selectAuthTab(tabValue: authTab) {
      this.selectedAuthTab = tabValue;
    },
  },
  persist: {
    storage: persistedState.cookies,
  },
});
