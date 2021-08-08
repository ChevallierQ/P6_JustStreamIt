let paragraph = document.getElementById("bestMovie");
let img_paragraph = document.getElementById("bestMovieImg");
let resume_paragraph = document.getElementById("bestMovieResume");
let id_best_movie = 0;

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(affichage) {
        paragraph.innerHTML = affichage.results[0].title;
        img_paragraph.src = affichage.results[0].image_url;
        img_paragraph.alt = affichage.results[0].title + "picture";
        id_best_movie = affichage.results[0].id;
        fetch("http://localhost:8000/api/v1/titles/" + id_best_movie)
            .then(function(res) {
                if (res.ok) {
                return res.json();
                }
            })
            .then(function(affichage) {
                resume_paragraph.innerHTML = affichage.description
            })
            .catch(function(err) {
            });
    })
    .catch(function(err) {
    });

