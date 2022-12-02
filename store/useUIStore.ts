import { RESULTS_TABS } from "~~/constantes";

export type authTab = "Iniciar Sesión" | "Registarse";
export interface UIState {
  selectedTab: string;
  selectedAuthTab: authTab;
  isLoggedIn: boolean;
  user?: {
    username?: string;
    accessToken?: string;
  };
}

const state = (): UIState => ({
  selectedTab: RESULTS_TABS[0],
  selectedAuthTab: "Iniciar Sesión",
  isLoggedIn: false,
  user: undefined,
});

export const useUIStore = definePiniaStore("UI", {
  state,
  getters: {
    getSelectedTab: (state: UIState) => computed(() => state.selectedTab),
    getSelectedAuthTab: (state: UIState) =>
      computed(() => state.selectedAuthTab),
    getUsername: (state: UIState) => computed(() => state.user?.username),
    getIsLoggedIn: (state: UIState) => computed(() => state.isLoggedIn),
  },
  actions: {
    selectTab(tabValue: string) {
      this.selectedTab = tabValue;
    },
    selectAuthTab(tabValue: authTab) {
      this.selectedAuthTab = tabValue;
    },
    setUser(username: string, accessToken: string) {
      this.isLoggedIn = true;
      this.user = {
        username,
        accessToken,
      };
    },
    logout() {
      this.isLoggedIn = false;
      this.user = {
        username: undefined,
        accessToken: undefined,
      };
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
