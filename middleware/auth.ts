import { useUserStore } from "~~/store";

const userStore = useUserStore();

export default defineNuxtRouteMiddleware(() => {
  const user = useCookie("WC22F_user");

  // @ts-ignore
  if (!user?.value?.isLoggedIn) {
    userStore.logout();
    return navigateTo("/auth");
  }
});
