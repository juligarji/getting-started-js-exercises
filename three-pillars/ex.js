
console.info( ".... Init Three Pilars Exercise ...." )

class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()
	
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${ String( this.favoriteBooks.length )}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
	
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
}



function loadBooks( bookshelf ) {
	// TODO: call fakeAjax( .. );

	fakeAjax( BOOK_API, function loadingCallback(arrayOfBooks) {

		for(let book of arrayOfBooks) {
			bookshelf.addFavoriteBook( book )
		}
		
		bookshelf.printFavoriteBooks()
		
		console.info( ".... End Three Pilars Exercise ...." )
	})
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

loadBooks( new Bookshelf() )

