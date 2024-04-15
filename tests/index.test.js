import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  let myPromise = new Promise(function(resolve,reject){
    resolve("Varun") 
  })
  myPromise.then((data) =>{
    console.log(data)
  })

  const video = {
    play() {
      return true;
    },
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
  });

  // it("Adding Number", () => {
  //   render(<Home />);
  //   const num1Input = screen.getByTestId("num1")[0];
  //   const num2Input = screen.getByTestId("num2");
  //   const addButton = screen.getByTestId("add");
  //   const resultArea = screen.getByTestId("result");
  //   fireEvent.change(num1Input, { target: { value: 5 } });
  //   fireEvent.change(num2Input, { target: { value: 8 } });
  //   fireEvent.click(addButton)
  //   expect(resultArea).toHaveTextContent("13");
  // });

  it("Text to be in document",() => {
    render(<Home />)
    const add = screen.getByText("Add");
    expect(add).toBeInTheDocument();
    const subtract = screen.getByText("Subtract");
    expect(subtract).toBeInTheDocument();
    const multiply = screen.getByText("Multiply");
    expect(multiply).toBeInTheDocument();
  })
  it("Testing role",() => {
    render(<Home />)
    const button = screen.getByRole("button",{
      name:"Multiply"
    })
    expect(button).toBeInTheDocument();
  });
  // it("There is no I in Subtract",() => {
  //   const subtractText = screen.getByText("Subtract");
  //   expect(subtractText).toMatch(/i/)
  // })

  it("Testing array data",() => {
    expect(shoppingList).toContain("milk")
  });

  it("testing promise data",() => {
    return myPromise.then(data => {
      expect(data).toBe("Varun")
    })
  })

  it("testing async and await",async () => {
    const data = await myPromise;
    expect(data).toBe("Varun")
    })

    it("testing using spy method",() => {
      const spy = jest.spyOn(video,"play")
      const isPlaying = video.play();
      expect(spy).toHaveBeenCalled();
      expect(isPlaying).toBe(true)
    }) 

});