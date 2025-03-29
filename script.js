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
              <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" 
              data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
            </div>
          </div>
        </div>
            `;
    });
    $('.movie-container').html(cards);
    $('.modal-detail-button').on('click', function () {
      // console.log($(this).data('imdbid'));
      $.ajax({
        url: `http://www.omdbapi.com/?apikey=f281c8b5&i=` + $(this).data('imdbid'),
        success: function (data) {
          const movieDetail = `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${data.Poster}" alt="" class="img-fluid"/>
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${data.Title} (2016)</h4></li>
                            <li class="list-group-item"><strong>Director : ${data.Director}</strong></li>
                            <li class="list-group-item"><strong>Actors :</strong> ${data.Actors}</li>
                            <li class="list-group-item"><Strong>Genre :</Strong> ${data.Genre}</li>
                            <li class="list-group-item"><strong>Plot :</strong> ${data.Plot}</li>
                          </ul>
                    </div>
                </div>
            </div>`;
          $('.modal-body').html(movieDetail);
        },
        error: function (error) {
          console.log('Error:', error.responseText);
        },
      });
    });
  },
  error: function (error) {
    console.log('Error:', error.responseText);
  },
});
