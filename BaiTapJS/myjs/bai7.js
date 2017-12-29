function QuaySo(){
    var num = document.getElementById("inputNum").value;
    var num_rand = Math.floor((Math.random() * 20));
    var rs;
    document.getElementById("smm").innerHTML = "Số may mắn: " +num_rand;
    if (num == num_rand) 
        rs = "Bạn đoán chính xác";
    else 
        rs ="Tạch rồi!!!";
    document.getElementById("resultQS").innerHTML = rs;
}