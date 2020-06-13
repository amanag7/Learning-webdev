function calcbudget() {
	var budget = 2900;
	var savingsPriority = "low";

	var rent = 500;
	var utilities = 800;
	var newLaptop = 1200;

	var moneyLeft = budget - (rent + utilities);

	if(moneyLeft >= newLaptop) {
		buyLaptop = "Sure why not";
		document.getElementById("money").innerHTML = "Money left after buying said laptop: " + (moneyLeft-newLaptop);
	} else {
		buyLaptop = "Nah, you broke";
	}

	if(savingsPriority!=="high") {
		save = "Yeah, go for it!";
	} else {
		save = "Probably not";
	}

	document.getElementById("canyou").innerHTML = "Can you buy laptop?: " + buyLaptop;
	document.getElementById("shouldyou").innerHTML = "Should you buy laptop?: " + save;
	
}