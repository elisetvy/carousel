import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders correct element", function() {
  const { container } = render(
    <Card
      caption="testing"
      src="test1.com"
      currNum={1}
      totalNum={3}
    />
  );
  const img = container.querySelector("img")

  expect(img.getAttribute("src")).toContain("test1.com");
});

it("renders without crashing", function() {
  render(<Card caption="testing" src="test1.com" currNum={1} totalNum={3}/> )
});

it("matches snapshot", function() {
  const { container } = render(<Card caption="testing" src="test1.com" currNum={1} totalNum={3}/>);
  expect(container).toMatchSnapshot();
})