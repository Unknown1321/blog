import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
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
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((c) => (
            <Link to={`/?category=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

