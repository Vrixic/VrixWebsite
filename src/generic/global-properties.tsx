
export const VP_ASPECT_RATIO = innerWidth / innerHeight; // Aspect ratio for the cards, used in CSS
export const GLOBAL_FONT_SCALE = Math.min(window.innerWidth, window.innerHeight);

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export interface RouteInitProps {
  navigate: NavigateFunction;
}

export interface Card {
  url: string;
  title: string;
  belowTitle: string;
  route: string;
}

export type CardDeckProps = {
  cards: Card[];
  routeProps: RouteInitProps;
};

export const MainPageCards: Card[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    title: "about",
    belowTitle: "me",
    route: "/about-me",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
    title: "resume",
    belowTitle: "",
    route: "/resume",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    title: "personal",
    belowTitle: "work",
    route: "/personal",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    title: "professional",
    belowTitle: "work",
    route: "/professional",
  },
];

export const ProfessionalPageCards: Card[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    title: "Meta",
    belowTitle: "Performance Tech Artist 5",
    route: "/meta",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
    title: "The Forge",
    belowTitle: "Graphics Engineer",
    route: "/theForge",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    title: "I3",
    belowTitle: "Software Engineer",
    route: "/i3",
  },
];

