import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://careers.keylane.com/wp-content/uploads/2022/11/keylane-logo.png"
          alt=""
        />
        
        <p>Our knowledge and experience spans a diverse collective of IT professionals, industry enthusiasts, trusted partners and creative developers who share our mission to develop solutions that empower insurance and pension providers to transform through technology.</p>

        <p>Centred around three core commitments, our mission is to:</p>

        <p>Deliver results by optimising today’s business processes to stay agile and future-fit.
        Unburden our customers so they can focus on their core business ambitions.
        Enable transformation so that our customers always remain competitive.
        At Keylane, we work with you to develop flexible, agile, and scalable solutions that meet changing industry demands and sharpen your competitive edge.</p>

        <p>More and more companies are seeing that adapting with Keylane’s SaaS is the answer to ensuring continued growth and future success in an increasingly unpredictable world.</p>

        
        
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FACTS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
       
              Scrum
 
          </li>
          <li className="sidebarListItem">
           
              Java
          
          </li>
          <li className="sidebarListItem">
          
              Teamwork
          
          </li>
        
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}