const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const uppercaseLetters = characters.slice(0, 26);
const lowercaseLetters = characters.slice(26, 52);
const numbers = characters.slice(52, 62);
// Not used:
const symbols = characters.slice(62);

/* 
    Calls the createPassword() function twice to create the two required passwords, and adds them to the elements with IDs 'password1'
    and 'password2'
*/
function getPasswords(){
    let password = "";
    for (let i=0; i<2; i++){
        password = createPassword();
        if(i===0){
            document.getElementById("password1").textContent = password;
        }else if(i===1){
            document.getElementById("password2").textContent = password;
        }
    }
}

// Creates a password based on user input, or a 15 character long password as default
function createPassword(){
    let charCheck = [false, false, false, false];
    let password = "";
    let pwdLength = document.getElementById("pwd-length").value;

    // Makes sure pwdLength is a number of at least 15!!!!
    if(pwdLength < 15){
        pwdLength = 15;
        console.log("Passwords can only be numbers, and minimum 15 characters long!: " + pwdLength);
    };

    // Makes sure pwdLength is converted to an integer if it is a float
    pwdLength = parseInt(pwdLength);
    console.log("Password length is no longer a float: " + pwdLength);

    let char = 0;
    while(charCheck.includes(false)){
        /*
        Clears out the password and charCheck variables if the password does not contain at least one uppercase letter, one lowercase 
        letter, one number, and one symbol.
        */
        password = "";
        charCheck = [false, false, false, false];

        // Creates the 15 character long password by appending to the password variable 15 times
        for (let i=0; i<pwdLength; i++){
            password += characters[Math.floor(Math.random()*characters.length)];
            char = password.charAt(i);
            if(uppercaseLetters.includes(char)){
                charCheck[0] = true;
            }else if(lowercaseLetters.includes(char)){
                charCheck[1] = true;
            }else if(numbers.includes(char)){
                charCheck[2] = true;
            }else{
                charCheck[3] = true;
            };
        };
    };
    return password;
};

// Copies the password when the user clicks on it, and alerts the user about it
function copyPassword(pwd){
    let copiedPassword = document.getElementById(pwd).textContent;
    //Checks that the password is not empty, and that it does not contain spaces
    if (copiedPassword !== "" && !copiedPassword.includes(" ")){
        navigator.clipboard.writeText(copiedPassword);
        alert("Copied the password: " + copiedPassword);
    };
};

// Shows the tooltip when hovering over either of the passwords
function showTooltip(tooltip){
    if (document.getElementById("password1").textContent !== ""){
        document.getElementById(tooltip).style.visibility = "visible";
    }
}

// Hides the tooltip when hovering over either of the passwords
function hideTooltip(tooltip){
    document.getElementById(tooltip).style.visibility = "hidden";
}
