// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    notionSecret: process.env.NOTION_API_KEY,
    groupMatchesDB: process.env.GROUP_MATCHES_DATABASE_ID,
    octavosMatchesDB: process.env.OCTAVOS_MATCHES_DATABASE_ID,
    cuartosMatchesDB: process.env.CUARTOS_MATCHES_DATABASE_ID,
    semifinalMatchesDB: process.env.SEMIFINAL_MATCHES_DATABASE_ID,
    thirdPlaceMatchDB: process.env.THIRD_PLACE_MATCH_DATABASE_ID,
    finalMatchDB: process.env.FINAL_MATCH_DATABASE_ID,
    stadiumsDB: process.env.STADIUMS_DATABASE_ID,
    countriesDB: process.env.COUNTRIES_DATABASE_ID
  }
});
