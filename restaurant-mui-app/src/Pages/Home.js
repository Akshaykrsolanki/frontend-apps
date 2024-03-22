// import React from "react";

// import { Link } from "react-router-dom";
// import "../Components/Styles/homeStyles.css";
// import Layout from "../Components/Layout/Layout";

// const Home = () => {
//   return (
//     <Layout>
//       <div className="home" style={{ backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1683746276448-a566c996bcc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})` }}>
      
//         <div className="headerContainer">
//           <h1>Food Website</h1>
//           <p>Best Food In India</p>
//           <Link to="/menu">
//             <button>ORDER NOW</button>
//           </Link>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
















import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../Components/Styles/homeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Foods in India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;