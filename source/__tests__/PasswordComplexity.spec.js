const { calculateComplexity, PasswordComplexityValues } = require("../PasswordComplexity")

describe('Password complexity tests', () => {
    it('should always be excellent', () => {
        const complexity = calculateComplexity('password123')
        expect(complexity).toEqual(PasswordComplexityValues.EXCELLENT)
    })
})