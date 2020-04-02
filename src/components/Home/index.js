import React, { useState } from "react";
import { withAuthorization } from "../Session";
import NewProject from "../NewProject";

const HomePage = props => {
  const [showNewProjForm, setShowNewProjForm] = useState(false);
  return (
    <div>
      <h1>HomePage</h1>
      <p>The Home Page is accessible by every signed in user.</p>
      {showNewProjForm && (
        <NewProject
          onSubmit={() => {
            setShowNewProjForm(false);
          }}
          user={props.user}
        />
      )}
      <button onClick={() => setShowNewProjForm(true)}>
        Create New Project
      </button>
    </div>
  );
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
