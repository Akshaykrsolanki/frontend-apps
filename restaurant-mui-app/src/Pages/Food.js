import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { RingLoader } from "react-spinners";

function Food() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [menu, setMyMenu] = useState();

  const getMyMenu = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
      console.log(res.data);
      setMyMenu(res.data);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      getMyMenu(); // Fetch data only when loading is false
    }
  }, [loading]);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
          minHeight: "100vh", // Set minimum height to fill the viewport
        }}
      >
        {loading ? (
          <RingLoader color="#36d7b7" size={200} />
        ) : menu ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "70%",
                flexDirection: "row",
              }}
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  m: 2,
                }}
              >
                <CardActionArea
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    height: "20rem",
                    padding: "3rem",
                  }}
                >
                  <CardMedia
                    sx={{ width: "30%", height: "15rem" }}
                    component={"img"}
                    src={menu.image}
                    alt={menu.name}
                  />
                  <CardContent sx={{ width: "70%", paddingLeft: 2 }}>
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                    <Typography variant="body2">{menu.instructions}</Typography>{" "}
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8rem",
                      }}
                    >
                      <div>
                        <Typography variant="body2">
                          <h3>
                            Total Cooking Time :{" "}
                            <span style={{ color: "blueviolet" }}>
                              {menu.cookTimeMinutes}
                            </span>
                          </h3>
                        </Typography>
                        <br />
                        <Typography variant="body2">
                          <h3>
                            Total Prepare Time :{" "}
                            <span style={{ color: "blueviolet" }}>
                              {menu.prepTimeMinutes}
                            </span>
                          </h3>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2">
                          <h3>
                            Rating :{" "}
                            <span style={{ color: "blueviolet" }}>
                              {menu.rating}
                            </span>
                          </h3>
                        </Typography>
                        <br />
                        <Typography variant="body2">
                          <h3>
                            Cuisine :{" "}
                            <span style={{ color: "blueviolet" }}>
                              {menu.cuisine}
                            </span>
                          </h3>
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        ) : (
          <Typography variant="body1"></Typography>
        )}
      </Box>
    </Layout>
  );
}

export default Food;
