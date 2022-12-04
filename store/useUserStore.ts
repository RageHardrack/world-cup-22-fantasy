
export interface UserState {
  isLoggedIn: boolean;
  user?: {
    username?: string;
    accessToken?: string;
  };
}

const state = (): UserState => ({
  isLoggedIn: false,
  user: undefined,
});

export const useUserStore = definePiniaStore("WC22F_user", {
  state,
  getters: {
    getUsername: (state: UserState) => computed(() => state.user?.username),
    getIsLoggedIn: (state: UserState) => computed(() => state.isLoggedIn),
  },
  actions: {
    setUser(username: string, accessToken: string) {
      this.isLoggedIn = true;
      this.user = {
        username,
        accessToken,
      };
    },
    logout() {
      this.isLoggedIn = false;
      this.user = undefined;
    },
  },
  persist: {
    storage: persistedState.cookies,
  },
});
