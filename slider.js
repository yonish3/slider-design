

const FACT = function(n){
    if (n == 1 || n == 0) return 1
    let num = n
    for (let i = 1; i < n; i++) {
        num = num*i
    }
    if(n == 0){
        alert('n=0')
    }
    return num
}

const calculateChances = function(){
    
    var QA = $('#slider1').val()
    var QC = $('#slider2').val()
    var QB = $('#slider3').val()
    var QE = $('#slider4').val()

    var chancesToWin = ((FACT(QA)/(FACT(QA-QC)*FACT(QC)))/(FACT(QB)/(FACT(QC)*FACT(QB-QC))))/QE
    chancesToWin = Math.round(chancesToWin)
    if(chancesToWin < 0 ){
        chancesToWin = 0
    }

    $('#chancesToWin').text(chancesToWin)

}


$(function(){
calculateChances()

  var slider1 = document.getElementById("slider1");
  var output1 = document.getElementById("slider1-value");

  slider1.oninput = function() {
    output1.innerHTML = this.value;
    $('#slider1-value').text($('#slider1').val());
    calculateChances()
  }

  var slider2 = document.getElementById("slider2");
  var output2 = document.getElementById("slider2-value");
  output2.innerHTML = slider2.value;

  slider2.oninput = function() {
    output2.innerHTML = this.value;
    $('#slider2-value').text($('#slider2').val());
    calculateChances()
  }


  var slider3 = document.getElementById("slider3");
  var output3 = document.getElementById("slider3-value");
  output3.innerHTML = slider3.value;

  slider3.oninput = function() {
    output3.innerHTML = this.value;
    $('#slider3-value').text($('#slider3').val());
    calculateChances()
  }


  var slider4 = document.getElementById("slider4");
  var output4 = document.getElementById("slider4-value");
  output4.innerHTML = slider4.value;

  slider4.oninput = function() {
    output4.innerHTML = this.value;
    $('#slider4-value').text($('#slider4').val());
    calculateChances()
  }


});


