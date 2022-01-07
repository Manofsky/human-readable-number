module.exports = function toReadable(number) {
  const hundred = 'hundred';
  const maya = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const roundTwoDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  // от 0 до 19
  if (number < 20 && number >= 0) {
    const wordA = maya[number];
    return wordA;
    // 20, 30, 40 ... 90 (round two-digit numbers)
  } else if (number < 100 && number >= 20 && number % 10 === 0) {
    const wordB = roundTwoDigit[number / 10];
    return wordB;
    // 100
  } else if (number === 100) {
    const wordP = `one ${hundred}`;
    return wordP;
    // 200, 300, 400 ... 900 (round three-digit numbers)
  } else if (number < 1000 && number > 100 && number % 100 === 0) {
    let firstCharacterOfThree = maya[number / 100];
    const roundThreeDigit = `${firstCharacterOfThree} ${hundred}`;
    return roundThreeDigit;
    // от 21 до 99
  } else if (number < 100 && number > 20) {
    let wordF = roundTwoDigit[Math.floor(number / 10)];
    let wordG = maya[number % 10];
    const wordH = `${wordF} ${wordG}`;
    return wordH;
    // 110 120 130 ... 210 220 230 ...
  } else if (number < 1000 && number > 100 && number % 10 === 0) {
    let wordD = maya[Math.floor(number / 100)];

    let wordI = Math.floor(number / 10);
    let wordJ = wordI % 10;
    let wordK = (wordJ === 1) ? maya[10] : roundTwoDigit[wordJ];

    const wordO = `${wordD} ${hundred} ${wordK}`;
    return wordO;
  } else if (number < 1000 && number > 100 && (Math.floor(number / 10) % 10 !== 0) && (Math.floor(number / 10) % 10 !== 1)) {
    let wordD = maya[Math.floor(number / 100)];

    let wordI = Math.floor(number / 10);
    let wordJ = wordI % 10;
    let wordK = roundTwoDigit[wordJ];

    let wordM = number % 10;
    let wordN = maya[wordM];

    const wordO = `${wordD} ${hundred} ${wordK} ${wordN}`;
    return wordO;
  } else if (number < 1000 && number > 100 && (Math.floor(number / 10) % 10 === 0) || (Math.floor(number / 10) % 10 === 1)) {
    let wordD = maya[Math.floor(number / 100)];

    let wordM = number % 100;
    let wordN = maya[wordM];

    const wordO = `${wordD} ${hundred} ${wordN}`;
    return wordO;
  }
}
