/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const buttonEl = document.getElementById('convert-btn')

const lenghtEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

buttonEl.addEventListener('click',  () => {
  const inputValue = Number(inputEl.value)
  if(inputValue){
    convert(inputValue, 3.281, "meters", "feet", lenghtEl)
    convert(inputValue, 0.264, "liters", "gallons", volumeEl)
    convert(inputValue, 2.204, "Kilos", "pounds", massEl)
  }else{
    inputEl.value = ""
  }
})


function convert(input, constant, metric, imperial, element){
  const imperialValue = Math.round(input * constant * 1000) / 1000
  const metricValue = Math.round(input / constant * 1000) / 1000

  const output = `${input} ${metric} = ${imperialValue} ${imperial} | ${input} ${imperial} = ${metricValue} ${metric}`

  element.textContent = output
}