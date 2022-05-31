import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";

const CardDetails = () => {
  const { id } = useParams();
  const { getCardDetails, productsDetails, deleteCard } =
    useContext(productContext);

  useEffect(() => {
    getCardDetails(id);
  }, [id]);
  console.log(productsDetails);
  console.log(productsDetails, "details");
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <img id="imgCards" src={productsDetails.img1} alt="img" />
        </div>
        <p>{productsDetails.title}</p>
        <p>{productsDetails.type}</p>
        <p>{productsDetails.price}</p>
        <p>{productsDetails.description}</p>
        <div>
          <NavLink to={`/edit/${id}`}>
            <button className="btnCrud" id="edit">
              ✏️
            </button>
          </NavLink>

          <NavLink to="/list">
            <button className="btnCrud" id="del" onClick={() => deleteCard(id)}>
              🗑
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
