import React, { useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import styles from "./App.module.scss";
import ProduitsFavorisContext  from "./contexts/ProduitFavorisContext";
import { Outlet } from "react-router-dom";


const App = () => {
  // const [state, dispatch] = useReducer(produitFavoriteReducer, {
  //   produitsFavoris:[],
  //   })
    const [page, setPage] = useState("home");
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  // useEffect( () => {
  //   const getProduits = async () => {
  //     fetch("http://localhost:5000/produits").then(response => {
  //       if(response.ok){
  //         response.json().then(data => setProduits(data));
  //       }
  //     })
  //     .catch((e) => console.log(e));
  //   };
  //   getProduits();
  // },[]);
  
  const handleAjusterProduitFavoris = (item) => {
    let result = produitsFavoris.filter((t) => t._id === item._id);
    if (result.length > 0)
      setProduitsFavoris(produitsFavoris.filter((t) => t._id !== item._id));
    else setProduitsFavoris([...produitsFavoris, item]);
  };

  // const ajusterProduitFavoris =(item) =>{
  //   dispatch({
  //     action: "APF",
  //     pFavoris : item,
  //   });
  // }

  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <ProduitsFavorisContext.Provider 
      value = {{ data: produitsFavoris, setData: handleAjusterProduitFavoris}}>
      <Header setProduitsFavoris={setProduitsFavoris} setPage = {setPage}/>
      <Banner />
      <Outlet />
      </ProduitsFavorisContext.Provider>
      <Footer />
      
    </div>
  );
};

export default App;
