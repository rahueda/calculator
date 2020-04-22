const dataNumber = document.querySelectorAll('[data-number]')
const dataOperator = document.querySelectorAll('[data-operation]')
const allClear = document.querySelector('[data-allclear]')
const deleteNumber = document.querySelector('[data-delete]')
const equal = document.querySelector('[data-equal]')
const storageNum = document.querySelector('.storageNum')
const displayNum = document.querySelector('.displayNum')

const result = () => {
    showNumber()
    showOperator()
}

const showNumber = () => {
    dataNumber.forEach((num) => {
        num.addEventListener('click', () => {
            displayN = displayNum.innerText
            if(num.innerText == '.' && displayN.includes('.')) {return}
                display(num) 
        })
    })
}

const showOperator = () => {
    dataOperator.forEach((oper) => {
        oper.addEventListener('click', () => {
            storage(oper)
        })
    })
}

const display = (num) => {
    displayN = displayNum.innerText
        if(num!=NaN && displayN.length <= 12){
            displayNum.innerText = displayNum.innerText + num.innerText
        }
}

const storage = (oper) => {
    console.log(oper.innerText)
    if(displayNum.innerText=='' && (storageNum.innerText.includes('/') 
                                ||storageNum.innerText.includes('-') 
                                ||storageNum.innerText.includes('+') 
                                ||storageNum.innerText.includes('*')
                                )
    ){
        storageNu = storageNum.innerText
        storageNum.innerText = storageNu.toString().slice(0, -1) + oper.innerText 
    
    } else if(storageNum.innerText != ''&& (storageNum.innerText.includes('/') 
                                ||storageNum.innerText.includes('-') 
                                ||storageNum.innerText.includes('+') 
                                ||storageNum.innerText.includes('*'))
    ){
        displayN = displayNum.innerText
        storageN = storageNum.innerText
            const result = eval(storageN + displayN)
            storageNum.innerText = result + oper.innerText
            displayNum.innerText = ''
    
    } else if(displayNum.innerText == ''  && storageNum.innerText == ''){return
    
    } else if(storageNum.innerText == '') {
        storageNum.innerText = displayNum.innerText + oper.innerText
        displayNum.innerText = ''

    } else if(storageNum.innerText != '' && displayNum.innerText != '') {
        storageNum.innerText = ''
        storageNum.innerText = displayNum.innerText + oper.innerText
        displayNum.innerText = ''

    } else {
        storageNum.innerText = storageNum.innerText + oper.innerText
        displayNum.innerText = ''
    }
}

equal.addEventListener('click', () =>{
    if((storageNum.innerText.includes('/') 
        ||storageNum.innerText.includes('-') 
        ||storageNum.innerText.includes('+') 
        ||storageNum.innerText.includes('*'))
    ){
        displayN = displayNum.innerText
        storageN = storageNum.innerText
            let result = eval(storageN + displayN)
            storageNum.innerText = result
            displayNum.innerText = ''

    } else if (displayNum.innerText != ''){
        storageNum.innerText = displayNum.innerText
        displayNum.innerText = ''
    }
})

allClear.addEventListener('click', () => {
    displayNum.innerText = '';
    storageNum.innerText = '';
})

deleteNumber.addEventListener('click', () => {
    displayN = displayNum.innerText
    displayN = displayN.toString().slice(0, -1)
    displayNum.innerText = displayN
})

result()