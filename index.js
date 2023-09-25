bookList = []
addBook = (bookList,book)=>{
    return [...bookList,book];
}

viewBooks = (item)=>{
    console.log(item['name']);
    console.log(item['author']);
    console.log(item['year']);
    console.log(item['price']);
}

editBook = (bookList,bookName,newData)=>{
    newBookList = bookList.map((book)=>{
        if(book['name']===bookName)
            return newData
        return c
    })
    return newBookList;
}

deleteBooks = (bookList,bookName)=>{
    return bookList.filter((book)=>{
        book['name']===bookName
    });
}
let mode = prompt('select your mode 1.read(r)  2.add(a) 3.delete(d) 4.edit(e) 4 quit(q)');
while(true){
    switch(mode) {
        case 'r':
            bookList.forEach(viewBooks);
          break;
        case 'a':
            book = {};
            book['name'] = prompt('type your book name');
            book['author'] = prompt('type author');
            book['year'] = prompt('type publish year');
            book['price'] = prompt('type price');
            addBook(bookList,book);
          break;
        case'd':
            deleteName = prompt('type your book name that want to delete');
            deleteBooks(bookList,deleteName);
            bookList.forEach(viewBooks);
            break;
        case'e':
            book = {}
            book['name'] = prompt('type your book name');
            book['author'] = prompt('type author');
            book['year'] = prompt('type publish year');
            book['price'] = prompt('type price');
            editBook(bookList,book['name'],book)
        case 'q':
            return;
    
      }
}
