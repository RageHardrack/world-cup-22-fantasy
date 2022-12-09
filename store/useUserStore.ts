export interface UserState {
  isLoggedIn: boolean;
  username?: string;
  accessToken?: string;
  formacion?: string[];
  jugadores?: string[];
}

const state = (): UserState => ({
  isLoggedIn: false,
  username: undefined,
  accessToken: undefined,
  formacion: [],
  jugadores: [],
});

export const useUserStore = definePiniaStore("WC22F_user", {
  state,
  getters: {
    getUsername: (state: UserState) => computed(() => state.username).value,
    getIsLoggedIn: (state: UserState) => computed(() => state.isLoggedIn).value,
  },
  actions: {
    setUser(username: string, accessToken: string, formacion: string[] = [], jugadores: string[] = []) {
      this.isLoggedIn = true;
      this.username = username;
      this.accessToken = accessToken;
      this.formacion = formacion;
      this.jugadores = jugadores
    },
    logout() {
      this.isLoggedIn = false;
      this.username = undefined;
      this.accessToken = undefined;
      this.formacion = undefined;
      this.jugadores = undefined
    },
  },
  persist: {
    storage: persistedState.cookies,
  },
});
