const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = password => PasswordComplexityValues.EXCELLENT

module.exports = { calculateComplexity, PasswordComplexityValues }