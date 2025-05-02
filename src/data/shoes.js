// src/data/shoes.js
import pegasusImg from "../images/shoes/pegasus39.png";

export const shoes = {
  marathon: [
    {
      name: "Nike Air Zoom Pegasus 39",
      url: "https://amzn.to/4cYPzXz",
      img: pegasusImg,
      description:
        "Amortiguación equilibrada y ajuste versátil, ideal para largas sesiones.",
      rating: 4.5,
    },
    {
      name: "Adidas Ultraboost 22",
      url: "https://www.amazon.es/dp/B09GQG7Z2N?tag=TU-AFFILIATE-TAG",
      img: pegasusImg,
      description:
        "Rebote espectacular y gran comodidad, aunque algo más pesada.",
      rating: 4.7,
    },
    {
      name: "Asics Gel-Nimbus 24",
      url: "https://www.amazon.es/dp/B08T2DWB62?tag=TU-AFFILIATE-TAG",
      img: pegasusImg,
      description:
        "Amortiguación Gel legendaria, perfecta para entrenamientos largos.",
      rating: 4.6,
    },
    {
      name: "Brooks Ghost 15",
      url: "https://www.amazon.es/dp/B0BM9TB8YP?tag=TU-AFFILIATE-TAG",
      img: pegasusImg,
      description: "Suavidad y ligereza, gran opción para quemar kilómetros.",
      rating: 4.4,
    },
    {
      name: "New Balance Fresh Foam 1080v12",
      url: "https://www.amazon.es/dp/B0BCLJ8YHC?tag=TU-AFFILIATE-TAG",
      img: pegasusImg,
      description: "Muy estable y con excelente retorno de energía.",
      rating: 4.5,
    },
  ],
  "half-marathon": [
    /* mismo array u otro con description/rating */
  ],
  "10k": [
    /* … */
  ],
  trail: [
    /* … */
  ],
};
