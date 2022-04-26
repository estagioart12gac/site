//JavaScript	
	
function converter_graus() {
	var graus = document.getElementById("graus").value;
	
	//CALCULA MINUTOS
	var minutos = graus * 60;
	
	//CALCULA SEGUNDOS
	var segundos = graus * 3600;
	
	//CALCULA MILESIMOS
	var milesimos = graus * 17.77777777778;
	
	//RESPONDE NA TELA
	document.getElementById("graus").value = graus;
	document.getElementById("minutos").value = minutos;
	document.getElementById("segundos").value = segundos;
	document.getElementById("milesimos").value = milesimos;
	
}

function converter_minutos() {
	var minutos = document.getElementById("minutos").value;
	
	//CALCULA GRAUS
	var graus = minutos * 0.01666666666667;
	
	//CALCULA SEGUNDOS
	var segundos = minutos * 60;
	
	//CALCULA MILESIMOS
	var milesimos = minutos * 0.2962962962963;
	
	//RESPONDE NA TELA
	document.getElementById("graus").value = graus;
	document.getElementById("minutos").value = minutos;
	document.getElementById("segundos").value = segundos;
	document.getElementById("milesimos").value = milesimos;
}

function converter_segundos() {
	var segundos = document.getElementById("segundos").value;
	
	//CALCULA GRAUS
	var graus = segundos * 0.0002777777777778;
	
	//CALCULA MINUTOS
	var minutos = segundos * 0.01666666666667;
	
	//CALCULA MILESIMOS
	var milesimos = segundos * 0.004938271604938;
	
	//RESPONDE NA TELA
	document.getElementById("graus").value = graus;
	document.getElementById("minutos").value = minutos;
	document.getElementById("segundos").value = segundos;
	document.getElementById("milesimos").value = milesimos;
}

function converter_milesimos() {
	var milesimos = document.getElementById("milesimos").value;
	
	//CALCULA GRAUS
	var graus = milesimos * 0.05625;
	
	//CALCULA MINUTOS
	var minutos = milesimos * 3.375;
	
	//CALCULA SEGUNDOS
	var segundos = milesimos * 202.5;
	
	//RESPONDE NA TELA
	document.getElementById("graus").value = graus;
	document.getElementById("minutos").value = minutos;
	document.getElementById("segundos").value = segundos;
	document.getElementById("milesimos").value = milesimos;
}

function limpar() {
	document.getElementById("graus").value = "";
	document.getElementById("minutos").value = "";
	document.getElementById("segundos").value = "";
	document.getElementById("milesimos").value = "";
}
