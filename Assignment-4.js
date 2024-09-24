function calculateTax(income, expenses) {
    if(income < expenses) {
      return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * 0.2;
    return tax;
  }
  
  function sendNotification(email) {
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      return "Invalid Email";
    }
    const userName = email.split("@")[0];
    const DomainName = email.split("@")[1];
    return userName + " sent you an email from " + DomainName;
  }
  
  function checkDigitsInName(name) {
    if(typeof name !== "string") {
      return "Invalid Input";
    }
    for(let i = 0; i < name.length; i++) {
      if(name[i] >= '0' && name[i] <= '9') {
        return true;
      }
    }
    return false;
  }
  
  function calculateFinalScore(obj) {
    if(typeof obj !== "object") {
      return "Invalid Input";
    }
    if((obj.testScore >= 0 && obj.testScore <= 50) && (obj.schoolGrade >= 0 && obj.schoolGrade <= 30)) {
      let finalScore;
      if(obj.isFFamily === true) {
        finalScore = obj.testScore + obj.schoolGrade + 20;
      } else {
        finalScore = obj.testScore + obj.schoolGrade;
      }
      if(finalScore >= 80) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Invalid Input";
    }
  }
  
  function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
    let timeSum = 0;
    for(let time of waitingTimes) {
      timeSum += time;
    }
    const timeNeed = Math.round(timeSum / waitingTimes.length) * (serialNumber - waitingTimes.length - 1);
    return timeNeed;
  }