const wordPage = document.getElementById('wordPage')
const wordTip = document.getElementById('wordTip')
const letterPage = document.getElementById('letterPage')
const letterContainer = document.getElementById('letter-container')



const head = document.getElementById('head') 
const body = document.getElementById('body')
const armLeft = document.getElementById('armLeft')
const armRight = document.getElementById('armRight')
const legLeft = document.getElementById('legLeft')
const legRight = document.getElementById('legRight')

const dissappearGameConfig = document.getElementById('dissappearGameConfig')
const appearContentLetter = document.getElementById('appearContentLetter')
appearContentLetter.style.display = "none"

let wordRandomChosen; 
let tipRandomChosen

function addWordAlone() {
    const numberWord = Math.trunc(Math.random() * 6)
   
    const wordsRandoms= {

        0: {
            0: 'Fireman',1: 'doctor',2: 'baker',3: 'singer',4: 'designer', 5: 'gardener',

            getWordRandom() {
                const numberWord = Math.trunc(Math.random() * 6)
                return this[numberWord]
            },

            tip : "Professions"
        },
       
        1: {
            0: 'bakery',1: 'hospital',2: 'hospital', 3:'bank', 4:'rstaurant', 5:'church',

            getWordRandom() {
                const numberWord = Math.trunc(Math.random() * 6)
                return this[numberWord]
            },

            tip : "Places"
        },
       
        2: {
            0: 'bird',1: 'monkey', 2: 'cow', 3:'goat', 4:'lion',5:'penguin',

            getWordRandom() {
                const numberWord = Math.trunc(Math.random() * 6)
                return this[numberWord]
            },

            tip : "Animals"
        },

        3: {
            0: 'hamburguer',1:'pasta',2:'pizza',3:'bread',4:'bacon',5:'cheese' ,

            getWordRandom() {
                const numberWord = Math.trunc(Math.random() * 6)
                return this[numberWord]
            },

            tip : "Food"
        },

        4: {
            0: 'green',1:'blue',2:'pink',3:'black',4:'yellow',5:'purple',

            getWordRandom() {
                const numberWord = Math.trunc(Math.random() * 6)
                return this[numberWord]
            },

            tip : "Color"
        },

        5: {
            0: 'pencil',1:'knife',2:'wallet',3:'bottle',4:'notebook',5:'pillow',

            getWordRandom() {
                const numberWord = Math.trunc(Math.random() * 6)
                return this[numberWord]
            },

            tip : "Objects"
        },
      
         
        getClassWordRandom() {
            return this[numberWord].getWordRandom()
        },

        getTipRandom() {
            return this[numberWord].tip
        }

        
    }
    
    wordRandomChosen = wordsRandoms.getClassWordRandom()
    tipRandomChosen = wordsRandoms.getTipRandom()
    
    wordTip.style.display ="block"
    wordTip.innerHTML = `Dica: <Small>${tipRandomChosen}</small>`
    addWord()
}

let wordCorret = [];
let arrayWord;
function addWord() {

    
    
    dissappearGameConfig.style.display = "none"
    appearContentLetter.style.display = "block" 

    head.style.display = "none"
    body.style.display = "none" 
    armLeft.style.display = "none"
    armRight.style.display = "none"
    legLeft.style.display = "none"
    legRight.style.display = "none"

    wordRandomChosen? arrayWord = wordRandomChosen.split("") : arrayWord = (wordPage.value).split("")

    arrayWord.forEach( (e, i) => { 
        wordCorret[i] = `<div class="letter">&nbsp</div>`
    })


    addLetter()
}



function addLetter() {

    const letter = letterPage.value
    let hit;
    let arrayIndice = []

    arrayWord.forEach( (e, i) => {
        if (letter.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g , '') === e.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g , '')) {     
            hit = arrayWord[i]
            arrayIndice.push(i)
        }
    })
    
    const addLetterInIndiceCorrect = e =>  wordCorret[e] = ` <div class="letter">${hit}</div>`
    if(hit) arrayIndice.forEach(addLetterInIndiceCorrect) 
    
    if(letter && !hit) mistake()

    victory()
    letterContainer.innerHTML = wordCorret.join('')
    letterPage.value = ''
    letterPage.focus()
}

const popUp = document.getElementById('pop-up-container')
const resultGamePopup = document.getElementById('result-game-popup')
const resultWordPopup = document.getElementById('result-word-popup')
const wordCorretPopup = document.getElementById('word-corret-popup')

const error = []
function mistake() {
    error.push('erro')

    switch(error.length) {
        case 1: head.style.display = 'block' 
        break;
        case 2: body.style.display = 'block' 
        break;
        case 3: armLeft.style.display = 'block'
        break;
        case 4: armRight.style.display = 'block'
        break;
        case 5: legLeft.style.display = 'block' 
        break;
        case 6: legRight.style.display = 'block' 
                appearContentLetter.style.display = 'none'
                break;
            }
            
            if(error.length == 6) {
                
                setTimeout( () => {
                    document.body.style.background = "#f05454"
                    popUp.style.display="block"
                    resultGamePopup.innerHTML = "Fim de jogo :("
                    resultWordPopup.innerHTML = "Palavra correta"
                    wordCorretPopup.innerHTML = arrayWord.join('')
            }, 500)
        }
    }

function victory() {

    const extractingLetter = e => e.substring(21, e.length - 6)
    const wordCorretWithoutTag = wordCorret.map(extractingLetter)
    
    const compareArray = (e, i) => e === wordCorretWithoutTag[i] 
    const arraysIdentical = arrayWord.every(compareArray)

    if (arraysIdentical === true) {
        appearContentLetter.style.display = 'none'

        setTimeout( () => {
        popUp.style.display="block"
        resultGamePopup.innerHTML = "Você ganhou :)"
        resultWordPopup.innerHTML = "Você acertou a palavra"
        wordCorretPopup.innerHTML = arrayWord.join('')

        resultGamePopup.style.marginTop = "1.80rem"
        resultWordPopup.style.marginTop = "1rem"
        document.body.style.background = "#64dd17"
        },500)
    
    }
 
}


(function() { 
    const colors = {
        0: '#214252',1: '#388e3c', 2: '#1565c0',3: '#ffe05d',4: '#f67809',5: '#5e35b1',
        6: '#fbc02d',7: '#16697a',8: '#6a097d',9: '#00acc1',10: '#304ffe',11: '#9f6581',
        12: '#24b6da',13: '#616161',14: '#ee6f57',15: '#1f3c88', 16: '#070d59', 17: '#c62a88',
        18: '#0278ae', 19: '#f0a500', 20: '#d789d7', 21: '#9d65c9', 22: '#5d54a4', 23: '#00b7c2',
        24: '#fa26a0', 25: '#1b1b2f', 26: '#27496d', 27: '#035aa6', 28: '#323232', 29: '#414141',
        
        getColor() {
            const numberColor = Math.trunc(Math.random() * 15)
            return [this[numberColor]]
        }
    }
    document.body.style.background = colors.getColor()


    wordPage.addEventListener('keypress', e => {
        if (e.key == ' ') {
            e.preventDefault()
        }
    })
        
    letterPage.addEventListener('keypress', e => {
        const moreThanOneLetter = (letterPage.value).split("")

        if (moreThanOneLetter.length > 0) {
            e.preventDefault()
        }
    })
    
    wordPage.addEventListener("keyup", e => {
        if (e.keyCode === 13) addWord()
    })
    
    letterPage.addEventListener('keyup', e => {
        if (e.keyCode === 13) addLetter()
    })
})()
