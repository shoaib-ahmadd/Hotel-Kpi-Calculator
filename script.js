const totalRoomsInput = document.getElementById("totalRooms");
const roomsSoldInput = document.getElementById("roomsSold");
const totalRevenueInput = document.getElementById("totalRevenue");

const occupancyEl = document.getElementById("occupancy");
const adrEl = document.getElementById("adr");
const revparEl = document.getElementById("revpar");

function formatCurrency(value) {
  return isNaN(value) ? "N/A" : `$${value.toFixed(2)}`;
}

function formatPercentage(value) {
  return isNaN(value) ? "N/A" : `${value.toFixed(2)}%`;
}

function calculateKPIs() {
  const totalRooms = parseFloat(totalRoomsInput.value);
  const roomsSold = parseFloat(roomsSoldInput.value);
  const totalRevenue = parseFloat(totalRevenueInput.value);

  let occupancy = "N/A";
  let adr = "N/A";
  let revpar = "N/A";

  if (totalRooms > 0 && roomsSold >= 0) {
    occupancy = (roomsSold / totalRooms) * 100;
  }

  if (roomsSold > 0) {
    adr = totalRevenue / roomsSold;
  }

  if (totalRooms > 0) {
    revpar = totalRevenue / totalRooms;
  }

  occupancyEl.textContent = typeof occupancy === "number" ? formatPercentage(occupancy) : occupancy;
  adrEl.textContent = typeof adr === "number" ? formatCurrency(adr) : adr;
  revparEl.textContent = typeof revpar === "number" ? formatCurrency(revpar) : revpar;
}

// Update on every input change
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", calculateKPIs);
});
