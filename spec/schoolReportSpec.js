describe('SCHOOL REPORT', function(){
    let string=''
    let result;
    it('should return REd:1 when Red is the string', function(){
        string = "Red"
        result = checkResult(string)
        expect(result).toEqual('Red: 1 Green: 0 Amber: 0 Other: 0')
    })
    it('should return Green:1 when Green is the string', function(){
        string = "Green"
        result = checkResult(string)
        expect(result).toEqual('Red: 0 Green: 1 Amber: 0 Other: 0')
    })
    it('should return Amber:1 when Amber is the string', function(){
        string = "Amber"
        result = checkResult(string)
        expect(result).toEqual('Red: 0 Green: 0 Amber: 1 Other: 0')
    })
    it('should return Red 2 and the others 0', function(){
        string = 'Red,Red'
        result = checkResult(string)
        expect(result).toEqual('Red: 2 Green: 0 Amber: 0 Other: 0')
    })
    it('should return Green 2 and the others 0', function(){
        string = 'Green,Green'
        result = checkResult(string)
        expect(result).toEqual('Red: 0 Green: 2 Amber: 0 Other: 0')
    })
    it('should return Amber 2 and the others 0', function(){
        string = 'Amber,Amber'
        result = checkResult(string)
        expect(result).toEqual('Red: 0 Green: 0 Amber: 2 Other: 0')
    })
    it('should return correct result when one typo with new group', function(){
        string = 'Amber,Amber,amber'
        result = checkResult(string)
        expect(result).toEqual('Red: 0 Green: 0 Amber: 2 Other: 1')
    })
    it('should return correct result when one typo with new group', function(){
        string = 'green,red,amber'
        result = checkResult(string)
        expect(result).toEqual('Red: 0 Green: 0 Amber: 0 Other: 3')
    })
})