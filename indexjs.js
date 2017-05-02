	// criar book

	function Book(title,sinopse,isbn,img,links){

		this.ratings =[];
		this.title = title;
		this.sinopse = sinopse;
		this.isbn = isbn;
		this.img = img;
		this.links = links;

		this.bookshelf;


		// adicionar um rating num livro
		this.addRate= function(varrate){


			this.ratings.push(varrate)
		}

		// calcular a média de rating de um livro utilizando os rates existentes
		this.meanRate= function(){

			var total=0;

			

			if(this.ratings.length!=0){
				for(var j=0;j<this.ratings.length;j++){
					total += this.ratings[j]
				}
				total= total/this.ratings.length;
			}

			return total;
		}

		}
		this.render= function(id){

			//  
			var idTitle = "#"+id+" .titulo";
			$(idTitle).html(this.title);

			var idSinopse = "#"+id+" .resumo";
			$(idSinopse).html(this.sinopse);

			var idLinks1 = "#"+id+" .divlink"+" .link1";
			$(idLinks1).attr("href",this.links);

			var idLinks2 = "#"+id+" .divlink"+" .link2";
			$(idLinks2).attr("href",this.links);

			var idLinks3 = "#"+id+" .divlink"+" .link3";
			$(idLinks3).attr("href",this.links);

			var idImage1 = "#"+id+" .imagem";
			$(idImage1).attr("src",this.img);


			// sistema de ratings locais
			var lastRating = 0;

			if(this.ratings.length>=1){
				var lastRating = this.ratings[this.ratings.length-1]
			} 


			$("#"+id+" .corestrela").removeClass("estrelapreenchida");
 		
	 		if(lastRating==1){
				$("#"+id+" .rate1").addClass("estrelapreenchida");
				
	 		}
	 		else if(lastRating==2){
				$("#"+id+" .rate2").addClass("estrelapreenchida");
				$("#"+id+" .rate1").addClass("estrelapreenchida");
			
	 		}
	 		else if(lastRating==3){
	 			$("#"+id+" .rate1").addClass("estrelapreenchida");
			 	$("#"+id+" .rate2").addClass("estrelapreenchida");
			 	$("#"+id+" .rate3").addClass("estrelapreenchida");
	 		}
			 else if (lastRating==4){
			 	$("#"+id+" .rate1").addClass("estrelapreenchida");
			 	$("#"+id+" .rate2").addClass("estrelapreenchida");
			 	$("#"+id+" .rate3").addClass("estrelapreenchida");
			 	$("#"+id+" .rate4").addClass("estrelapreenchida");
			 }
			 else if (lastRating==5){
			 	$("#"+id+" .rate1").addClass("estrelapreenchida");
			 	$("#"+id+" .rate2").addClass("estrelapreenchida");
			 	$("#"+id+" .rate3").addClass("estrelapreenchida");
			 	$("#"+id+" .rate4").addClass("estrelapreenchida");
				$("#"+id+" .rate5").addClass("estrelapreenchida");
			}

			// adicionar os rates dados nos respetivos livros
			data={book:this,id:id};


			$("#"+id+" .rate1").off("click");
			$("#"+id+" .rate1").click(data,function(event){
				event.data.book.addRate(1);
				event.data.book.render(event.data.id);
			});
			$("#"+id+" .rate2").off("click");
			$("#"+id+" .rate2").click(data,function(event){
				event.data.book.addRate(2);
				event.data.book.render(event.data.id);
			});	
			$("#"+id+" .rate3").off("click");
			$("#"+id+" .rate3").click(data,function(event){
				event.data.book.addRate(3);
				event.data.book.render(event.data.id);
			});	
			$("#"+id+" .rate4").off("click");
			$("#"+id+" .rate4").click(data,function(event){
				event.data.book.addRate(4);
				event.data.book.render(event.data.id);
			});	
			$("#"+id+" .rate5").off("click");
			$("#"+id+" .rate5").click(data,function(event){
				event.data.book.addRate(5);
				event.data.book.render(event.data.id);
			});


			// sistema de rating global	
			var totalRat =Math.round(this.meanRate());

			$("#"+id+" .corrigir").removeClass("estrelapreenchida");
	 		
	 		if(totalRat==1){
				$("#"+id+" .ratet1").addClass("estrelapreenchida");
				
	 		}
	 		else if(totalRat==2){
				$("#"+id+" .ratet2").addClass("estrelapreenchida");
				$("#"+id+" .ratet1").addClass("estrelapreenchida");
			
	 		}
	 		else if(totalRat==3){
	 			$("#"+id+" .ratet1").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet2").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet3").addClass("estrelapreenchida");
	 		}
			 else if (totalRat==4){
			 	$("#"+id+" .ratet1").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet2").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet3").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet4").addClass("estrelapreenchida");
			 }
			 else if (totalRat==5){
			 	$("#"+id+" .ratet1").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet2").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet3").addClass("estrelapreenchida");
			 	$("#"+id+" .ratet4").addClass("estrelapreenchida");
				$("#"+id+" .ratet5").addClass("estrelapreenchida");
			}

			var data={bookshelf:this.bookshelf,id:id};


			// trocar para o proximo livro
			var botaonext = $("#"+id+" .next");

			botaonext.off("click");
			botaonext.click(data,function(event){
				event.data.bookshelf.nextBook(event.data.id);
			});	

			// trocar para o ultimo livro visto
			var data={bookshelf:this.bookshelf,id:id};
			var botaoprevious = $("#"+id+" .previous");

			botaoprevious.off("click");
			botaoprevious.click(data,function(event){
				event.data.bookshelf.previousBook(event.data.id);
			});
		}
	}	

		// estrutar de dados em queue first in first out

	function Queue (){

		this.data =[];

		this.enqueue = function(element){

			this.data.push(element);
		}

		// se usar splice atualiza logo a variavel e return do array que fica
		this.dequeue = function(){

			// guarda o primeiro valor do array
			this.position0 = this.data[0];

			// corta a fatia do array e atualizar o array
			this.data= this.data.slice(1,this.data.length);
			
			// return fatia do array cortada
			return this.position0;
		}
	}

	// estrutura de dados em stack last in first out
	function Stack(){


		this.data = [];

		this.push= function(element){

			this.data.push(element);
		
		}
		this.pop = function(){

			return this.data.pop();

		}
	}
	// criar bookselfh

	function BookShelf(){

		this.shelf = new Queue();
		this.shelf1 = new Stack();
		this.shelfFavorites = new Queue();
		this.shelfFavorites1 = new Stack();

		// adicionar um livro na bookshelf
		this.addBook = function(book){

			book.bookshelf = this;
			this.shelf.enqueue(book);
		}		

		this.addToFavorites= function(book){

			book.bookshelf = this;
			this.shelfFavorites.enqueue(book);		
			
			
		}
		// inicializar os primeiros 3 livros 
		this.init=function(){

			var elemento1= this.shelf.dequeue();
			var elemento2 = this.shelf.dequeue();
			var elemento3 = this.shelf.dequeue();

			elemento1.render("book1");
			this.shelf1.push(elemento1);
			elemento2.render("book2");
			this.shelf1.push(elemento2);
			elemento3.render("book3");
			this.shelf1.push(elemento3);

		} 

		this.initFavorites=function(){

			var favorito1 = this.shelfFavorites.dequeue();
			var favorito2 = this.shelfFavorites.dequeue();
			var favorito3 = this.shelfFavorites.dequeue();

			favorito1.render("book1");
			this.shelfFavorites1.push(favorito1);
			favorito2.render("book2");
			this.shelfFavorites1.push(favorito2);
			favorito3.render("book3");
			this.shelfFavorites1.push(favorito3);

 


		}
		// inicializar o proximo livro
		this.nextBook = function(id){

			var elemento = this.shelf.dequeue();
			this.shelf1.push(elemento);
			elemento.render(id);
		}
		// inicializar o ultimo livro visto
		this.previousBook= function(id){

			var lastElement = this.shelf1.pop();
			lastElement.render(id);
		}


		// colocar as shelf vazias novamente
		this.reset= function(){
		
			this.shelf = new Queue();
			this.shelf1 = new Stack();

		}

		// procura atraves da API de livros quer pelo metodo de pesquisa quer por bookslhel pre definida
		this.loadBook = function(search){

			this.reset();

			var bookshelf = this;
			var url=0
			if(search){ // books resultantes da pesquisa
				url= "https://www.googleapis.com/books/v1/volumes?q="+search;	
			}else{ // books resultantes da bookshelf pre definida
				url="https://www.googleapis.com/books/v1/users/114855688559085138634/bookshelves/1001/volumes";
			}

			$.get(url).done(function(data){
				
				bookshelf.parseBook(data,search);
				
			})
			.fail(function(data){
				console.log("ERROR; "+data);
			});
		}
		// colocar a informação referente a cada carateristica do livro obtido 
		this.parseBook = function(data,search){

			var bookshelf = this;		
			for(var i=0;i<(data.items).length;i++){

				if(search){
					if(data.items[i].volumeInfo.imageLinks.thumbnail && data.items[i].volumeInfo.title && data.items[i].searchInfo && data.items[i].volumeInfo.industryIdentifiers && data.items[i].saleInfo.buyLink){
						var imagemNova = data.items[i].volumeInfo.imageLinks.thumbnail;
						var tituloNovo = data.items[i].volumeInfo.title;
						var sinopseNova = data.items[i].searchInfo.textSnippet;
						var isbnNovo = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
						var linkNovo = data.items[i].saleInfo.buyLink;
						
						
						var newBook = new Book(tituloNovo,sinopseNova,isbnNovo,imagemNova,linkNovo);
						bookshelf.addBook(newBook);
					}
				}else{
					if(data.items[i].volumeInfo.imageLinks.thumbnail && data.items[i].volumeInfo.title && data.items[i].volumeInfo.description && data.items[i].volumeInfo.industryIdentifiers && data.items[i].selfLink){
						var imagemNova = data.items[i].volumeInfo.imageLinks.thumbnail;
						var tituloNovo = data.items[i].volumeInfo.title;
						var sinopseNova = data.items[i].volumeInfo.description;
						var isbnNovo = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
						var linkNovo = data.items[i].selfLink;
						
						
						var newBook = new Book(tituloNovo,sinopseNova,isbnNovo,imagemNova,linkNovo);
						bookshelf.addBook(newBook);
					}
				}
			}	
			bookshelf.init();
		}
	}

	function SearchBar(bookshelf){
		
		this.bookshelf= bookshelf;

		//  pesquisa através da barra de pesquisa
		this.search = function(){
			
			var botaosearch = $("#procura");
			var bookshelf = this.bookshelf;	
			
			botaosearch.off("submit");
			botaosearch.submit(function(event){
				var parameter = $("#searchParameter").val();
				bookshelf.loadBook(parameter);
				event.preventDefault();
			});
		}

		//  faz refresh na pagina
		this.home = function(){

			var botaoHome = $("#homepage")

			botaoHome.off("click");
			botaoHome.click(
				botaoHome.attr("href","http://www.google.pt")			
			)
		}

		this.favorites = function(){

			var botaoFavorito = $("#favoritoBar")


			botaoFavorito.off("click");
			botaoFavorito.click(function(event){
				event.bookShelf.initFavorites();

			}
							
			)

		}

	}


	// instanciar as variaveis 

	var bookshelf1 = new BookShelf();
	bookshelf1.loadBook();
	var shelfFavorites = new BookShelf();

	var searchBar1= new SearchBar(bookshelf1);
	searchBar1.search();
	searchBar1.home();

	

	/*	this.favoriteBook=function(){

			book=this;

			var data={bookshelf:this.bookshelf};
			var botaofavorite = $(" .favorite");
			
			botaofavorite.off("click");
			botaofavorite.click(data,function(event){
				event.data.bookshelf.addToFavorites(book);
			});
	*/










