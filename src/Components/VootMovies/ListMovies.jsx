import React, { useState, useEffect, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
const ListMovies = () => {
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      let fetchMovies = firebase.database().ref("voot-video");
      //firebase event for fetching data
      fetchMovies.on("value", vootMovies => {
        let VOOT_MOVIES = [];
        vootMovies.forEach(movie => {
          VOOT_MOVIES.push({
            id: movie.key,
            movie_name: movie.val().movie_name,
            poster: movie.val().downloadPoster,
            video: movie.val().downloadVideo,
            language: movie.val().movie_language,
            rating: movie.val().movie_rating,
            description: movie.val().movie_description,
            certificate: movie.val().movie_certificate,
            year: movie.val().movie_year,
          });
        });
        //end of firebase EVENTS
        setMovies(VOOT_MOVIES);
      });
    };
    fetchData();
  }, []);
  console.log(movies);
  let Movies = movies.map(movie => {
    return (
      <Fragment key={movie.id}>
        <section class="thumbnailBlock">
          <header>
            <Link
              to={{
                pathname: `/shows/${movie.movie_name.slice(0, 20)}/${movie.id}`,
                state: {
                  ...movie,
                },
              }}
            >
              <img src={movie.poster} alt={movie.movie_name} />
            </Link>
          </header>
          <main>
            <p>
              {movie.language} - {movie.movie_name.slice(0, 20)}
            </p>
          </main>
        </section>
      </Fragment>
    );
  });

  return (
    <section>
      <article>
        <section id="vootMovies">
          <header>
            <h2 style={{ "margin-top": "20px" }}>Watch In Your Movies</h2>
          </header>
          <article>{movies.length > 0 ? Movies : "loading..."}</article>
        </section>
      </article>
    </section>
  );
};

export default ListMovies;
