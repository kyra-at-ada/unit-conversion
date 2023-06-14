/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const calculateConversion = (amount, conversionRate) => {
    return (amount * conversionRate).toFixed(2)
}

const convertUnits = (unit1, unit2, amount, conversionRate) => {
    const toUnit2 = calculateConversion(amount, conversionRate)
    const oneToTwo = amount + " " + unit1 + " = " + toUnit2 + " " + unit2

    const invertedRate = (1 / conversionRate)
    const toUnit1 = calculateConversion(amount, invertedRate)
    const twoToOne = amount + " " + unit2 + " = " + toUnit1 + " " + unit1

    return oneToTwo + " | " + twoToOne

}


convertBtn = document.querySelector("#convert-btn")

convertBtn.addEventListener("click", function() {
    const amount = document.querySelector("#amount").value

    const metersFeetDesc = document.querySelector("#meters-feet-desc")
    metersFeetDesc.innerText = convertUnits("meters", "feet", amount, 3.281)

    const litersGallonsDesc = document.querySelector("#liters-gallons-desc")
    litersGallonsDesc.innerText = convertUnits("liters", "gallons", amount, 0.264)

    const kgLbDesc = document.querySelector("#kilograms-pounds-desc")
    kgLbDesc.innerText = convertUnits("kilograms", "pounds", amount, 2.204)
    

})