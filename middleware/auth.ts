import { useUserStore } from "~~/store";

const userStore = useUserStore();

export default defineNuxtRouteMiddleware(() => {
  const user = useCookie("WC22F_user");

  if (!user.value) {
    userStore.logout();
    return navigateTo("/auth");
  }
});
