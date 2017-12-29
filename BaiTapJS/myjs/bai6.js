function HinhTron(){
    var r= document.getElementById("inputR").value;
    var cv = 2*Math.PI*r;
    var dt = Math.PI * Math.pow(r,2);
    document.getElementById("resultHT").innerHTML = "Chu vi hình tròn: " + cv.toFixed(2) 
    + " , Diện tích hình tròn: " + dt.toFixed(2);
}