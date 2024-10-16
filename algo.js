function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}

// Test
console.log(isLeapYear(2024)); // 2024 est une année bissextile.
console.log(isLeapYear(1900)); // 1900 n'est pas une année bissextile.
console.log(isLeapYear(2000)); // 2000 est une année bissextile.
function getTicketPrice(age) {
    if (age <= 12) {
        return 'Le prix du billet est de 10 $.';
    } else if (age >= 13 && age <= 17) {
        return 'Le prix du billet est de 15 $.';
    } else {
        return 'Le prix du billet est de 20 $.';
    }
}

// Test
console.log(getTicketPrice(10)); // Le prix du billet est de 10 $.
console.log(getTicketPrice(16)); // Le prix du billet est de 15 $.
console.log(getTicketPrice(25)); // Le prix du billet est de 20 $.
function clothingAdvice(temperature, isRaining) {
    if (temperature < 15 && isRaining) {
        return 'Portez un manteau chaud et un imperméable.';
    } else if (temperature < 15) {
        return 'Portez un manteau chaud.';
    } else if (temperature >= 15 && isRaining) {
        return 'Portez des vêtements légers et un imperméable.';
    } else {
        return 'Portez des vêtements légers.';
    }
}

// Test
console.log(clothingAdvice(10, true)); // Portez un manteau chaud et un imperméable.
console.log(clothingAdvice(20, false)); // Portez des vêtements légers.
console.log(clothingAdvice(18, true)); // Portez des vêtements légers et un imperméable.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Recursive function to check if cleanedStr is a palindrome
    function checkPalindrome(cleanedStr, start, end) {
        if (start >= end) {
            return true;
        }
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        return checkPalindrome(cleanedStr, start + 1, end - 1);
    }

    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Test
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// Test
console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
console.log(power(3, 0)); // 1
