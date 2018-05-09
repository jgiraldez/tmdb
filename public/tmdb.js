var userID = '31695001'

url_page=1
url="https://api.themoviedb.org/3/movie/popular?api_key=2b3dbbc9909d017c30cc1f63d253694b&language=es-MX&page="+url_page
container=document.getElementsByClassName('container')


function appendCard(id,img,title,synopsis){
    var cardImg='<a onClick=detailedView('
    + userID + ',' + id
    + ')><img class= "card-img-top" src = "https://image.tmdb.org/t/p/w500/'
    + topMovies[i].backdrop_path
    + '"></a>'
    
    var cardTitle='<div class="card-body">'
    + '<div class="card-image-overlay"><h5 class="card-title">'
    + topMovies[i].title
    + '</h5></div>'
    
    var cardSynopsis='<p class="card-text">'
    + topMovies[i].overview
    + '</p>'
    
    var cardButtonDown='<a href="#" style="color:#333333"><i class="fas fa-arrow-alt-circle-down fa-2x"></i></a>'
    
    var cardButtonUp='<a href="#" style="color:#333333"><i class="fas fa-arrow-alt-circle-up fa-3x"></i></a>'
    
    var div=document.createElement('div')
    
    div.className='card'
    div.style.marginBottom='2rem'
    div.style.borderColor='#333333'
    
    div.innerHTML=cardImg
    + cardTitle
    + cardSynopsis
    + '<div style=float:right>'
    + cardButtonDown
    + cardButtonUp
    + '</div>'
    + '</div>'

    $('.container').append(div)}

    $(document).ready(function(){
        $.getJSON({
            url,
            success:function(data){
                topMovies=data.results

        for(i=0;i<topMovies.length;i++){img=topMovies[i].backdrop_path
            title=topMovies[i].title
            synopsis=topMovies[i].overview
            id=topMovies[i].id
            appendCard(id,img,title,synopsis)}
            url_page=url_page+1
        }
    });
});

