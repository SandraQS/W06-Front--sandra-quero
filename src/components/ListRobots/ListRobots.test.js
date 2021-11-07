import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import ListRobots from "./ListRobots";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given ListRobots component", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should rendered a list of robots", async () => {
      const store = configureStore();

      render(
        <React.StrictMode>
          <Provider store={store}>
            <ListRobots />
          </Provider>
        </React.StrictMode>
      );

      const nameRobot = await screen.findByText("Aire");
      const srcImageRobot = await screen.findByRole("img", { name: "Aire" });
      const [feature1Robot] = await screen.findAllByText("Resistencia: 9");
      const [feature2Robot] = await screen.findAllByText("Resistencia: 9");
      const [feature3Robot] = await screen.findAllByText(
        "Fecha de creación: 20-4-1996"
      );

      await waitFor(() => {
        expect(nameRobot).toBeInTheDocument();
        expect(srcImageRobot).toBeInTheDocument();
        expect(feature1Robot).toBeInTheDocument();
        expect(feature2Robot).toBeInTheDocument();
        expect(feature3Robot).toBeInTheDocument();
      });
    });
  });
});
