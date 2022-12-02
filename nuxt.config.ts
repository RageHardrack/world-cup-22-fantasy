// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    [
      "@pinia/nuxt",
      { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
    ],
  ],

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    notionSecret: process.env.NOTION_API_KEY,
    groupMatchesDB: process.env.GROUP_MATCHES_DATABASE_ID,
    octavosMatchesDB: process.env.OCTAVOS_MATCHES_DATABASE_ID,
    cuartosMatchesDB: process.env.CUARTOS_MATCHES_DATABASE_ID,
    semifinalMatchesDB: process.env.SEMIFINAL_MATCHES_DATABASE_ID,
    thirdPlaceMatchDB: process.env.THIRD_PLACE_MATCH_DATABASE_ID,
    finalMatchDB: process.env.FINAL_MATCH_DATABASE_ID,
    stadiumsDB: process.env.STADIUMS_DATABASE_ID,
    countriesDB: process.env.COUNTRIES_DATABASE_ID,
    usersDB: process.env.USER_DATABASE_ID,
    playersDB: process.env.PLAYERS_DATABASE_ID,
    formationsDB: process.env.FORMATIONS_DATABASE_ID,
    jwtSecret: process.env.JWT_SECRET_KEY
  },
});
