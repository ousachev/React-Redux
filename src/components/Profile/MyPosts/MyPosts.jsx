import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({
  profilePage: { postData, newPostText },
  addPost,
  updatePostText
}) => {
  let { postSection, addPostButton, title } = classes;
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

  let newPost = React.createRef();

  let onAddNewPost = () => {
    addPost();
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    updatePostText(text);
  };

  return (
    <div className={postSection}>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPost}
          value={newPostText}
          cols="30"
          rows="3"
        ></textarea>
      </div>
      <button onClick={onAddNewPost} className={addPostButton}>
        add Post
      </button>
      <h3 className={title}>My posts</h3>
      <div>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
