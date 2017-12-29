function isSoNguyenTo(num) {
    var dem=0;
    var i;
    if (num <2 ) return 0;
    var temp = Math.sqrt(num);
    
    for (i=2; i <= temp; i++)
        if (num%i == 0)
            return 0;
    return 1;
    
    
}
function SoNguyenTo(){
    var num = document.getElementById("inputSNT").value;
    var rl= "";
    var temp = 0; var x=1;
    while(temp < num){
        if (isSoNguyenTo(x)){
            temp++;
            rl += " " + x;
            x++;
        }
        else x++;
    }
    document.getElementById("resultSNT").innerHTML = rl;
}
// Check số hoàn hảo
function SoHoanHao(){
    
    var rs= "";
    var temp = 1; var x=1;
    var shh;
    while(temp <= 8 ){
        if (isSoNguyenTo(Math.pow(2,x) -1)){
            if (isSoNguyenTo(x)){
                temp++;
                shh = Math.pow(2,x-1) * (Math.pow(2,x) -1);
                rs +=  shh+"<br>" ;
                x++;
                
            }
            else x++;
        }
        else x++;
    }
    document.getElementById("resultSHH").innerHTML = rs;
    
}
