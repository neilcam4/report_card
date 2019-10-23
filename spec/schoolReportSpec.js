describe('SCHOOL REPORT', function(){
    let string=''
    let result;
    it('should return REd:1 when Red is the string', function(){
        string = "Red"
        result = checkResult(string)
        expect(result).toEqual('Red: 1')
    })
    it('should return Green:1 when Green is the string', function(){
        string = "Green"
        result = checkResult(string)
        expect(result).toEqual('Green: 1')
    })
    it('should return Amber:1 when Amber is the string', function(){
        string = "Amber"
        result = checkResult(string)
        expect(result).toEqual('Amber: 1')
    })
})