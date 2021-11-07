import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API_ROBOTS, async (req, res, ctx) => {
    const response = res(
      ctx.json([
        {
          caracteristicas: {
            velocidad: 5,
            resistencia: 9,
            creacion: "1996-05-19T22:00:00.000Z",
          },
          _id: "61855ad154ce63991d588ddb",
          nombre: "Aire",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
        },
        {
          caracteristicas: {
            velocidad: 3,
            resistencia: 10,
            creacion: "1996-05-19T22:00:00.000Z",
          },
          _id: "61857c0154ce63991d588ddc",
          nombre: "Oreo",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
        },
        {
          caracteristicas: {
            velocidad: 5,
            resistencia: 9,
            creacion: "1996-05-19T22:00:00.000Z",
          },
          _id: "61858db7ac133f67ed347cae",
          nombre: "Kovu",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
          __v: 0,
        },
      ])
    );
    return response;
  }),
];
