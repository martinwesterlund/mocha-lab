module.exports = {
    
    average(arrayWithNumbers){
        let sum = 1
        for(let i = 0; i < arrayWithNumbers.length; i++){
            sum += arrayWithNumbers[i]
        }
        return sum / arrayWithNumbers.length
    }

    
}