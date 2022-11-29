import { RESULTS_TABS } from "~~/constantes";

export interface UIState {
  selectedTab: string;
}

export const useUIStore = definePiniaStore("UI", {
  state: (): UIState => ({
    selectedTab: RESULTS_TABS[0],
  }),
  getters: {
    getSelectedTab: (state: UIState) => computed(() => state.selectedTab),
  },
  actions: {
    selectTab(tabValue: string) {
      this.selectedTab = tabValue;
    },
  },
});
