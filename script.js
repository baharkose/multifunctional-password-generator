//* INPUTS
const displayResult = document.getElementById("display-result");

//* FORM ELEMENTS
        // BUTTONS
const createBtn = document.querySelector(".create");
const refreshBtn = document.querySelector(".refresh")
const copyBtn = document.querySelector(".copy")

//* CHECKBOX
const numberCheckbox = document.getElementById("number")
const symbolCheckbox = document.getElementById("symbol")

//* LISTS FOR PASSWORDS
const symbols = "!@#$%^&*()\\_+~|}{[]:;?><,./-=";
const numbers = "0123456789"; 
const alphabets = "abcdefghijklmnopqrstuvwxyz";

//* ELEMENT AREAS
const range = document.querySelector(".form-range")
const randomReload = document.querySelector(".random-reload-copy")
const subElements = document.querySelector(".length-numbers-symbols")


//* VARIABLES

        // FOR FORM OPTION SELECT
let selectedOption
        // FOR FORM RANGE SELECT
let defaultRange = Number(range.value);
let selectedValue = 24; // get as default 24
        // CHECKBOX DEFAULT STATEMENTS
let isClickedSymbol = false;
let isClickedNumber = false;


//* CLICK EVENTS
        // refresh botton is clicked
randomReload.addEventListener("click",(e)=>{
        getSelectedOption()
})

createBtn.addEventListener("click", () => {
        console.log("is clicked");
        getSelectedOption()
      
        if(Number(selectedOption.value) === 1){
                createPassword();      
        }
        else{
                showCheckBox()
                isClickedSymbol;
                isClickedNumber;

                let password = [];
                let choice;
                let rastgeleIndex;
                while ((password.length < 7)) {
                        choice = numbers;
                        if (Math.round(Math.random())) {
                        choice = choice.toUpperCase();
                        }
                        rastgeleIndex = Math.floor(Math.random() * choice.length);
                            password.push(choice[rastgeleIndex]);
                }

                displayResult.textContent = password.join('');
        }
        
});

refreshBtn.addEventListener("click", () => {
        createPassword();
})



// DOM LISTENING..
document.addEventListener("DOMContentLoaded", function () {
        let defaultRange = Number(range.value);
        console.log(defaultRange);
        const rangeInput = document.getElementById("form-range");
                // get the range input 
        rangeInput.addEventListener("input", function () {
                selectedValue = rangeInput.value;
                console.log(selectedValue);

                });
});


 // COPY
 
 copyBtn.addEventListener("click", ()=>{
        $(".copy").notify("Copied","success"
        );
        navigator.clipboard.writeText(displayResult.innerText)
        
      });



// *******         FUNCTIONS          ********

// CHECKBOX FUNCTION
function showCheckBox(){
    const symbolCheckbox = document.getElementById("symbol")
    const numberCheckbox = document.getElementById("number")
    isClickedSymbol = symbolCheckbox.checked;
    isClickedNumber = numberCheckbox.checked;
}

showCheckBox()

// SELECTED OPTION FUNCTION

function getSelectedOption(){

        let selectElement = document.getElementById("form-select");

        selectedOption = selectElement.options[selectElement.selectedIndex];
        console.log(selectedOption);

        if(Number(selectedOption.value) === 1){
                subElements.style.display="block";
        }
        else{
                subElements.style.display="none";
        }

}


// PASSWORD CREATING

function createPassword () {
                showCheckBox()
                isClickedSymbol;
                isClickedNumber;

                let password = [];
                let choice;
                let randomChoice;
                let rastgeleIndex;

        if(isClickedSymbol && !isClickedNumber){
                while ((password.length < selectedValue)) {
                        randomChoice = Math.floor(Math.random() * 2);
                        if (randomChoice === 0) {
                                choice = symbols;
                        } 
                         else {
                                choice = alphabets;
                                if (Math.round(Math.random())) {
                                    choice = choice.toUpperCase();
                                }
                        }
                        rastgeleIndex = Math.floor(Math.random() * choice.length);
                        password.push(choice[rastgeleIndex]);
                } 
        }            
        else if(!isClickedSymbol && isClickedNumber){
                        while ((password.length < selectedValue)) {
                                randomChoice = Math.floor(Math.random() * 2);
                       
                                if (randomChoice === 0 ) {
                                        choice = numbers;
                        
                                } else {
                                        choice = alphabets;
                                        if (Math.round(Math.random())) {
                                        choice = choice.toUpperCase();
                                        }
                                }
                                rastgeleIndex = Math.floor(Math.random() * choice.length);
                                password.push(choice[rastgeleIndex]);
                        }    
        }
        else if(!isClickedSymbol && !isClickedNumber){
                while ((password.length < selectedValue)) {
                        choice = alphabets;
                        if (Math.round(Math.random())) {
                        choice = choice.toUpperCase();
                        }
                        rastgeleIndex = Math.floor(Math.random() * choice.length);
                            password.push(choice[rastgeleIndex]);
                }

        }
        else{
                
                while ((password.length < selectedValue)) {
                        randomChoice = Math.floor(Math.random() * 3); 
                        if (randomChoice === 0) {
                                choice = symbols;
                        } else if (randomChoice === 1) {
                                choice = numbers;
                                
                        } else {
                                choice = alphabets;
                                if (Math.round(Math.random())) {
                                    choice = choice.toUpperCase();
                                }
                        }

                        rastgeleIndex = Math.floor(Math.random() * choice.length);
                        password.push(choice[rastgeleIndex]);
                
                 }
        }
                    console.log(password);
                    displayResult.textContent = password.join('');




        }                 



       

