// event listener on generate password button

var generate = document.getElementById('generate')


var numbers = '0123456789'
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var special = '`~!@#$%^&*=-_<>?/+='


function getRandomCharacter(charset){
    const randIndex = Math.floor(Math.random() * charset.length);
    return charset[randIndex];
}

generate.addEventListener('click', function(){
    var Length = parseInt(prompt("Password Length - Select 8 to 128 Characters"));
    var isLower = confirm("Character Types - Lowercase; Yes or No")
    var isUpper = confirm("Character Types - Uppercase; Yes or No")
    var isNum = confirm("Character Types - Numeric; Yes or No")
    var isSpec = confirm("Character Types - Special Characters; Yes or No")


    let charset = "";


    if(isLower){
        charset = charset + lower
    }

    if(isUpper){
        charset = charset + upper;
    }

    if(isNum){
        charset = charset + numbers
    }

    if (isSpec){
        charset = charset + special;
    }

    let password = "";
    // randomy get n characters based on Length
    for (let index = 0; index < Length; index++) {
        const randomChar = getRandomCharacter(charset); 
        password = password + randomChar;
    }

    const textbox = document.getElementById('password');
    textbox.textContent = password;

})

