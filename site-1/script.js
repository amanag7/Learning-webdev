function calcbudget() {
	var budget = parseInt(document.getElementById("budget").value);
	var rent = parseInt(document.getElementById("rent").value);
	var utilities = parseInt(document.getElementById("utilities").value);
	var newItem = parseInt(document.getElementById("price").value);
	var itemDesc = document.getElementById("item").value;
	var savingsPriority="";

	var priority = document.getElementsByName("save");
	for(var i=0;i<priority.length;i++) {
		if(priority[i].checked)
			savingsPriority = priority[i].value;
	}

	var moneyLeft = budget - (rent + utilities);
	var buyItem = "";
	var save = "";

	if(moneyLeft >= newItem) {
		buyItem = "Sure...";
		document.getElementById("money").innerHTML = "Money left after buying said item: " + (moneyLeft-newItem);
	} else {
		buyItem = "Nah, you broke";
		document.getElementById("money").innerHTML = "";
	}

	if(savingsPriority!=="high" && moneyLeft>=newItem) {
		save = "Yeah, go for it!";
	} else {
		save = "Probably not";
	}

	document.getElementById("canyou").innerHTML = "Can you buy " + itemDesc + "?: " + buyItem;
	document.getElementById("shouldyou").innerHTML = "Should you buy " + itemDesc + "?: " + save;
}

var reset = function() {
	document.getElementById("budget").value="";
	document.getElementById("rent").value="";
	document.getElementById("utilities").value="";
	document.getElementById("item").value="";
	document.getElementById("price").value="";
	document.getElementById("canyou").innerHTML="";
	document.getElementById("shouldyou").innerHTML="";
	document.getElementById("money").innerHTML="";
	clearRads();

}

function clearRads(){
	var radList = document.getElementsByName("save");

	for(var i=0;i<radList.length;i++) {
		if(radList[i].checked)
			document.getElementById(radList[i].id).checked=false;
	}
}