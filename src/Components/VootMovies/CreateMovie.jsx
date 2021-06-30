import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Movies.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";
const CreateMovie = props => {
  let [state, setState] = useState({
    movie_name: "",
    movie_year: "",
    movie_description: "",
    movie_language: "",
    movie_certificate: "",
    movie_rating: "",
    barStatus: false,
    loading: "",
    poster: "",
    video: "",
  });

  // let [poster, setPoster] = useState({});
  // let [video, setVideo] = useState({});

  let handlePoster = e => {
    setState({ poster: e.target.files[0] });
  };

  let handleVideo = e => {
    setState({ video: e.target.files[0] });
  };
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let {
    movie_name,
    movie_year,
    movie_description,
    movie_rating,
    movie_certificate,
    movie_language,
    barStatus,
    loading,
    video,
    poster,
  } = state;

  let handleSubmit = async e => {
    e.preventDefault();
    console.log();
    try {
      let uploadPoster = await firebase
        .storage()
        .ref(`/upload-poster/${poster.name}`)
        .put(poster);
      let uploadVideo = await firebase
        .storage()
        .ref(`/upload-video/${video.name}`)
        .put(video);
      console.log(uploadPoster);
      console.log(uploadVideo);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="MovieBlock">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>Upload Movies for a more personalized experience.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="movie_name">Movie Name</label>
              <input
                type="text"
                className="form-control"
                id="movie_name"
                name="movie_name"
                value={movie_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie_poster">Movie Poster</label>
              <input
                type="file"
                className="form-control"
                id="movie_poster"
                name="poster"
                onChange={handlePoster}
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie_video">Movie Video</label>
              <input
                type="file"
                className="form-control"
                id="movie_video"
                name="video"
                onChange={handleVideo}
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie_year">Year</label>
              <input
                type="date"
                className="form-control"
                id="movie_year"
                name="movie_year"
                value={movie_year}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie_language">Language</label>
              <input
                type="text"
                className="form-control"
                id="movie_language"
                name="movie_language"
                value={movie_language}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="movie_certificate">Movie Certificate</label>
              <input
                type="text"
                className="form-control"
                id="movie_certificate"
                name="movie_certificate"
                value={movie_certificate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie_rating">Movie Rating</label>
              <input
                type="number"
                className="form-control"
                id="movie_rating"
                name="movie_rating"
                value={movie_rating}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="movie_description">Movie description</label>
              <textarea
                className="form-control"
                id="movie_description"
                name="movie_description"
                value={movie_description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group btn-group">
              <button>{loading === true ? "loading" : "Create Movie"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default CreateMovie;
