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
           
              Category 1
          
          </span>
          <span className="postCat">
           
              Category 2
         
          </span>
        </div>
        <span className="postTitle">
       
            Title Of Task Done
         
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