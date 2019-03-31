function findMostCommonLetter(str) {

    let commonLetterDictionary = {};

    let strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {

        let character = strArr[i];
        if (!commonLetterDictionary.hasOwnProperty(character)) {

            commonLetterDictionary[character] = 0;

        }
        else {

            commonLetterDictionary[character] = commonLetterDictionary[character] + 1;

        }

    }

    let highestCommonLetterCount = Math.max.apply(null, Object.values(commonLetterDictionary));
    let commonLetters = [];
    for (let commonLetter in commonLetterDictionary) {

        if (commonLetterDictionary[commonLetter] === highestCommonLetterCount) {

            commonLetters.push(commonLetter);

        }

    };

    return commonLetters.join('');

}

findMostCommonLetter('sdfalhfaksdhfwoiailjfalsdkhaiwehglhlaksajgqoinwlefqlkenfqviqovwqwiljlqwtkhqnvalsdowleidvjaljewfoihwglksdjfaiwheoinblaskvalksdfjawoghadlkjfs'); // l
findMostCommonLetter('sdfalhfaksdhfwoiailjfalsdkhaiwehglhlaksajgqoinwefqlkenfqviqovwqwiljlqwtkhqnvalsdoweidvjaljewfoihwglksdjfaiwheoinblaskvalksdfjawoghadlkjfs'); // al
