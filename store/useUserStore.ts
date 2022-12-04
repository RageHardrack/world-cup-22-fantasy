export interface UserState {
  isLoggedIn: boolean;
  username?: string;
  accessToken?: string;
}

const state = (): UserState => ({
  isLoggedIn: false,
  username: undefined,
  accessToken: undefined,
});

export const useUserStore = definePiniaStore("WC22F_user", {
  state,
  getters: {
    getUsername: (state: UserState) => computed(() => state.username).value,
    getIsLoggedIn: (state: UserState) => computed(() => state.isLoggedIn).value,
  },
  actions: {
    setUser(username: string, accessToken: string) {
      this.isLoggedIn = true;
      this.username = username;
      this.accessToken = accessToken;
    },
    logout() {
      this.isLoggedIn = false;
      this.username = undefined;
      this.accessToken = undefined;
    },
  },
  persist: {
    storage: persistedState.cookies,
  },
});
