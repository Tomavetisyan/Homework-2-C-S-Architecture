var employees=[];
var random = [];
var count =0;
function getForm(){
    if(duplicateName()){
        alert("duplicate name");
    }else{
        employees.push({
            "Name": getName(),
            "Department":document.getElementById("department").value,
            "EmployeeID": RNG8(),
            "Hire Date": getDate(), 
        });
        count++;
        document.getElementById('target-id').innerHTML = JSON.stringify(employees);
    }
}
function RNG8(){  
    var unique=false;
    while(!unique){
        var temp = Math.floor(Math.random()*10000000);
        unique=uniqueNumber(temp);
    }
    return temp;
}
function getDate(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return (m + "/" + d + "/" + y);
}
function duplicateName(){
    // for (var i = 0; i< employees.length; i++) {
    //     if (employees[i].Name == (document.getElementById("fname").value + " " + document.getElementById("lname").value)) {
    //         return true;
    //     }
    // }
    return false;
}
function uniqueNumber(temp){
    for (var i = 0; i< employees.length; i++) {
        if (employees[i].EmployeeID == (temp)) {
            return false;
        }
    }
    return true;
}
function getName(){
    return (document.getElementById("fname").value + " " + document.getElementById("lname").value);
}
