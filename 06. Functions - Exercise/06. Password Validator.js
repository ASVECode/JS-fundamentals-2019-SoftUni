function PassValidator(password) {
    let result = 'Password is valid';
    function checkLength(str) {
        if (str.length < 6 || str.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);
        }
    };

    function checkChars(str) {
        str = str.toLowerCase();
        for (let char of str) {
            if ((str.charCodeAt(char) > 122 || str.charCodeAt(char) < 97) && (str.charCodeAt(char) > 47 || str.charCodeAt(char) < 57)) {
                console.log(`Password must consist only of letters and digits`);
            }
        }
    }

    function checkDigit(str) {
        let digits = [];
        for (let char of str) {
            if (char == Number(char)) {
                digits.push(char);
            }
        }
        if (digits.length < 2) {
            console.log(`Password must have at least 2 digits`);
        }
    }
    checkLength(password);
    checkChars(password);
    checkDigit(password);
}
PassValidator('MyPass123');