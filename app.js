console.log('sanity check')

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      let guess
    while (guess !== this.secretNum){
      guess = this.getGuess()
      this.prevGuesses.push(guess)
      this.render(guess)
    }
  },
  getGuess: function(){
      let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
      const parsed = parseInt(guess)
      return parsed
  },
  render: function(guess){ 
    if (guess >= this.smallestNum && guess <= this.biggestNum){
      if (guess > this.secretNum){
        alert(`Your guess is too high!! Previous guesses: ${this.prevGuesses.join(', ')}`)
      }else if (guess < this.secretNum){
        alert(`Your guess is too low!! Previous guesses: ${this.prevGuesses.join(', ')}`)
      }else if (guess === this.secretNum){
        alert(`Congrats! You guess the number in ${this.prevGuesses.length} number of guesses!!`)
      }
    }
  }
}


