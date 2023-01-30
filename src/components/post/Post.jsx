import "./post.css";
import {  Bookmark } from "@material-ui/icons";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
//import { Users } from "../../dummyData";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post(post) {
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  const [save, setSave] = useState(0)
  const [isSaved, setIsSave] = useState(false)

  const saveHandler = () => {
    setSave(isSaved ? save -1 : save +1)
    setIsSave(!isSaved)

  }
  return (
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Titulo de publicacion</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <img className="postImg" src="data:image/jpeg;base64,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"alt="" />
        <Button variant="primary">Comentar</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        2 days ago
           <div className="postBottomLeft">
           <ThumbUpIcon className="sidebarIcon" onClick={likeHandler} >
            </ThumbUpIcon>  
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomLeft">

          <Bookmark className="sidebarIcon" onClick={saveHandler} >
            </Bookmark>            <span className="postLikeCounter">{save} Save it</span>
          </div>

      </Card.Footer>
    </Card>
  );
}

export default Post;


/*
export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <Bookmark className="sidebarIcon" onClick={likeHandler} >
            </Bookmark>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
*/