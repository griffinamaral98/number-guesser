class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }

  toggleCheckedOutStatus() {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    let ratingSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    let average = Math.round(ratingSum / this._ratings.length);
    console.log(average);
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

// Book subclass that inherits props and functions from Media
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// Movie subclass that inherits props and functions from Media
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Create a new Book
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

//Create a new Movie
const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
