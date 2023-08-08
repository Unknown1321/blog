import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Finished Tasks</span>
        <span className="headerTitleLg">STATUS</span>
      </div>
      <img
        className="headerImg"
        src="https://workablehr.s3.amazonaws.com/uploads/photos/301908/67c881a19cebf7c23ef421f7dd44008d.png"
        alt=""
      />
    </div>
  );
}