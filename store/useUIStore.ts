import { RESULTS_TABS } from "~~/constantes";

export type authTab = "Iniciar Sesión" | "Registarse";
export interface UIState {
  selectedTab: string;
  selectedAuthTab: authTab;
}

const state = (): UIState => ({
  selectedTab: RESULTS_TABS[0],
  selectedAuthTab: "Iniciar Sesión",
});

export const useUIStore = definePiniaStore("UI", {
  state,
  getters: {
    getSelectedTab: (state: UIState) => computed(() => state.selectedTab),
    getSelectedAuthTab: (state: UIState) => computed(() => state.selectedAuthTab),
  },
  actions: {
    selectTab(tabValue: string) {
      this.selectedTab = tabValue;
    },
    selectAuthTab(tabValue: authTab) {
      this.selectedAuthTab = tabValue;
    },
  },
});
