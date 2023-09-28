bookList = []
addBook = (bookList,book)=>{
    return [...bookList,book];
}

viewBooks = (item)=>{
    alert(`book name : ${item['name']}`)
    alert(`author ${item['author']}`)
    alert(`publish year ${item['year']}`)
    alert(`price ${item['price']}`)
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
let mode = ''
do{
    mode = prompt('select your mode 1.read(r)  2.add(a) 3.delete(d) 4.edit(e) 5 quit(q)');
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
            bookList = addBook(bookList,book);
          break;
        case'd':
            deleteName = prompt('type your book name that want to delete');
            bookList = deleteBooks(bookList,deleteName);
            bookList.forEach(viewBooks);
            break;
        case'e':
            book = {}
            book['name'] = prompt('type your book name that want to edit');
            book['author'] = prompt('type author');
            book['year'] = prompt('type publish year');
            book['price'] = prompt('type price');
            bookList = editBook(bookList,book['name'],book)     
      }
}while(mode!='q')
