import {
  Button,
  CardActions,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";
import "./ProductsList.css";

// useEffect(() => {
//   getCardDetails(id);
// }, []);
// console.log(productsDetails, "details");

const ProductsList = () => {
  const { getProducts, products, deleteCard, getCardDetails } =
    useContext(productContext);
  // const { id } = useParams();

  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);
  return (
    <>
      <div className="cardlist">
        {products.map((item) => (
          <Card className="eachcard" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                width="270"
                image={item.img1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" onClick={() => deleteCard(item.id)}>
                Удалить
              </Button>

              <NavLink to={`details/${item.id}`}>
                <Button size="small">Подробнее</Button>
              </NavLink>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
