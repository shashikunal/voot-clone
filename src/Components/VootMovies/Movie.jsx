import React from "react";
import { withRouter } from "react-router-dom";
const Movie = props => {
  let { state } = props.location;
  console.log(state);
  return (
    <div>
      <h1>{state.movie_name.slice(0, 20)}</h1>
      <video controls>
        <source src={state.video} />
      </video>
    </div>
  );
};

export default withRouter(Movie);
