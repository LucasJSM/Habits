const form = document.querySelector(".form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-03", "01-06"],
  water: ["01-01", "01-02", "01-03", "01-04"],
  food: ["01-01", "01-02"],
  gym: ["01-01", "01-04"],
  sleep: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
}

nlwSetup.setData(data)
nlwSetup.load()
