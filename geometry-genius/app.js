const triangleElement = document.getElementById("triangle");
const rectangleElement = document.getElementById("rectangle");
const parallelogramElement = document.getElementById("parallelogram");
const rhombusElement = document.getElementById("rhombus");
const pentagonElement = document.getElementById("pentagon");

const calculateGeometry = (bInpElement, hInpElement,displayEleId, type) => {
  const baseInp = document.getElementById(bInpElement);
  const heightInp = document.getElementById(hInpElement);
  const displayArea = document.getElementById(displayEleId);

  const BaseValueText = baseInp.value;
  const heightValueText = heightInp.value;
  const base = parseFloat(BaseValueText);
  const height = parseFloat(heightValueText);

  console.log(displayArea);
  
  if (isNaN(base) || isNaN(height)) {
    return alert("Please enter valid numbers for both base and height.");
  }

  let area;
  switch (type) {
    case "triangle":
        area = 0.5 * base * height;
        displayArea.innerText = area;
        break;
    case "rectangle":
        area = base * height;
        displayArea.innerText = area;
        break;

    case "parallelogram":
        area = base * height;
        displayArea.innerText = area;
        break;

    case "rhombus":
        area = 0.5 * base * height;
        displayArea.innerText = area;
        break;

    case "pentagon":
        area = 0.5 * base * height;
        displayArea.innerText = area;
        break;

    case "ellipse":
        area = base * height;
        displayArea.innerText = area;
        break;

    default:
      return console.log("Invalid geometry type");
  }
  console.log(area);
};

triangleElement.addEventListener("click", () => calculateGeometry(
    "triangle-base","triangle-height",'triangle-area',"triangle"
));
rectangleElement.addEventListener("click", () => calculateGeometry(
    "rectangle-length","rectangle-length",'rectangle-area',"rectangle"
));

parallelogramElement.addEventListener("click", () => calculateGeometry(
    "parallelogram-base","parallelogram-height","parallelogram-area","parallelogram"
));

rhombusElement.addEventListener("click", () => calculateGeometry(
    "rhombus-first-diagonal","rhombus-second-diagonal","rhombus-area","rhombus"
));
pentagonElement.addEventListener("click", () => calculateGeometry(
    "pentagon-perimeter","pentagon-apothem","pentagon-area","pentagon"
));

