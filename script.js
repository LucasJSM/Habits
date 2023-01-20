const formHabits = document.querySelector(".form-habits")
const nlwSetup = new NLWSetup(formHabits)

const btnRegisterDay = document.querySelector(".btn-registerDay")

function add() {
  const day = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(day)

  if (dayExists) {
    alert(`${day} - Dia existente`)
  }

  nlwSetup.addDay(day)
}

function saveData() {
  let data = JSON.stringify(nlwSetup.data)
  localStorage.setItem("@habits", data)
}

btnRegisterDay.addEventListener("click", add)
formHabits.addEventListener("change", saveData)

const data = JSON.parse(localStorage.getItem("@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
