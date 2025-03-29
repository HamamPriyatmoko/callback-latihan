$.ajax({
  url: 'http://www.omdbapi.com/?s=avengers&apikey=f281c8b5',
  success: function (data) {
    const movies = data.Search;
    let cards = '';
    movies.forEach((movie) => {
      cards += `
        <div class="col-md-4 my-5">
          <div class="card">
            <img src="${movie.Poster}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
              <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#movieDetailModal">Show Details</a>
            </div>
          </div>
        </div>
            `;
    });
    $('.movie-container').html(cards);
  },
  error: function (error) {
    console.log('Error:', error.responseText);
  },
});
