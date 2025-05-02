import marathonIcon from "../images/icons/marathon.png";
import halfMarathonIcon from "../images/icons/halfMarathon.png";
import tenKIcon from "../images/icons/10k.png";
import trailIcon from "../images/icons/trail.png";

import { shoes } from "./shoes.js";

export const categories = [
  {
    slug: "marathon",
    name: "Maratón",
    image: marathonIcon,
    intro: `
          Correr un maratón supone un gran desgaste físico: necesitas una zapatilla
          con amortiguación reactiva, buena estabilidad y peso contenido. Estas cinco
          opciones son las más valoradas por corredores de larga distancia.
        `,
    seo: {},
    shoes: shoes.marathon,
  },
  {
    slug: "half-marathon",
    name: "Media Maratón",
    image: halfMarathonIcon,
    description:
      "Zapatillas ideales para 21K: equilibrio perfecto entre velocidad y confort.",
    seo: {
      title: "Zapatillas para Media Maratón - Mi Running",
      description:
        "Las mejores zapatillas para media maratón: ligereza, amortiguación y rendimiento garantizado.",
      image: halfMarathonIcon,
    },
  },
  {
    slug: "10k",
    name: "10K",
    image: tenKIcon,
    description:
      "Zapatillas pensadas para distancias de 10 kilómetros. Perfectas para entrenos rápidos y competiciones.",
    seo: {
      title: "Zapatillas para 10K - Mi Running",
      description:
        "Nuestra selección de zapatillas para 10K: velocidad y respuesta inmediata.",
      image: tenKIcon,
    },
  },
  {
    slug: "trail",
    name: "Trail",
    image: trailIcon,
    description:
      "Zapatillas de trail running para terrenos técnicos y senderos. Sujeción y tracción en cualquier ruta.",
    seo: {
      title: "Zapatillas de Trail Running - Mi Running",
      description:
        "Top zapatillas de trail: agarre, durabilidad y protección para tus aventuras off-road.",
      image: trailIcon,
    },
  },
];
