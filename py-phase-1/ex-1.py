class Book:
  def __init__(self, title, author, pages):
    self.title = title
    self.author = author
    self.pages = pages
  
  def summary(self):
    print(f"{self.title} by {self.author}, {self.pages} pages.")
  
  def is_long(self):
    if int(self.pages) >= 300:
      return True
    else:
      return False

book = Book("Title", "Author", "10")
book.summary()
print(book.is_long())