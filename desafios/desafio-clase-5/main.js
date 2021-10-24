// mostrar celulares y caracteristicas
class Celular {
	constructor(color,peso,tamaño,rdc,ram,modelo){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
        this.modelo = modelo
	}
	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if (this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("el celular está apagado");
		}
	}
	tomarFoto(){
		alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		let info  = `
        <p style= 'margin-bottom: 5px;'>
        Modelo: <b>${this.modelo}</b></br>
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>
		Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
		</p>`;
        document.write(info);
	}
}
const celular1 = new Celular("rojo","150g","5'","hd","1GB","modelo uno");
console.log(celular1);
const celular2 = new Celular("negro","155g","5.4'","full hd","2GB", "modelo dos");
console.log(celular2);
const celular3 = new Celular("blanco","15046g","5.9'","full hd","2GB", "modelo tres");
console.log(celular3);
celular1.mobileInfo();
celular2.mobileInfo();
celular3.mobileInfo();
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();