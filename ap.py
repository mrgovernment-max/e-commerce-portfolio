books = []


def addBook(title):
    if len(title) !=0:
        books.append(title)
        print( f"{title} has been added")
        



def bookSearch(searchBook):
     for idx,book in enumerate(books,start=1):
         if searchBook == book:
             print(f"{idx}. {book}")
         else:
            addBookOption = input("Book not found.Want to add book instead? Y/N: ")
            addBookOptionCheck = addBookOption.capitalize()
     if addBookOptionCheck == "Y":
             addBook(searchBook)
             viewBooks()
     else:
            print("ended")
            
def editBooktitle(old,new):
    for idx, book in enumerate(books, start=1):
       if old == book:
        print(f"{book} at {idx} has been changed to {new}")
        books[idx - 1] = new  
        viewBooks()
        break
    else:
         print(f"{old} not in the collection yet.")
    

def viewBooks():
    if books:
        print("Book Collection:")
        for idx, book in enumerate(books, start=1):
            print(f"{idx}. {book}")
    else:
        print("No books in the collection yet.")


title = input("Enter book's title: ")
addBook(title)  
#searchBook = input("Search for a book: ")
#bookSearch(searchBook)  
initialTitle = input("input name of book to be edited: ")
newTitle = input("input name of new title: ")
editBooktitle(initialTitle,newTitle)

  
     
