import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const Menu = () => {
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(true);
  const [myMenu, setMyMenu] = useState([]);

  const getMyMenu = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
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

  const handleClick = (id) => {
    navigateTo(`/food/${id}`);
  };

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
          <RingLoader color="goldenrod" size={200} />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "1rem",
            }}
          >
            {myMenu.recipes &&
              myMenu.recipes.map((menu) => (
                <Card
                  sx={{
                    maxWidth: "350px",
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "space-between",
                    gap: "2rem",
                    height: "100%",
                  }}
                  style={{ marginTop: "2rem" }}
                  key={menu.id}
                >
                  <CardActionArea onClick={() => handleClick(menu.id)}>
                    <CardMedia
                      style={{ maxHeight: "15rem" }}
                      component={"img"}
                      src={menu.image}
                      alt={menu.name}
                      onClick={() => handleClick(menu.id)}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom component={"div"}>
                        {menu.name.substring(0, 15)}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ height: "120px", overflow: "hidden" }}
                      >
                        {menu.instructions.length >= 3
                          ? `${menu.instructions[0]} ${menu.instructions[1]} ${menu.instructions[2]}  ${menu.instructions[3]}...`
                          : menu.instructions.join(" ")}
                      </Typography>
                      <br />
                      <div
                        style={{
                          backgroundColor: "DarkKhaki",
                          width: "80%",
                          borderRadius: "1rem",
                          textAlign: "center",
                          margin: "auto",
                        }}
                      >
                        <Typography
                          variant="body2"
                          style={{
                            padding: "0.5rem",
                          }}
                        >
                          <h3>Rating : {menu.rating}</h3>
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Menu;
