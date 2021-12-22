import './Post.css';

const Post = (props) =>{
  return (
    <div className="post">
      <h1>{props.userId}</h1>
      <h3>{props.title}</h3>
      <div className="post_body">{props.body}</div>
    </div>
  );
}

export default Post;