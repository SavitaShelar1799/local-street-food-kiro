async function getFood() {
const area = document.getElementById("area").value;
const time = document.getElementById("time").value;
const pref = document.getElementById("pref").value;


const res = await fetch("/recommend", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ area, time, preference: pref })
});


const data = await res.json();
document.getElementById("output").innerText = data.recommendation;
}
