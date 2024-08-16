export function containsNoDot(value) {
    const dotRegex = /^\d+$/; // Only digits, no dots
    return dotRegex.test(value);;
}

export function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}