import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
          <Link className="link" to="/posts?cat=Category1">
          Category 1
            </Link>
              
          
          </span>
          <span className="postCat">
           
          <Link className="link" to="/posts?cat=Category2">
          Category 2
            </Link>
         
          </span>
        </div>
        <span className="postTitle">
            <Link className="link" to="/posts?cat=Title">
              Title Of Task Done
            </Link>
            
         
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Description of the task
      </p>
    </div>
  );
}