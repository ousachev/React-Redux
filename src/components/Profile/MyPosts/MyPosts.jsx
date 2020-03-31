import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../assets/formControls/FormControls";

const MyPosts = ({ profilePage: { postData }, addPost }) => {
  let { postSection, title } = classes;
  let postsArray = postData.map(post => {
    return (
      <Post
        message={post.message}
        likeCounter={post.likeCount}
        id={post.id}
        key={post.id}
      />
    );
  });

  let addNewPost = values => {
    addPost(values.newPostText);
  };

  return (
    <div className={postSection}>
      <h3 className={title}>My posts</h3>
      <div>{postsArray}</div>
      <MyPostsFormRedux onSubmit={addNewPost} />
    </div>
  );
};

export default MyPosts;

export const MyPostsForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="post message here..."
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

export const MyPostsFormRedux = reduxForm({ form: "postForm" })(MyPostsForm);
