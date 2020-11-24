
function illOn() {
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "ilKey 1s";
	ArtGalStyle.backgroundImage ="url('Art/monkey4.jpg')"

}

function anOn() {
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "anKey 1s";
	ArtGalStyle.backgroundImage ="url('Art/monkey3.jpg')";
	ArtGalStyle.color = "black";

}

function gdOn(){
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "gdKey 1s";
	ArtGalStyle.backgroundImage ="url('Art/monkey2.jpg')"
}

function Off(lastPic){
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "offKey 1s";
	document.getElementById("ArtGal").style.backgroundImage = "url('Art/monkey1.jpg')";
	ArtGalStyle.color = "white";
}
