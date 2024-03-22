// import React from "react";

// const Home = () => {
//   return (
//     <div className="main-container" style={{ marginLeft: "20rem" }}>
//       <div className="main-title">
//         <h3>DASHBOARD</h3>
//       </div>

//       <div className="main-cards">
//         <div className="card">
//           <div className="card-inner">
//             <h3>PRODUCTS</h3>
//           </div>
//           <h1>300</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CATEGORIES</h3>
//           </div>
//           <h1>12</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>CUSTOMERS</h3>
//           </div>
//           <h1>33</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>ALERTS</h3>
//           </div>
//           <h1>42</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const Home = () => {
  return (
    <Container sx={{ ml: "19.25rem", mt: "-2rem" }} style={{ width: "75%" }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        DASHBOARD
      </Typography>

      <Grid
        container
        spacing={3}
        style={{ display: "flex", flexDirection: "row", gap: "0.2rem" }}
      >
        <Grid item xs={6} sm={6} md={2.96}>
          <Card style={{ backgroundColor: "teal", color: "#fff" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                PRODUCTS
              </Typography>
              <Typography variant="h6">300</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.96}>
          <Card style={{ backgroundColor: "#2196f3", color: "#fff" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                CATEGORIES
              </Typography>
              <Typography variant="h6">185</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.96}>
          <Card style={{ backgroundColor: "violet", color: "#fff" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                CUSTOMERS
              </Typography>
              <Typography variant="h6">233</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.96}>
          <Card style={{ backgroundColor: "slateblue", color: "#fff" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                ALERTS
              </Typography>
              <Typography variant="h6">402</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: "2rem"}}>
        <div className="staked-bar-chart" style={{ width: "33.5rem" }}>
          <BarChart
            series={[
              { data: [300], stack: "A", label: "PRODUCTS", color: "teal" },
              { data: [185], stack: "B", label: "CATEGORIES", color: "#2196f3"},
              { data: [233], stack: "C", label: "CUSTOMERS", color: "violet" },
              { data: [402], stack: "D", label: "ALERTS", color: "slateblue" },
            ]}
            width={600}
            height={350}
          />
        </div>

        <div className="piechart">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 300, label: "PRODUCTS", color: "teal" },
                  { id: 1, value: 185, label: "CATEGORIES", color: "#2196f3" },
                  { id: 2, value: 233, label: "CUSTOMERS", color: "violet" },
                  { id: 3, value: 402, label: "ALERTS", color: "slateblue" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;

// import React from "react";
// import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { PieChart } from "@mui/x-charts/PieChart";

// const Home = () => {
//   return (
//     <Container sx={{ ml: "19.25rem", mt: "-2rem" }} style={{ width: "75%" }}>
//       <Typography variant="h3" sx={{ mb: 2 }}>
//         DASHBOARD
//       </Typography>

//       <Grid
//         container
//         spacing={3}
//         style={{ display: "flex", flexDirection: "row", gap: "0.2rem" }}
//       >
//         <Grid item xs={6} sm={6} md={3}>
//           <Card style={{ backgroundColor: "#f44336", color: "#fff" }}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 PRODUCTS
//               </Typography>
//               <Typography variant="h6">300</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={6} sm={6} md={3}>
//           <Card style={{ backgroundColor: "#2196f3", color: "#fff" }}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 CATEGORIES
//               </Typography>
//               <Typography variant="h6">12</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={6} sm={6} md={3}>
//           <Card style={{ backgroundColor: "#4caf50", color: "#fff" }}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 CUSTOMERS
//               </Typography>
//               <Typography variant="h6">33</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={6} sm={6} md={3}>
//           <Card style={{ backgroundColor: "#ff9800", color: "#fff" }}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 ALERTS
//               </Typography>
//               <Typography variant="h6">42</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2rem" }}>
//         <div className="staked-bar-chart" style={{ width: "33.5rem" }}>
//           <BarChart
//             series={[
//               { data: [300], stack: "A", label: "PRODUCTS", color: "#f44336" },
//               { data: [185], stack: "B", label: "CATEGORIES", color: "#2196f3" },
//               { data: [233], stack: "C", label: "CUSTOMERS", color: "#4caf50" },
//               { data: [402], stack: "D", label: "ALERTS", color: "#ff9800" },
//             ]}
//             width={600}
//             height={350}
//           />
//         </div>

//         <div className="piechart">
//           <PieChart
//             series={[
//               {
//                 data: [
//                   { id: 0, value: 300, label: "PRODUCTS" },
//                   { id: 1, value: 185, label: "CATEGORIES" },
//                   { id: 2, value: 233, label: "CUSTOMERS" },
//                   { id: 3, value: 402, label: "ALERTS" },
//                 ],
//               },
//             ]}
//             width={400}
//             height={200}
//           />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Home;
