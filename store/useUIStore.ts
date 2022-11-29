import { RESULTS_TABS } from "~~/constantes";

export interface UIState {
  selectedTab: string;
}

const state = (): UIState => ({
  selectedTab: RESULTS_TABS[0],
});

export const useUIStore = definePiniaStore("UI", {
  state,
  getters: {
    getSelectedTab: (state: UIState) => computed(() => state.selectedTab),
  },
  actions: {
    selectTab(tabValue: string) {
      this.selectedTab = tabValue;
    },
  },
});
