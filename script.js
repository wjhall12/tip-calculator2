function calculateTip1() {
    const bill = parseFloat(document.getElementById("bill1").value);
    const percent = parseFloat(document.getElementById("tipPercent1").value);
    const people = parseInt(document.getElementById("people1").value);
    const round = document.getElementById("roundTip").checked;

    const validInputs = !isNaN(bill) && !isNaN(percent) && people > 0;
    const tipRaw = validInputs ? bill * (percent / 100) : 0;
    const tipTotal = round ? Math.round(tipRaw) : tipRaw;
    const totalBill = bill + tipTotal;
    const perPerson = validInputs ? totalBill / people : 0;

    document.getElementById("output1").textContent =
      validInputs ? `Tip: $${tipTotal.toFixed(2)}, Total Bill: $${totalBill.toFixed(2)}, Bill per person: $${perPerson.toFixed(2)}`
                  : "Please enter valid numbers for all fields.";
  }