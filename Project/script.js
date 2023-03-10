
URL = 'https://upadhayay.github.io/db.json'

fetch(URL)
  // get the JSON data
  .then(response => response.json())
  // display the JSON data
  .then(data => {
    console.log(data)
    var html = '';
    for (let i = 0; i < data.books.length; i++) {
        if(data.books[i].published === true)
        {
            html += '<div id="paper1">'+
            '<div class="paper-img">'+
                '<img src="images/paper1.jpg" style="height: 300px;">'+
            '</div>'+
            '<a href="#" id="title1"><span>'+ data.books[i].title+'</span></a>'+
            '<br><span class="year">'+ data.books[i].year+'</span>'+
            '</div>';
        }
        document.getElementById('paper-details').innerHTML = html;
        }
});

 