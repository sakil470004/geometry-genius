function getInputFieldValueById(fieldId) {
    const inputElement = document.getElementById(fieldId)
    const inputValue = parseFloat(inputElement.value);
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
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        alert('Please give Valid input')
        return false;
    }
    return true;
}