function TinhNS(){
    var ns = document.getElementById("inputNS").value;
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("resultNS").innerHTML = n - ns + " Tuổi";
}