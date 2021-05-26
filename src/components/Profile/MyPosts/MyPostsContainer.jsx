import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = ({ profilePage }) => profilePage;

const MyPostContainer = connect(mapStateToProps, {
  addPost
})(MyPosts);

export default MyPostContainer;
