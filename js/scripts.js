// Output Current Year
$('.currentYear').text( (new Date).getFullYear() );

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const url = 'https://gist.githubusercontent.com/valdynhunt/c5bb684b1cb356fa466a06e52cc5dc3f/raw/624255b598591b1c645fe6a3f2b095efda7fa12b/combined.json';
// Do stuff with returned data
let doStuff = function(data) {
 
  let q = document.getElementById('search').value;
  document.getElementById('search').value = '';
  
  var res = $(data.Search).filter(function (i, n){
    return n.Title.includes(q) || n.Title.includes(q.toLowerCase()) || n.Title.includes(q.toUpperCase()) || n.Title.includes(toCapitalize(q)) || n.imdbID == q;
  });

  var arr=[];
  temp=res.filter((x, i)=> {
    if (arr.some(el => el.imdbID === i.imdbID)) {
      return arr;
    }
    arr.push(i);
  })
  
  const max = arr.length;

  console.log(res.length);
  console.log(max);
 
  for ( let ix = 0; ix < max; ix++ ) {
    
    let title = arr[ix].Title;
    let year = arr[ix].Year;
    let imdbLink = arr[ix].imdbID;
    let img = arr[ix].Poster;
  
    const template = `
        <section>  
            <div class="movie-info">
                <p class="title">${ title }</p>
                <p class="year">${ year }</p>
                <p class="imdb">
                    <a href="http://imdb.com/title/${ imdbLink }" target="_blank">IMDB</a>
                </p>
            </div>
            <img src="${ img }" alt="Poster of ${ title }" title="Poster of ${ title }"/>
        </section>
    `;  

    $('main').append( template ); 

  } 
  
};

// Search button
$('#submit').click(function(event){

    $('main').empty();
    event.preventDefault(); // cancel default behavior
    $.getJSON( url, doStuff);

});

// Capitalize word(s) of search term
const toCapitalize = (str)  => {
    
  if (str.split(" ").length - 1 == 0) {

      return str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase(); 

  } else {

      let arr = str.split(" ");
      let newStr = "";

      for (let ix = 0; ix < arr.length; ix++) {

          arr[ix] = arr[ix].substring(0,1).toUpperCase() + arr[ix].substring(1).toLowerCase();

          newStr = newStr + arr[ix];

          if (ix < arr.length - 1) {

              newStr = newStr + " ";

          }

      }

      return newStr;

  }

}
