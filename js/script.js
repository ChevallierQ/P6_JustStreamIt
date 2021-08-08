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



let img_meilleurs_films_1 = document.getElementById("meilleursFilms1")
let img_meilleurs_films_2 = document.getElementById("meilleursFilms2")
let img_meilleurs_films_3 = document.getElementById("meilleursFilms3")
let img_meilleurs_films_4 = document.getElementById("meilleursFilms4")
let img_meilleurs_films_5 = document.getElementById("meilleursFilms5")
let img_meilleurs_films_6 = document.getElementById("meilleursFilms6")
let img_meilleurs_films_7 = document.getElementById("meilleursFilms7")

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_meilleurs_films_1.src = affichage.results[1].image_url;
        img_meilleurs_films_1.alt = affichage.results[1].title + "picture";
        img_meilleurs_films_2.src = affichage.results[2].image_url;
        img_meilleurs_films_2.alt = affichage.results[2].title + "picture";
        img_meilleurs_films_3.src = affichage.results[3].image_url;
        img_meilleurs_films_3.alt = affichage.results[3].title + "picture";
        img_meilleurs_films_4.src = affichage.results[4].image_url;
        img_meilleurs_films_4.alt = affichage.results[4].title + "picture";
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_meilleurs_films_5.src = affichage.results[0].image_url;
                img_meilleurs_films_5.alt = affichage.results[0].title + "picture";
                img_meilleurs_films_6.src = affichage.results[1].image_url;
                img_meilleurs_films_6.alt = affichage.results[1].title + "picture";
                img_meilleurs_films_7.src = affichage.results[2].image_url;
                img_meilleurs_films_7.alt = affichage.results[2].title + "picture";
            })
            .catch(function(err) {
            });
    })
    .catch(function(err) {
    });



let img_horreur_1 = document.getElementById("horreur1")
let img_horreur_2 = document.getElementById("horreur2")
let img_horreur_3 = document.getElementById("horreur3")
let img_horreur_4 = document.getElementById("horreur4")
let img_horreur_5 = document.getElementById("horreur5")
let img_horreur_6 = document.getElementById("horreur6")
let img_horreur_7 = document.getElementById("horreur7")

fetch("http://localhost:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_horreur_1.src = affichage.results[0].image_url;
        img_horreur_1.alt = affichage.results[0].title + "picture";
        img_horreur_2.src = affichage.results[1].image_url;
        img_horreur_2.alt = affichage.results[1].title + "picture";
        img_horreur_3.src = affichage.results[2].image_url;
        img_horreur_3.alt = affichage.results[2].title + "picture";
        img_horreur_4.src = affichage.results[3].image_url;
        img_horreur_4.alt = affichage.results[3].title + "picture";
        img_horreur_5.src = affichage.results[4].image_url;
        img_horreur_5.alt = affichage.results[4].title + "picture";
        fetch("http://localhost:8000/api/v1/titles/?page=2&genre=horror&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_horreur_6.src = affichage.results[0].image_url;
                img_horreur_6.alt = affichage.results[0].title + "picture";
                img_horreur_7.src = affichage.results[1].image_url;
                img_horreur_7.alt = affichage.results[1].title + "picture";
            })
            .catch(function(err) {
            });
    })
    .catch(function(err) {
    });