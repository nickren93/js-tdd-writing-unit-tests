// Your code here
// src/utils.js
export function pointsForWord(word) {
    /*
    below are our initial working code before refactor:

    let points = 0;
    for (const char of word) {
      if (["a", "e", "i", "o", "u"].includes(char)) {
        points += 1;
      } else {
        points += 2;
      }
    }
    return points;
    */

    //below are after refactor:
    let points = 0;
    for (const char of word) {
        points += /[aeiou]/.test(char) ? 1 : 2;
    }
    return points;
  }
