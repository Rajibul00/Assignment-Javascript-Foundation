let firstColor = prompt('Please Enter the first color  choose between red or blue or yellow')
let secondColor = prompt('Please Enter the second  color  choose between yellow  or blue or red');
switch(true){
    case (firstColor=='red' && secondColor == 'blue'||firstColor=='blue' && secondColor == 'red'):
        console.log('purple');
       
        document.body.style.backgroundColor='purple'
        break;
        case (firstColor=='red' && secondColor == 'yellow'||firstColor=='yellow' && secondColor == 'red'):
            console.log('orange');
            document.body.style.backgroundColor='orange'
            break;
            case (firstColor=='blue' && secondColor == 'yellow'||firstColor=='yellow' && secondColor == 'blue'):
            console.log('green');
            document.body.style.backgroundColor='green'
            break;
            default :
            console.log("Invalid Color Combination");
}