/*class Sneaker {
    constructor(price) {
      this.price = price;
    }
    isExpensive() {
      return this.price > 100;
    }
  }
  
  const mySneaker = new Sneaker(120);
  console.log(mySneaker.isExpensive());*/

  class FavoriteNumber {
    isSeven() {
      return this.number == 7;
    }
    isEven() {
      return this.number % 2 === 0;
    }
    isOdd() {
      return this.number % 2 === 1;
    }
  }
