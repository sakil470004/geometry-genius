function getInputFieldValueById(fieldId) {
    const inputElement = document.getElementById(fieldId)
    const inputValue = inputElement.value;
    return inputValue;
}

document.getElementById('calculate-triangle').addEventListener('click', function () {
    const triangleValueB = getInputFieldValueById('triangle-b');
    const triangleValueH = getInputFieldValueById('triangle-h');
    const areaOfTriangle = 0.5 * triangleValueB * triangleValueH;
    console.log(areaOfTriangle)
    // area calculation container
    const areaCalculation = document.getElementById('area-calculation');
    const newLi = document.createElement('li');
    newLi.innerHTML =
        `
            <div class="flex justify-between items-center my-4">
            <span>Triangle</span>
            <span><span>${areaOfTriangle}</span> cm <sup>2</sup></span>
            <button class="text-sm bg-sky-500 text-white font-bold px-8 py-2 rounded-lg">Convert to m
                <sup>2</sup></button>
            </div>
        `
        areaCalculation.appendChild(newLi);
})