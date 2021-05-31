var inputs = [];

function getParagraph1() {

    for (var i = 1 ; i<= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" +i).value);
    }
    inputs.join(". ");
document.getElementById("show1").innerHTML =  inputs.join(". ");

}

function getParagraph2() {
    
    for (var i = 1 ; i<= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" +i).value);
    }
    inputs.join(". ");
document.getElementById("show2").innerHTML =  inputs.join(". ");

}
