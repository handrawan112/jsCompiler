function run(y){
if(y.value.indexOf("alert")!=-1||y.value.indexOf("prompt")!=-1||y.value.indexOf("confirm")!=-1){
if(y.value.indexOf("(")!=-1&&y.value.indexOf(")")!=-1&&y.value.indexOf(";")!=-1){
document.getElementById("hasil").src="out.html?code="+encodeURIComponent(y.value);
}
}else{
document.getElementById("hasil").src="out.html?code="+encodeURIComponent(y.value);
}
}
