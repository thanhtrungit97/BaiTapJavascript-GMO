function TinhBMI(){
    var cn = document.getElementById("inputCN").value;
    var cc = document.getElementById("inputCC").value /100;
    var rs = cn/ (Math.pow(cc,2));
    document.getElementById("resultBMI").innerHTML = rs.toFixed(2);
}