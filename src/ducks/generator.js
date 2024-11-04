function* generator(i) {
    yield i;
    yield i + 10;
    yield i + 20;
  }
  
const gen = generator(10);  //priprema, pozor...
let result = gen.next() //krene u izvrsenje dok ne naidje na yield. Onda vrati izraz iza yield i ceka da ponovo kazes next.
while (!result.done) {
console.log (result.value)
result=gen.next()
  }

  


  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);
  // Expected output: 20
  console.log(gen.next().value);
  
