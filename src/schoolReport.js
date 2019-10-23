function checkResult(string){
    let newArray = string.split(",")
    let countAmber = 0
    let countGreen = 0
    let countRed = 0
    let countOther = 0
    newArray.forEach(function(item){
        if (item === 'Red'){
            countRed++
        } else if (item === 'Green'){
            countGreen ++
        } else if (item === 'Amber'){
           countAmber++
        } else {
            countOther++
        }

    })
    return `Red: ${countRed} Green: ${countGreen} Amber: ${countAmber} Other: ${countOther}`
    
    
}