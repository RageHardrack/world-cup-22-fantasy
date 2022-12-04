export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("WC22F_user");

  if (!user.value) {
    return navigateTo("/auth");
  }
});
