const screen=document.querySelector('.screen')

const updateScreen=(num)=>{
	screen.value=num
}

const numbers=document.querySelectorAll(".num")

numbers.forEach((num)=>{
	num.addEventListener(("click"),(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})

let prevInput = '0'
let calculationOperator = ' '
let currentInput = '0'

const inputNumber = (num)=>{
	if (currentInput === '0'){
		currentInput = num
	} else{
		currentInput += num
	}
}

const operators=document.querySelectorAll(".operator")
operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value)
	})
})

const inputOperator=(operator)=>{
	prevInput=currentInput
	calculationOperator = operator
	currentInput = '0'
}

const equalSign = document.querySelector('.equal')
equalSign.addEventListener("click",()=>{
	calculate()
	updateScreen(currentInput)
})

const calculate=()=>{
	let result = 0
	switch(calculationOperator) {
		case '+':
			result=parseInt(prevInput) + parseInt(currentInput)
			break
		case '-':
			result=parseInt(prevInput) - parseInt(currentInput)
			break
		case '*':
			result=parseInt(prevInput) * parseInt(currentInput)
			break
		case '/':
			result=parseInt(prevInput) / parseInt(currentInput)
			break
		default:
			return
	}
	currentInput=result.toString()
	calculationOperator = ' '
}