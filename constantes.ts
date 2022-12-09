export const FOOTER_LINKS = {
  selene: "https://behance.com",
  daniel: "https://dan-website-nuxt3.vercel.app/",
};

export const RESULTS_TABS = [
  "Fase de Grupos",
  "Octavos",
  "Cuartos",
  "Semifinal",
  "3° y 4° Puesto",
  "Final",
];

export const FILTER_FANTASY_OPTIONS = [
  "Todos",
  "Portero",
  "Central",
  "Mediocampo",
  "Delantero",
];

export interface PositionFantasy {
  Portero: string;
  Central: string;
  Mediocampo: string;
  Delantero: string;
}

export const POSITION_FANTASY = {
  Portero: "P",
  Central: "C",
  Mediocampo: "M",
  Delantero: "D",
};
