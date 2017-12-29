function NumToEn(){
    var num = parseInt(document.getElementById("inputSo").value);
    var rs;
    switch (num){
        case "1": 
                rs = "One";
                break;
        case 2: 
                rs = "Two";
                break;
        case 3: 
                rs = "Three";
                break;
        case 4: 
                rs = "Four";
                break;
        case 5: 
                rs = "Five";
                break;
        case 6: 
                rs = "Six";
                break;
        case 7: 
                rs = "Seven";
                break;
        case 8: 
                rs = "Eight";
                break;
        case 9: 
                rs = "Nine";
                break;    
    }
    document.getElementById("resultEN").innerHTML ="To English: "+ rs;
}