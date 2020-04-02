import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const CreateNewProject = props => (
  <div>
    <h1>Create New Project</h1>
    <CreateNewProjectForm onSubmit={props.onSubmit} user={props.user} />
  </div>
);

const INITIAL_STATE = {
  projectName: "",
  error: null
};

class CreateNewProjectBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { projectName } = this.state;
    this.props.onSubmit();
    // this.props.firebase
    //   .doPasswordReset(email)
    //   .then(() => {
    //     this.setState({ ...INITIAL_STATE });
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });
    // Get a key for a new Post.
    console.log(this.props);

    let newProjectKey = this.props.firebase.doCreateNewKey("projects");

    this.props.firebase.createProject(newProjectKey).set({
      name: this.state.projectName,
      userUid: this.props.user.uid,
      userEmail: this.props.user.email
    });

    this.props.firebase.db
      .ref(`users/${this.props.user.uid}/projects`)
      .on("value", snapshot => console.log(snapshot.val()));

    this.props.firebase.db
      .ref(`users/${this.props.user.uid}/projects`)
      .push()
      .set({
        uid: newProjectKey,
        name: this.state.projectName
      });

    // .update({ [`users/${this.props.user.uid}/projects`]: "ll2" });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { projectName, error } = this.state;
    const isInvalid = projectName === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="projectName"
          value={this.state.projectName}
          onChange={this.onChange}
          type="text"
          placeholder="New Project Name"
        />
        <button disabled={isInvalid} type="submit">
          Create
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default CreateNewProject;
const CreateNewProjectForm = withFirebase(CreateNewProjectBase);
export { CreateNewProjectForm };
