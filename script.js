const form = document.querySelector(".form-habits")
const nlwSetup = new NLWSetup(form)

const habits = document.querySelector(`.habits`)

const data = {
  run: ["01-01", "01-02", "01-03", "01-06"],
  water: ["01-01", "01-02", "01-03", "01-04"],
  food: ["01-01", "01-02"],
  gym: ["01-03", "01-04"],
}

nlwSetup.setData(data)
nlwSetup.load()
