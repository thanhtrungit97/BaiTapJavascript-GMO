function XemMua(){
    var t = parseInt(document.getElementById("inputThang").value);
    var rs;
    switch(t){
        case 1: case 2: case 3: 
            rs = "Mùa Xuân";
            break;
        case 4: case 5: case 6: 
            rs = "Mùa Hạ";
            break;
        case 7: case 8: case 9: 
            rs = "Mùa Hạ";
            break;
        case 10: case 11: case 12: 
            rs = "Mùa Đông";
            break;
    }  
    document.getElementById("resultMua").innerHTML = rs
}