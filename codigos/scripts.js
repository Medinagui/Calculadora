const numberButtons = document.querySelectorAll("[data-number]")
const operationButton = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

class Calcultator 
{
    constructor(previousOperandTextElement, currentOperandTextElement)
    {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    appendNumber(number) 
    {
        if (this.currentOperand.includes('.') && number == '.') return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

    clear()
    {
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
    }

    updateDisplay()
    {
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const calcultator = new Calcultator(previousOperandTextElement, currentOperandTextElement);

for (const numberButton of numberButtons)
{
    numberButton.addEventListener('click', () =>
    {
        calcultator.appendNumber(numberButton.innerText);
        calcultator.updateDisplay();
    })
}

allClearButton.addEventListener('click', () => 
{
    calcultator.clear();
    calcultator.updateDisplay();
}) 