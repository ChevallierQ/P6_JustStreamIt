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



let img_sf_1 = document.getElementById("sf1")
let img_sf_2 = document.getElementById("sf2")
let img_sf_3 = document.getElementById("sf3")
let img_sf_4 = document.getElementById("sf4")
let img_sf_5 = document.getElementById("sf5")
let img_sf_6 = document.getElementById("sf6")
let img_sf_7 = document.getElementById("sf7")
    
fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_sf_1.src = affichage.results[0].image_url;
        img_sf_1.alt = affichage.results[0].title + "picture";
        img_sf_2.src = affichage.results[1].image_url;
        img_sf_2.alt = affichage.results[1].title + "picture";
        img_sf_3.src = affichage.results[2].image_url;
        img_sf_3.alt = affichage.results[2].title + "picture";
        img_sf_4.src = affichage.results[3].image_url;
        img_sf_4.alt = affichage.results[3].title + "picture";
        img_sf_5.src = affichage.results[4].image_url;
        img_sf_5.alt = affichage.results[4].title + "picture";
        fetch("http://localhost:8000/api/v1/titles/?page=2&genre=Sci-Fi&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_sf_6.src = affichage.results[0].image_url;
                img_sf_6.alt = affichage.results[0].title + "picture";
                img_sf_7.src = affichage.results[1].image_url;
                img_sf_7.alt = affichage.results[1].title + "picture";
            })
            .catch(function(err) {
            });
    })
    .catch(function(err) {
    });



let img_comedie_1 = document.getElementById("comedie1")
let img_comedie_2 = document.getElementById("comedie2")
let img_comedie_3 = document.getElementById("comedie3")
let img_comedie_4 = document.getElementById("comedie4")
let img_comedie_5 = document.getElementById("comedie5")
let img_comedie_6 = document.getElementById("comedie6")
let img_comedie_7 = document.getElementById("comedie7")
        
fetch("http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_comedie_1.src = affichage.results[0].image_url;
        img_comedie_1.alt = affichage.results[0].title + "picture";
        img_comedie_2.src = affichage.results[1].image_url;
        img_comedie_2.alt = affichage.results[1].title + "picture";
        img_comedie_3.src = affichage.results[2].image_url;
        img_comedie_3.alt = affichage.results[2].title + "picture";
        img_comedie_4.src = affichage.results[3].image_url;
        img_comedie_4.alt = affichage.results[3].title + "picture";
        img_comedie_5.src = affichage.results[4].image_url;
        img_comedie_5.alt = affichage.results[4].title + "picture";
        fetch("http://localhost:8000/api/v1/titles/?page=2&genre=comedy&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_comedie_6.src = affichage.results[0].image_url;
                img_comedie_6.alt = affichage.results[0].title + "picture";
                img_comedie_7.src = affichage.results[1].image_url;
                img_comedie_7.alt = affichage.results[1].title + "picture";
            })
            .catch(function(err) {
            });
    })
    .catch(function(err) {
    });



let img_modale = document.getElementsByClassName("image-modale")
let titre_modale = document.getElementsByClassName("image-modale")
let genre_modale = document.getElementsByClassName("image-modale")
let sortie_modale = document.getElementsByClassName("image-modale")
let rated_modale = document.getElementsByClassName("image-modale")
let imdb_modale = document.getElementsByClassName("image-modale")
let realisateur_modale = document.getElementsByClassName("image-modale")
let acteurs_modale = document.getElementsByClassName("image-modale")
let duree_modale = document.getElementsByClassName("image-modale")
let origine_modale = document.getElementsByClassName("image-modale")
let boxoffice_modale = document.getElementsByClassName("image-modale")
let resume_modale = document.getElementsByClassName("image-modale")







window.onload = () => {
    const modalButtons = document.querySelectorAll("[data-toggle=modal]");
    
    for(let button of modalButtons){
        button.addEventListener("click", function(e){
            e.preventDefault();
            let target = this.dataset.target
            let modal = document.querySelector(target);
            modal.classList.add("show");
            const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
            for(let close of modalClose){
                close.addEventListener("click", () => {
                    modal.classList.remove("show");
                });
            }
            modal.addEventListener("click", function(){
                this.classList.remove("show");
            });
            modal.children[0].addEventListener("click", function(e){
                e.stopPropagation();
            })
        });
    }    
}