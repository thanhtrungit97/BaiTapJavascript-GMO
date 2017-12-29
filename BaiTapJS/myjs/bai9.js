function ValidatorF(){
    var name = document.getElementById("inputName").value;
    var pwd = document.getElementById("inputPwd").value;
    var money =document.getElementById("inputMoney").value;
    
    var rs ="";

    var patternName = /[0-9]/;
    if (name == "" || pwd == "" || money == "")
        rs = "Vui lòng nhập đầu đủ thông tin <br>";
    else {
        if (patternName.test(name))
            rs = "Tên không được chứa số <br>";
        else
            if (name.length < 3 || name.length > 20)
                rs += "Độ dài Name phải từ 3-20 kí tự <br>";
            else
                if (pwd.length < 8 || pwd.length > 20)
                    rs+= "Độ dài password phải từ 8-20 ký tự <br>";
                else
                    if(isNaN(money))
                        rs += "Money phải là 1 số";
                    else 
                        if (/./.test(money))
                            rs += "Money Không nhập số thực";
                        else rs = "Input OK!";
        
    }
    
    
    
    document.getElementById("resultBai9").innerHTML =rs+money;
}