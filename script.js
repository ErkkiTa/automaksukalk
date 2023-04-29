function calculateTax() {
    var co2, fuelType, fuelFactor, co2Factor, tax;
    
    // Get CO2 emissions
    if (document.getElementById("co2").value) {
      co2 = document.getElementById("co2").value;
    } else {
      alert("Sisesta auto CO2 näit!");
      return;
    }
    
    // Get fuel type and factor
    fuelType = document.getElementById("kutusetuup").value;
    if (fuelType === "diisel") {
      fuelFactor = 0.9;
    } else if (fuelType === "bensiin") {
      fuelFactor = 0.6;
    } else if (fuelType === "gaas") {
      fuelFactor = 0.4;
    } else {
      alert("Vali kütuse tüüp!");
      return;
    }
    

    if (co2 <= 90) {
      co2Factor = 0.5;
    } else {
      co2Factor = 0.5 + (co2 - 90) * 0.01;
    }
    

    tax = co2 * fuelFactor * co2Factor;

    document.getElementById("result").innerHTML = "Aastane automaks: " + tax.toFixed(2) + " eurot";
  }