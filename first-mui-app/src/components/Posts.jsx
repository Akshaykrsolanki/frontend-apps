import React, { useState, useEffect } from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import axios from "axios";

const Posts = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      {myData.products &&
        myData.products.map((data) => (
          <Card sx={{ margin: 0 }} style={{ marginTop: "4rem" }} key={data.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  A
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={data.title}
              subheader={data.brand}
              // subheader="February 08, 2024"
            />
            <CardMedia
              component="img"
              height="20%"
              image={data.thumbnail}
              alt="Ketogenic Diet"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        ))}
    </>
  );
};

export default Posts;
