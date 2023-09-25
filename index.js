bookList = []
addBook = (bookList,book)=>{
    return [...bookList,book]
}


viewBooks = (item)=>{
    console.log(item['name'])
    console.log(item['author'])
    console.log(item['year'])
    console.log(item['price'])
}

editBook = (bookList,bookName,newData)=>{
    newBookList = bookList.map((book)=>{
        if(book['name']===bookName)
            return newData
        return c
    })
    return newBookList
}

deleteBooks = (bookList,bookName)=>{
    return bookList.filter((book)=>{
        book['name']===bookName
    })
}