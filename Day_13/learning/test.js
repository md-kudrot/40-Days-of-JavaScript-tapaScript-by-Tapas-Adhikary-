// 'use strict';
const book = {
  title: 'The Great JavaScript Adventure',
  author: 'Coder McCodeface',
  getInfo: function() {
    console.log(this.title + ' by ' + this.author);
  }
};

// const getBookInfo = ;

console.log(book.getInfo())