function palin(num, step = 0) {

  let str = num.toString();
  let str2 = str.split("").reverse().join("");
  if(str === str2) {
    return {
      result: num,
      steps: step,
    };
  }

   return palin(num + Number(str2), step + 1);

}
console.log(palin(76));
