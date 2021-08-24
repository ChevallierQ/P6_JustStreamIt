let paragraph = document.getElementsByClassName("bestMovie");
let img_paragraph = document.getElementsByClassName("bestMovieImg");
let resume_paragraph = document.getElementsByClassName("bestMovieResume");
let id_best_movie = 0;

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        paragraph[0].innerHTML = affichage.results[0].title;
        img_paragraph[0].src = affichage.results[0].image_url;
        img_paragraph[0].alt = affichage.results[0].id;
        id_best_movie = affichage.results[0].id;
        fetch("http://localhost:8000/api/v1/titles/" + id_best_movie)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                resume_paragraph[0].innerHTML = affichage.long_description
            })
            .catch(function(err) {
                console.log(err)
            });
    })
    .catch(function(err) {
        console.log(err)
    });



let img_meilleurs_films_1 = document.getElementsByClassName("meilleursFilms1")
let img_meilleurs_films_2 = document.getElementsByClassName("meilleursFilms2")
let img_meilleurs_films_3 = document.getElementsByClassName("meilleursFilms3")
let img_meilleurs_films_4 = document.getElementsByClassName("meilleursFilms4")
let img_meilleurs_films_5 = document.getElementsByClassName("meilleursFilms5")
let img_meilleurs_films_6 = document.getElementsByClassName("meilleursFilms6")
let img_meilleurs_films_7 = document.getElementsByClassName("meilleursFilms7")

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_meilleurs_films_1[0].src = affichage.results[1].image_url;
        img_meilleurs_films_1[0].alt = affichage.results[1].id;
        img_meilleurs_films_2[0].src = affichage.results[2].image_url;
        img_meilleurs_films_2[0].alt = affichage.results[2].id;
        img_meilleurs_films_3[0].src = affichage.results[3].image_url;
        img_meilleurs_films_3[0].alt = affichage.results[3].id;
        img_meilleurs_films_4[0].src = affichage.results[4].image_url;
        img_meilleurs_films_4[0].alt = affichage.results[4].id;
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_meilleurs_films_5[0].src = affichage.results[0].image_url;
                img_meilleurs_films_5[0].alt = affichage.results[0].id;
                img_meilleurs_films_6[0].src = affichage.results[1].image_url;
                img_meilleurs_films_6[0].alt = affichage.results[1].id;
                img_meilleurs_films_7[0].src = affichage.results[2].image_url;
                img_meilleurs_films_7[0].alt = affichage.results[2].id;
            })
            .catch(function(err) {
                console.log(err)
            });
    })
    .catch(function(err) {
        console.log(err)
    });



let img_horreur_1 = document.getElementsByClassName("horreur1")
let img_horreur_2 = document.getElementsByClassName("horreur2")
let img_horreur_3 = document.getElementsByClassName("horreur3")
let img_horreur_4 = document.getElementsByClassName("horreur4")
let img_horreur_5 = document.getElementsByClassName("horreur5")
let img_horreur_6 = document.getElementsByClassName("horreur6")
let img_horreur_7 = document.getElementsByClassName("horreur7")

fetch("http://localhost:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_horreur_1[0].src = affichage.results[0].image_url;
        img_horreur_1[0].alt = affichage.results[0].id;
        img_horreur_2[0].src = affichage.results[1].image_url;
        img_horreur_2[0].alt = affichage.results[1].id;
        img_horreur_3[0].src = affichage.results[2].image_url;
        img_horreur_3[0].alt = affichage.results[2].id;
        img_horreur_4[0].src = affichage.results[3].image_url;
        img_horreur_4[0].alt = affichage.results[3].id;
        img_horreur_5[0].src = affichage.results[4].image_url;
        img_horreur_5[0].alt = affichage.results[4].id;
        fetch("http://localhost:8000/api/v1/titles/?page=2&genre=horror&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_horreur_6[0].src = affichage.results[0].image_url;
                img_horreur_6[0].alt = affichage.results[0].id;
                img_horreur_7[0].src = affichage.results[1].image_url;
                img_horreur_7[0].alt = affichage.results[1].id;
            })
            .catch(function(err) {
                console.log(err)
            });
    })
    .catch(function(err) {
        console.log(err)
    });



let img_sf_1 = document.getElementsByClassName("sf1")
let img_sf_2 = document.getElementsByClassName("sf2")
let img_sf_3 = document.getElementsByClassName("sf3")
let img_sf_4 = document.getElementsByClassName("sf4")
let img_sf_5 = document.getElementsByClassName("sf5")
let img_sf_6 = document.getElementsByClassName("sf6")
let img_sf_7 = document.getElementsByClassName("sf7")
    
fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_sf_1[0].src = affichage.results[0].image_url;
        img_sf_1[0].alt = affichage.results[0].id;
        img_sf_2[0].src = affichage.results[1].image_url;
        img_sf_2[0].alt = affichage.results[1].id;
        img_sf_3[0].src = affichage.results[2].image_url;
        img_sf_3[0].alt = affichage.results[2].id;
        img_sf_4[0].src = affichage.results[3].image_url;
        img_sf_4[0].alt = affichage.results[3].id;
        img_sf_5[0].src = affichage.results[4].image_url;
        img_sf_5[0].alt = affichage.results[4].id;
        fetch("http://localhost:8000/api/v1/titles/?page=2&genre=Sci-Fi&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_sf_6[0].src = affichage.results[0].image_url;
                img_sf_6[0].alt = affichage.results[0].id;
                img_sf_7[0].src = affichage.results[1].image_url;
                img_sf_7[0].alt = affichage.results[1].id;
            })
            .catch(function(err) {
                console.log(err)
            });
    })
    .catch(function(err) {
        console.log(err)
    });



let img_comedie_1 = document.getElementsByClassName("comedie1")
let img_comedie_2 = document.getElementsByClassName("comedie2")
let img_comedie_3 = document.getElementsByClassName("comedie3")
let img_comedie_4 = document.getElementsByClassName("comedie4")
let img_comedie_5 = document.getElementsByClassName("comedie5")
let img_comedie_6 = document.getElementsByClassName("comedie6")
let img_comedie_7 = document.getElementsByClassName("comedie7")
        
fetch("http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(affichage) {
        img_comedie_1[0].src = affichage.results[0].image_url;
        img_comedie_1[0].alt = affichage.results[0].id;
        img_comedie_2[0].src = affichage.results[1].image_url;
        img_comedie_2[0].alt = affichage.results[1].id;
        img_comedie_3[0].src = affichage.results[2].image_url;
        img_comedie_3[0].alt = affichage.results[2].id;
        img_comedie_4[0].src = affichage.results[3].image_url;
        img_comedie_4[0].alt = affichage.results[3].id;
        img_comedie_5[0].src = affichage.results[4].image_url;
        img_comedie_5[0].alt = affichage.results[4].id;
        fetch("http://localhost:8000/api/v1/titles/?page=2&genre=comedy&sort_by=-imdb_score")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_comedie_6[0].src = affichage.results[0].image_url;
                img_comedie_6[0].alt = affichage.results[0].id;
                img_comedie_7[0].src = affichage.results[1].image_url;
                img_comedie_7[0].alt = affichage.results[1].id;
            })
            .catch(function(err) {
                console.log(err)
            });
    })
    .catch(function(err) {
        console.log(err)
    });



let img_modale = document.getElementsByClassName("image-modale")
let titre_modale = document.getElementsByClassName("titre-modale")
let genre_modale = document.getElementsByClassName("genre-modale")
let sortie_modale = document.getElementsByClassName("sortie-modale")
let rated_modale = document.getElementsByClassName("rated-modale")
let imdb_modale = document.getElementsByClassName("imdb-modale")
let realisateur_modale = document.getElementsByClassName("realisateur-modale")
let acteurs_modale = document.getElementsByClassName("acteurs-modale")
let duree_modale = document.getElementsByClassName("duree-modale")
let origine_modale = document.getElementsByClassName("origine-modale")
let boxoffice_modale = document.getElementsByClassName("boxoffice-modale")
let resume_modale = document.getElementsByClassName("resume-modale")

let films = document.querySelectorAll('li img')
for (let i = 0; i < films.length; i++){
    let film = films[i]
    let url_f = function (){
        let id = film.alt
        fetch("http://localhost:8000/api/v1/titles/" + id)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(affichage) {
                img_modale[0].src = affichage.image_url;
                titre_modale[0].innerHTML = "Titre : " + affichage.original_title;
                genre_modale[0].innerHTML = "Genres : " + affichage.genres;
                sortie_modale[0].innerHTML = "Date de sortie : " + affichage.date_published;
                rated_modale[0].innerHTML = "Evaluation : " + affichage.rated;
                imdb_modale[0].innerHTML = "Note Imdb : " + affichage.imdb_score;
                realisateur_modale[0].innerHTML = "Réalisateur : " + affichage.directors;
                acteurs_modale[0].innerHTML = "Acteurs : " + affichage.actors;
                duree_modale[0].innerHTML = "Durée : " + affichage.duration;
                origine_modale[0].innerHTML = "Origine : " + affichage.countries;
                boxoffice_modale[0].innerHTML = "Box Office : " + affichage.worldwide_gross_income
                resume_modale[0].innerHTML = "Résumé : " + affichage.long_description;
            });
    }
    film.addEventListener('click', url_f)    
}


let filmM = document.getElementsByClassName("bestMovieImg")[0]
let play = document.getElementsByClassName("play")[0]
let url_fM = function (){
    let id = filmM.alt
    fetch("http://localhost:8000/api/v1/titles/" + id)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(affichage) {
            img_modale[0].src = affichage.image_url;
            titre_modale[0].innerHTML = "Titre : " + affichage.original_title;
            genre_modale[0].innerHTML = "Genres : " + affichage.genres;
            sortie_modale[0].innerHTML = "Date de sortie : " + affichage.date_published;
            rated_modale[0].innerHTML = "Evaluation : " + affichage.rated;
            imdb_modale[0].innerHTML = "Note Imdb : " + affichage.imdb_score;
            realisateur_modale[0].innerHTML = "Réalisateur : " + affichage.directors;
            acteurs_modale[0].innerHTML = "Acteurs : " + affichage.actors;
            duree_modale[0].innerHTML = "Durée : " + affichage.duration;
            origine_modale[0].innerHTML = "Origine : " + affichage.countries;
            boxoffice_modale[0].innerHTML = "Box Office : " + affichage.worldwide_gross_income
            resume_modale[0].innerHTML = "Résumé : " + affichage.long_description;
        });
}
filmM.addEventListener('click', url_fM)    
play.addEventListener('click', url_fM)



window.onload = () => {
    const modalButtons = document.querySelectorAll("[data-toggle=modal]");
    
    for(let button of modalButtons){
        button.addEventListener("click", function(e){
            e.preventDefault();
            let target = this.dataset.target;
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




let suivantsMF = document.getElementsByClassName("suiv-mf")[0];
let actionMF = function (){
    img_meilleurs_films_1[0].style.transition = '0.6s';
    img_meilleurs_films_2[0].style.transition = '0.6s';
    img_meilleurs_films_3[0].style.transition = '0.6s';
    img_meilleurs_films_4[0].style.transition = '0.6s';
    img_meilleurs_films_5[0].style.transition = '0.6s';
    img_meilleurs_films_6[0].style.transition = '0.6s';
    img_meilleurs_films_7[0].style.transition = '0.6s';
    img_meilleurs_films_1[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_meilleurs_films_2[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_meilleurs_films_3[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_meilleurs_films_4[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_meilleurs_films_5[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_meilleurs_films_6[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_meilleurs_films_7[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
}
suivantsMF.addEventListener('click', actionMF)

let precedentsMF = document.getElementsByClassName("prec-mf")[0];
let actionPMF = function (){
    img_meilleurs_films_1[0].style.transform = 'translateX(200px)';
    img_meilleurs_films_2[0].style.transform = 'translateX(200px)';
    img_meilleurs_films_3[0].style.transform = 'translateX(200px)';
    img_meilleurs_films_4[0].style.transform = 'translateX(200px)';
    img_meilleurs_films_5[0].style.transform = 'translateX(200px)';
    img_meilleurs_films_6[0].style.transform = 'translateX(200px)';
    img_meilleurs_films_7[0].style.transform = 'translateX(200px)';
}
precedentsMF.addEventListener('click', actionPMF)


let suivantsH = document.getElementsByClassName("suiv-h")[0];
let actionH= function (){
    img_horreur_1[0].style.transition = '0.6s';
    img_horreur_2[0].style.transition = '0.6s';
    img_horreur_3[0].style.transition = '0.6s';
    img_horreur_4[0].style.transition = '0.6s';
    img_horreur_5[0].style.transition = '0.6s';
    img_horreur_6[0].style.transition = '0.6s';
    img_horreur_7[0].style.transition = '0.6s';
    img_horreur_1[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_horreur_2[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_horreur_3[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_horreur_4[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_horreur_5[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_horreur_6[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_horreur_7[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
}
suivantsH.addEventListener('click', actionH)

let precedentsH = document.getElementsByClassName("prec-h")[0];
let actionPH = function (){
    img_horreur_1[0].style.transform = 'translateX(200px)';
    img_horreur_2[0].style.transform = 'translateX(200px)';
    img_horreur_3[0].style.transform = 'translateX(200px)';
    img_horreur_4[0].style.transform = 'translateX(200px)';
    img_horreur_5[0].style.transform = 'translateX(200px)';
    img_horreur_6[0].style.transform = 'translateX(200px)';
    img_horreur_7[0].style.transform = 'translateX(200px)';
}
precedentsH.addEventListener('click', actionPH)


let suivantsSF = document.getElementsByClassName("suiv-sf")[0];
let actionSF = function (){
    img_sf_1[0].style.transition = '0.6s';
    img_sf_2[0].style.transition = '0.6s';
    img_sf_3[0].style.transition = '0.6s';
    img_sf_4[0].style.transition = '0.6s';
    img_sf_5[0].style.transition = '0.6s';
    img_sf_6[0].style.transition = '0.6s';
    img_sf_7[0].style.transition = '0.6s';
    img_sf_1[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_sf_2[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_sf_3[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_sf_4[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_sf_5[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_sf_6[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_sf_7[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
}
suivantsSF.addEventListener('click', actionSF)

let precedentsSF = document.getElementsByClassName("prec-sf")[0];
let actionPSF = function (){
    img_sf_1[0].style.transform = 'translateX(200px)';
    img_sf_2[0].style.transform = 'translateX(200px)';
    img_sf_3[0].style.transform = 'translateX(200px)';
    img_sf_4[0].style.transform = 'translateX(200px)';
    img_sf_5[0].style.transform = 'translateX(200px)';
    img_sf_6[0].style.transform = 'translateX(200px)';
    img_sf_7[0].style.transform = 'translateX(200px)';
}
precedentsSF.addEventListener('click', actionPSF)


let suivantsC = document.getElementsByClassName("suiv-c")[0];
let actionC = function (){
    img_comedie_1[0].style.transition = '0.6s';
    img_comedie_2[0].style.transition = '0.6s';
    img_comedie_3[0].style.transition = '0.6s';
    img_comedie_4[0].style.transition = '0.6s';
    img_comedie_5[0].style.transition = '0.6s';
    img_comedie_6[0].style.transition = '0.6s';
    img_comedie_7[0].style.transition = '0.6s';
    img_comedie_1[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_comedie_2[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_comedie_3[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_comedie_4[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_comedie_5[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_comedie_6[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
    img_comedie_7[0].style.transform = 'translateX(-200PX) rotatey(360deg)';
}
suivantsC.addEventListener('click', actionC)

let precedentsC = document.getElementsByClassName("prec-c")[0];
let actionPC = function (){
    img_comedie_1[0].style.transform = 'translateX(200px)';
    img_comedie_2[0].style.transform = 'translateX(200px)';
    img_comedie_3[0].style.transform = 'translateX(200px)';
    img_comedie_4[0].style.transform = 'translateX(200px)';
    img_comedie_5[0].style.transform = 'translateX(200px)';
    img_comedie_6[0].style.transform = 'translateX(200px)';
    img_comedie_7[0].style.transform = 'translateX(200px)';
}
precedentsC.addEventListener('click', actionPC)