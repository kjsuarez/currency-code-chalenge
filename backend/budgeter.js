var express = require('express');
var request = require('request');



function getBudget(budgetInfo) {
  var budget = 0.0;
  startDate = new Date(budgetInfo.startDate)
  duration = budgetInfo.numberOfDays

  for (var i = 0; i < duration; i++) {
    var today = new Date(startDate);
    today.setDate(startDate.getDate()+i);
    if (isWeekDay(today)) {
      budget += todaysPrice(today)
    }

  }
  budget = budget * 0.01
  console.log(budget)
  return (budget).toFixed(2)
}

function isWeekDay(date) {
  return (date.getDay() > 0 && date.getDay() < 6)
}

function todaysPrice(date) {
  if (date.getDate() < 7) {
    return 5
  } else if(date.getDate() >= 7 && date.getDate() < 14) {
    return 10
  } else if(date.getDate() >= 14 && date.getDate() < 21) {
    return 15
  } else if(date.getDate() >= 21 && date.getDate() < 27) {
    return 20
  } else {
    return 25
  }
}


module.exports = {
  getBudget: getBudget
};
