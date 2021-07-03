import React from "react";
import { withRouter } from "react-router-dom";
const VideoPlayer = props => {
  let { video } = props.location.state;
  return (
    <section>
      <article>
        <video controls autoPlay>
          <source src={video} />
        </video>
      </article>
    </section>
  );
};

export default withRouter(VideoPlayer);
