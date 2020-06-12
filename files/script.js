var budget = 2900;
var savingsPriority = "low";

var rent = 500;
var utilities = 800;
var newLaptop = 1200;

var moneyLeft = budget - (rent + utilities);
var buyLaptop = moneyLeft >= newLaptop;
var save = savingsPriority!=="high";

document.getElementById("canyou").innerHTML = "Can you buy laptop?: " + buyLaptop;
document.getElementById("shouldyou").innerHTML = "Should you buy laptop?: " + save;
document.getElementById("money").innerHTML = "Money left after buying said laptop: " + (moneyLeft-newLaptop);