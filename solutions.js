function setAlarm(employed, vacationing) {
    if (employed === true && vacationing === false) {
      return true;
    } else if (employed === true && vacationing === true) {
      return false;
    } else if (employed === false && vacationing === false) {
      return false;
    } else employed === false && vacationing === true;
    return false;
  }
  console.log(setAlarm(true, true));
  console.log(setAlarm(false, false));
  console.log(setAlarm(false, true));
  console.log(setAlarm(true, false));


function oddNumberCount(number) {
  let count = 0;
  for (let i = 1; i < number; i+=1) {
    if (i % 2 !== 0) {
      count+=1;
    }
  }
  return count;
}
console.log(oddNumberCount(7))
console.log(oddNumberCount(16))

function trollsBeGone(sentence) {
  const vowels = "aeiouAEIOU";
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if(!vowels.includes(char)) {
          newSentence += char;
      }
  }
  return newSentence;
}
console.log(trollsBeGone("This website is for losers LOL"))

//4. Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)
const bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000,
  };
  function bankAccountSummary(bankInfo) {
    let total = 0;
    for (let account in bankInfo) {
      total += bankInfo[account];
    }
    return total;
  }
  const totalBalance = bankAccountSummary(bankInfo);
  console.log(totalBalance); // Output: -400
// Save your bankAccountSummary total to a variable called bankTotal
// Write another function called inTheRed that accepts your bank account summary total (number) as an argument. The function should return true if your total is less than 0, and false otherwise.
  const bankTotal = bankAccountSummary(bankInfo);
  function inTheRed(total) {
    if (total < 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(inTheRed(bankTotal)); // Output: true

