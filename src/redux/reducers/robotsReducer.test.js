import {
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";
import robotsReducer from "./robotsReducer";

describe("Given robotsReducer reducer", () => {
  describe("When it receives an array and action loadRobots", () => {
    test("Then it should return a new array of objects", () => {
      const arrayRobots = [
        {
          _id: "61855ad154ce63991d588ddb",
          nombre: "Aire",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
          caracteristicas: {
            velocidad: 5,
            resistencia: 9,
            creacion: "1996-05-19T22:00:00.000Z",
          },
        },
        {
          _id: "61857c0154ce63991d588ddc",
          nombre: "Oreo",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
          caracteristicas: {
            velocidad: 3,
            resistencia: 10,
            creacion: "1996-05-19T22:00:00.000Z",
          },
        },
      ];
      const action = loadRobotsAction(arrayRobots);
      const robots = [];

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toEqual(arrayRobots);
    });
  });

  describe("When it receives an array and action loadRobotById, with id", () => {
    test("Then it should return a new array with an object with the proper id", () => {
      const id = "61855ad154ce63991d588ddb";
      const action = loadRobotByIdAction(id);
      const robots = [
        {
          _id: "61855ad154ce63991d588ddb",
          nombre: "Aire",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
          caracteristicas: {
            velocidad: 5,
            resistencia: 9,
            creacion: "1996-05-19T22:00:00.000Z",
          },
        },
        {
          _id: "61857c0154ce63991d588ddc",
          nombre: "Oreo",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
          caracteristicas: {
            velocidad: 3,
            resistencia: 10,
            creacion: "1996-05-19T22:00:00.000Z",
          },
        },
      ];
      const objectExpect = [
        {
          _id: "61855ad154ce63991d588ddb",
          nombre: "Aire",
          imagen:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
          caracteristicas: {
            velocidad: 5,
            resistencia: 9,
            creacion: "1996-05-19T22:00:00.000Z",
          },
        },
      ];

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toEqual(objectExpect);
    });
  });

  describe("When it receives an array and action non-existent, with id", () => {
    test("Then it should return the same array", () => {
      const action = "non-existent";
      const robots = [];

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toEqual(robots);
    });
  });
});
