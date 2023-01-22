const formHabits = document.querySelector(".form-habits")
const nlwSetup = new NLWSetup(formHabits)

const btnRegisterDay = document.querySelector(".btn-registerDay")

function createTempModal(text) {
  const div = document.createElement("div")
  div.innerText = text
  div.classList.add("tempModal")

  formHabits.appendChild(div)

  setTimeout(() => {
    div.innerText = ""
    div.classList.remove("tempModal")
    formHabits.removeChild(div)
  }, 5000)
}

function add() {
  const day = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(day)

  if (dayExists) {
    createTempModal("Dia existente")
    return
  }

  createTempModal("Adicionado com sucesso!")
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
