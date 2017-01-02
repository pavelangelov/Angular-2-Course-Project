export class Validator {
    private constants = {
        NAME_MIN_LENGTH: 3,
        NAME_MAX_LENGTH: 20,
        PASSWORD_MIN_LENGTH: 6,
        PASSWORD_MAX_LENGTH: 20,
        TEXT_MIN_LENGTH: 1,
        TEXT_MAX_LENGTH: 100,
        STRING_VALID_SYMBOLS: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '_', '-', '@'],
        PASSWORD_VALID_SYMBOLS: ['<', '>', '(', ')', '{', '}', '_', '-'],
        BAD_SYMBOLS: ['<', '>', '\'', '/', '(', ')', '.', '=', '@', '`', '{', '}'],
        ESCAPED_SYMBOLS: ['&lt;', '&gt;', '&quot;', '&#x2F;', '&#40;', '&#41;', '&#46;', '&#61;', '&#64;', '&#96;', '&#123;', '&#125;']
    };

    isUndefined(value) {
        if (value === undefined) {
            return true;
        } else {
            return false;
        }
    }

    isValidTextLength(value, minLength, maxLength) {
        if (!this.isUndefined(value)) {
            value = value.trim();
            if (value.length >= minLength && value.length <= maxLength) {
                return true;
            }
        }

        return false;
    }

    usernameContainsBadSymbols(username) {
        let hasBadSymbols = false;
        for (let i = 0, len = username.length; i < len; i += 1) {
            let char = username[i];
            if (!this.constants.STRING_VALID_SYMBOLS.some(c => c === char)) {
                hasBadSymbols = true;
            }
        }

        return hasBadSymbols;
    }

    passwordContainsBadSymbols(password) {
        let hasBadSymbols = false;
        for (let i = 0, len = password.length; i < len; i += 1) {
            let char = password[i];
            if (!this.constants.STRING_VALID_SYMBOLS.some(c => c === char) &&
                !this.constants.PASSWORD_VALID_SYMBOLS.some(c => c === char)) {
                hasBadSymbols = true;
            }
        }

        return hasBadSymbols;
    }

    replaceBadChar(char) {
        this.constants.BAD_SYMBOLS.forEach((symbol, index) => {
            if (char === symbol) {
                char = this.constants.ESCAPED_SYMBOLS[index];
            }
        });

        return char;
    }

    replaceBadSymbols(value): string {
        let len = value.length,
            step = 1,
            escapedValue = '';

        for (let i = 0; i < len; i += step) {
            escapedValue += this.replaceBadChar(value[i]);
        }

        return escapedValue;
    }

    validateCredentials(username, password) {
        // Validate username length
        if (!this.isValidTextLength(username, this.constants.NAME_MIN_LENGTH, this.constants.NAME_MAX_LENGTH)) {
            throw new Error(
                `Username must be between ${this.constants.NAME_MIN_LENGTH} and ${this.constants.NAME_MAX_LENGTH} symbols!`);
        }

        if (this.usernameContainsBadSymbols(username)) {
            throw new Error(`Username contains invalid symbols!`);
        }

        // Validate password length
        if (!this.isValidTextLength(password, this.constants.PASSWORD_MIN_LENGTH, this.constants.PASSWORD_MAX_LENGTH)) {
            throw new Error(
                `Password must be between ${this.constants.PASSWORD_MIN_LENGTH} and ${this.constants.PASSWORD_MAX_LENGTH} symbols!`);
        }

        if (this.passwordContainsBadSymbols(password)) {
            throw new Error(`Password contains invalid symbols!`);
        }
    }

    replaceInvalidSymbols(value) {
        let escapedValue = this.replaceBadSymbols(value);

        return escapedValue;
    }

    validateName(name, paramName) {
        if (!this.isValidTextLength(name, this.constants.NAME_MIN_LENGTH, this.constants.NAME_MAX_LENGTH)) {
            throw new Error(`${paramName} must be between ${this.constants.NAME_MIN_LENGTH} and ${this.constants.NAME_MAX_LENGTH}!`)
        };
    }
}
