function buttonPressed(clickedButton){
    switch(clickedButton) {
        case 'c':
            document.getElementById("display").value = '';
          break;
        case 'back':
            var screenValue = document.getElementById("display").value
            document.getElementById("display").value = screenValue.slice(0, -1);
            break;
        case 'equals':
            operation(); 
            break;
        case '+':
            operation();
            document.getElementById("display").value += '+';
            break;
        case '-':
            operation();
            document.getElementById("display").value += '-';
            break;
        case 'x':
            operation();
            document.getElementById("display").value += 'x';
            break;
        case '/':
            operation();
            document.getElementById("display").value += '/';
            break;
        default:
            document.getElementById("display").value += clickedButton;
      }
}

function operation(){
    var screenValue = document.getElementById("display").value;
    if (screenValue.includes('+')){
        var values = screenValue.split('+');
        var result = parseFloat(values[0]) + parseFloat(values[1]);
        document.getElementById("display").value = result;
    }
    else if (screenValue.includes('-',1)){
        var values = screenValue.split('-');
        if (!values[0]) {
            values[0] = 0;
            var result = parseFloat(-values[1]) - parseFloat(values[2]);
            document.getElementById("display").value = result;
        }
        else{
        var result = parseFloat(values[0]) - parseFloat(values[1]);
        document.getElementById("display").value = result;
        }
    }
    else if (screenValue.includes('x')){
        var values = screenValue.split('x');
        var result = parseFloat(values[0]) * parseFloat(values[1]);
        document.getElementById("display").value = result;
    }
    else if (screenValue.includes('/')){
        var values = screenValue.split('/');
        var result = parseFloat(values[0]) / parseFloat(values[1]);
        document.getElementById("display").value = result;
    }
}