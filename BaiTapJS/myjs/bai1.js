function isSoNguyenTo(x) {
    var dem=0;
    var i;
    if (x <=2 ) return 0;
    else {
        for (i=1; i <= x; i++)
            if (x%i == 0)
                dem++;
            if (dem  == 2 )
                return 1; else return 0;
    } 
    
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
function isSoNguyenTo2(x) {     /* Check SNT kể cả 2 */ 
    var dem=0;
    var i;
    
        for (i=1; i <= x; i++)
            if (x%i == 0)
                dem++;
            if (dem  == 2 )
                return 1; else return 0;
    
    
}
// function isSoHoanHao(num){
//     var s=0;
//     var i;
//     for (i=1; i<= num/2 ; i++)
//         if(num % i == 0)
//             s+=i;
//     if(s == num)
//         return 1; else return 0;
// }
function SoHoanHao(){
    
    var rs= "";
    var temp = 1; var x=1;
    var shh;
    while(temp <= 10 ){
        if (isSoNguyenTo2(x)){
            temp++;
            shh = Math.pow(2,x-1) * (Math.pow(2,x) -1);
            rs +=  shh+"<br>" ;
            x++;
            
        }
        else x++;
    }
    document.getElementById("resultSHH").innerHTML = rs;
    
}
