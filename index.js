module.exports = function passwordCalculator(password) {
    return new PasswordStrengthCalculator(password);
};

class PasswordStrengthCalculator {
    constructor(password) {
        this.password = password;
    }

    get splitPassword() {
        return this.password.split("");
    }

    get entropy() {
        let possibleSymbols = 0;
        const {
            special,
            uppercase,
            numbers,
            lowercase,
        } = this.numberOfValidChars();

        if (numbers) possibleSymbols += 10;
        if (lowercase) possibleSymbols += 26;
        if (uppercase) possibleSymbols += 26;
        if (special) possibleSymbols += 33;

        if (this.password.length === 0) return 0;

        return Math.log2(possibleSymbols ** Math.max(this.password.length, 0));
    }

    numberOfValidChars() {
        let numbersInPassword = 0;
        // 26 lowercase
        let lowercaseLettersInPassword = 0;
        // 26 uppercase
        let uppercaseLettersInPassword = 0;
        // 33 special char
        let specialCharsInPassword = 0;

        const password = this.splitPassword;

        password.forEach((letter) => {
            if (this.checkTypeOfChar(letter) === "number") {
                numbersInPassword++;
            } else if (this.checkTypeOfChar(letter) === "upppercase") {
                uppercaseLettersInPassword++;
            } else if (this.checkTypeOfChar(letter) === "special") {
                specialCharsInPassword++;
            } else lowercaseLettersInPassword++;
        });

        return {
            special: specialCharsInPassword,
            lowercase: lowercaseLettersInPassword,
            uppercase: uppercaseLettersInPassword,
            numbers: numbersInPassword,
        };
    }
    get text() {
        if (this.entropy < 28) return "Very Weak";
        if (this.entropy < 35) return "Weak";
        if (this.entropy < 59) return "Reasonable";
        if (this.entropy < 128) return "Strong";
        if (this.entropy >= 128) return "Very strong";
    }

    checkTypeOfChar(char) {
        if (isNaN(char) === false) return "number";
        if (this.isUppercaseLetterCheck(char)) return "uppercase";
        if (this.isLowercaseLetterCheck(char)) return "lowercase";
        // Its different so its a special ch ar
        return "special";
    }

    isLowercaseLetterCheck(string) {
        const regex = new RegExp(/[a-z]/);
        return regex.test(string);
    }
    isUppercaseLetterCheck(string) {
        const regex = new RegExp(/[A-Z]/);
        return regex.test(string);
    }
}
