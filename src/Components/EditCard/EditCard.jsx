import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";

const EditCard = () => {
  const { id } = useParams();
  const { getCardDetails, productsDetails, editCardFunc } =
    useContext(productContext);

  const [editTitle, setEditTitle] = useState(productsDetails.title);
  const [editDescription, setEditDescription] = useState(
    productsDetails.description
  );
  const [editImg1, setEditImg1] = useState(productsDetails.img1);
  const [editImg2, setEditImg2] = useState(productsDetails.img2);
  const [editImg3, setEditImg3] = useState(productsDetails.img3);
  const [editPrice, setEditPrice] = useState(productsDetails.price);
  const [editType, setEditType] = useState(productsDetails.type);

  useEffect(() => {
    getCardDetails(id);
  }, []);

  //функция, которая собирает все данные в одну
  const handleClick = () => {
    let editedProductsDetails = {
      title: editTitle,
      description: editDescription,
      image: editImg1,
      price: editPrice,
      type: editType,
    };
    editCardFunc(id, editedProductsDetails);
  };

  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Название"
        variant="outlined"
        value={editTitle}
        name="title"
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Тип"
        variant="outlined"
        value={editType}
        name="type"
        onChange={(e) => setEditType(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        value={editPrice}
        name="price"
        onChange={(e) => setEditPrice(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        value={editDescription}
        name="description"
        onChange={(e) => setEditDescription(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 1"
        variant="outlined"
        value={editImg1}
        name="img1"
        onChange={(e) => setEditImg1(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 2"
        variant="outlined"
        value={editImg2}
        name="img2"
        onChange={(e) => setEditImg2(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 3"
        variant="outlined"
        value={editImg3}
        name="img3"
        onChange={(e) => setEditImg3(e.target.value)}
      />
      <NavLink to="/list">
        <Button type="submit" variant="contained" onClick={handleClick}>
          Save
        </Button>
      </NavLink>
    </form>
  );
};

export default EditCard;
