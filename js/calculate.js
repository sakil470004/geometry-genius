function getInputFieldValueById(fieldId) {
    const inputElement = document.getElementById(fieldId)
    const inputValue = inputElement.value;
    inputElement.value = '';
    return inputValue;
}
// element create in this function and add to the area calculation Side
function displayResult(elementName, area) {
    // area calculation container
    const areaCalculation = document.getElementById('area-calculation');
    const newLi = document.createElement('li');
    newLi.innerHTML =
        `<div class="flex justify-between gap-2 items-center my-4 text-sm">
            <span>${elementName}</span>
            <span><span>${area}</span> cm <sup>2</sup></span>
            <button class="bg-sky-500 text-white font-bold px-4 py-1 rounded-lg">Convert to m
                <sup>2</sup></button>
        </div>`
    areaCalculation.appendChild(newLi);
}
function isInputValid(number1, number2) {
    if (number1 < 0 || number2 < 0) {
        alert('Please give Valid input')
        return false;
    }
    if (typeof number1 !== 'number' || number2 !== 'number') {
        alert('Please give Valid input')
        return false;
    }
    return true;
}
// triangle
document.getElementById('calculate-triangle').addEventListener('click', function () {
    const triangleValueB = getInputFieldValueById('triangle-b');
    const triangleValueH = getInputFieldValueById('triangle-h');
    if (!isInputValid(triangleValueB, triangleValueH)) {
        return;
    }
    const areaOfTriangle = (0.5 * triangleValueB * triangleValueH).toFixed(2);
    displayResult('Triangle', areaOfTriangle)
})
//rectangle
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const rectangleValueW = getInputFieldValueById('rectangle-w');
    const rectangleValueL = getInputFieldValueById('rectangle-l');
    const areaOfRectangle = (rectangleValueW * rectangleValueL).toFixed(2);
    displayResult('Rectangle', areaOfRectangle)
})
//parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const parallelogramValueB = getInputFieldValueById('parallelogram-b');
    const parallelogramValueH = getInputFieldValueById('parallelogram-h');
    const areaOfParallelogram = (parallelogramValueB * parallelogramValueH).toFixed(2);
    displayResult('Parallelogram', areaOfParallelogram);
})
//rhombus 
document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const rhombusValueD1 = getInputFieldValueById('rhombus-d1');
    const rhombusValueD2 = getInputFieldValueById('rhombus-d2');
    const areaOfRhombus = (0.5 * rhombusValueD1 * rhombusValueD2).toFixed(2);
    displayResult('Rhombus', areaOfRhombus);
})
//pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const pentagonValueP = getInputFieldValueById('pentagon-p');
    const pentagonValueB = getInputFieldValueById('pentagon-b');
    const areaOfPentagon = (0.5 * pentagonValueB * pentagonValueP).toFixed(2);
    displayResult('Pentagon', areaOfPentagon);
})
//ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const ellipseValueA = getInputFieldValueById('ellipse-a');
    const ellipseValueB = getInputFieldValueById('ellipse-b');
    const areaOfEllipse = (3.14 * ellipseValueA * ellipseValueB).toFixed(2);
    displayResult('Pentagon', areaOfEllipse);

})
