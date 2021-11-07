import { getByRole, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactTestRenderer from "react-test-renderer";
import Robot from "./Robot";

describe("Given Robots component", () => {
  describe("When it's rendered", () => {
    test("Then it should match with de last snapshot", () => {
      const robot = {
        caracteristicas: {
          velocidad: 5,
          resistencia: 9,
          creacion: "1996-05-19T22:00:00.000Z",
        },
        _id: "61855ad154ce63991d588ddb",
        nombre: "Aire",
        imagen:
          "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/04/astro-robot-ps5-1920415.jpg?h=d1cb525d&itok=NpaKRK-Q",
      };

      const robotCard = ReactTestRenderer.create(
        <Robot infoRobot={robot} key={robot._id} />
      );

      expect(robotCard.toJSON()).toMatchSnapshot();
    });
  });
  describe("When click in button delete", () => {
    test("Then it should call clickDelete function", async () => {
      const clickDelete = jest.fn();
      screen.debug();
      const buttonDelete = await screen.findByRole("button");

      // buttonDelete.addEventListener("click", clickDelete);
      userEvent.click(buttonDelete);
      expect(clickDelete).toBeCalled();
    });
  });
});
