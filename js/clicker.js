scoreID = document.querySelector("#score p");
multiplicatorID = document.querySelector("#multiplicator p");
autoclicID = document.querySelector("#autoclic p");
buttonClic = document.querySelector("#buttonClic");
buttonMult = document.querySelector("#buttonMult");
buttonAutoclic = document.querySelector("#buttonAutoclic");
clicID = document.querySelector("#clic p");
buttonClic2 = document.querySelector("#buttonClic2");

// Default values
score = 0;
countMultiplicator = 1;
countAutoclic = 0;
priceMultiplicator = 10;
priceAutoclic = 20;
clic = 0;

//show
function showScore() {
	scoreID.innerHTML = "Score: " + score;
}

function showMultiplicator() {
	multiplicatorID.innerHTML = "Next multiplicator price: " + priceMultiplicator;
	buttonMult.innerHTML = "Multiplicator x" + countMultiplicator;
}

function showAutoclic() {
	autoclicID.innerHTML = "Next autoclic price: " + priceAutoclic;
	buttonAutoclic.innerHTML = "Autoclic x" + countAutoclic;
}

function showClic() {
    clicID.innerHTML = "clic: " + totalscore;
}

//
function incrementScore() {
	score += countMultiplicator;
	showScore() ;
}


function autoclicScore() {
	score += countAutoclic;
	showScore() ;
}

function incrementClic() {
    clic += countClic;
    showClic();
}

//
function incrementMultiplicator() {
	if (score >= priceMultiplicator) {
		score -= priceMultiplicator;
		countMultiplicator += 1;
		multiplicatorPrice();
		showScore();
		showMultiplicator();
	}
	else {
		alert("You more point " + priceMultiplicator);
	}	
}


function multiplicatorPrice() {
	priceMultiplicator *= 2;
}

//
function incrementAutoclic() {
	if (score >= priceAutoclic) {
		score -= priceAutoclic;
		countAutoclic += 1;
		autoclicPrice();
		showScore();
		showAutoclic();
	}
	else {
		alert("You need at least " + priceAutoclic);
	}	
}

function autoclicPrice() {
	priceAutoclic *= 2;
}




setInterval(autoclicScore, 500) ;
showScore();
showMultiplicator();
showAutoclic();
buttonClic.onclick = incrementScore;
buttonMult.onclick = incrementMultiplicator;
buttonAutoclic.onclick = incrementAutoclic;