import React, { useState } from "react";
import styles from "../../Produits.module.scss";
import ProduitsFavorisContext from "../../../../../../contexts/ProduitFavorisContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";


const Produit = ({ data, saved, supprimerUnProduit }) => {
  const { _id,image, name, price, brand } = data;
  const produitFavorisContext = useContext(ProduitsFavorisContext);

  const handleClickSaved = (item) => {
    produitFavorisContext.setData(item);
  };

  return (
    <div onClick={() => handleClickSaved(data)} className={`${styles.produit}`}>
      <div
        className={styles.delete_edit}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <i
          onClick={() => supprimerUnProduit(_id)}
          className={`${styles.fa_trash} fa-solid fa-trash`}
        ></i>
        <NavLink to={`/admin/edit/${_id}`}>
          <i className={`${styles.fa_pen} fa-solid fa-pen-to-square`}></i>
        </NavLink>
      </div>
      <div className="hover_opacity">
        <div>
          <img src={image} alt={name} />
        </div>
        <div className={styles.description_produit}>
        <h3>{name}</h3>
        <p>{price} $</p>
        <p>{brand}</p>
        <i className={`fa-solid fa-xl fa-heart ${saved ? styles.item_saved : ""}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Produit;
