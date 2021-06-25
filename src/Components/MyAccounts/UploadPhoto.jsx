import React, { useState } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
const UploadPhoto = props => {
  let [state, setState] = useState({
    loading: false,
    url: "",
    upload_avatar: "",
    progress: 0,
    barStatus: false,
  });
  let [userData, setUserData] = useState(props.users);
  let [userRef, setUserRef] = useState(firebase.auth().currentUser);
  let [usersRef, setUsersRef] = useState(firebase.database().ref("users"));
  let { id } = useParams();
  let { loading, url, upload_avatar, barStatus } = state;

  let handleChange = e => {
    setState({ ...state, upload_avatar: e.target.files[0] }); //if it is file use this trick
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let uploadTask = firebase
        .storage()
        .ref(`profile-photo/${upload_avatar.name}`)
        .put(upload_avatar);

      //==========================FIREBASE EVENT =======================/
      uploadTask.on(
        "state_changed",
        snapShot => {
          //progressBar purpose
        },
        err => {
          //handling ERRORS
        },
        async () => {
          //COMPLETION OF UPLOAD TASK
          //download image URL from firebase storage bucket
          let downloadURL = await firebase
            .storage()
            .ref("profile-photo")
            .child(upload_avatar.name)
            .getDownloadURL();
          setState({ url: downloadURL, barStatus: false }); //update photoURL
          await setUserRef(userRef.updateProfile({ photoURL: state.url }));
          setUsersRef(
            await usersRef.child(userData.uid).update({
              photoURL: state.url,
            })
          );

          toast.success("successfully photo uploaded");
        }
      );
    } catch (err) {
      toast.error(err.message);
    }
    setState({ loading: false });
  };
  return (
    <section id="authBlock" className="profile_block">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>{id} more personalized experience.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="file"
                name="photo"
                id="photo"
                required
                onChange={handleChange}
              />
              <label htmlFor="photo">Photo</label>
            </div>

            <div className="form-group register_Block">
              <Link to="/login">go back to login</Link>
            </div>
            <div className="form-group">
              <button>
                {loading === true ? "loading..." : "Upload Photo"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default withRouter(UploadPhoto);
