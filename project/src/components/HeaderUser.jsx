import React, { useContext } from "react";
import HeaderMenu from "./Header/components/HeaderMenu/HeaderMenu";
import Connexion from "./Header/components/Connexion/Connexion";
import styles from "./Header/Header.module.scss";
import ProduitsFavorisContext from "../contexts/ProduitFavorisContext";

// eslint-disable-next-line react-refresh/only-export-components
const HeaderUser = ({
    setShowMenu,
    setShowConnexion,
    showMenu,
    showConnexion,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleOnClickConnexion,
    handleOnClickDeconnexion,
    emailInput,
    passwordInput,
    user}) =>{
    const produitsFavoris = useContext(ProduitsFavorisContext);
    return(
        <>
        <ul>
        <li>
          <span className={styles.produitsFavoris}>
            {produitsFavoris.data.length}
          </span>
          <i
            onClick={() => {
              setShowMenu(true);
              setShowConnexion(false);
            }}
            className="fa-solid fa-bag-shopping fa-xl panier hover_opacity"
          ></i>
        </li>
        <li className="mr-15">
          <i
            onClick={() => {
              setShowMenu(false);
              setShowConnexion(true);
            }}
            className="fa-solid fa-user fa-xl connexion hover_opacity"
          ></i>
        </li>
      </ul>

      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu produitsFavoris={produitsFavoris.data} />
        </>
      )}
      {showConnexion && (
        <>
          <div onClick={() => setShowConnexion(false)} className="calc"></div>
          <Connexion
            handleEmail={handleOnChangeEmail}
            handlePassword={handleOnChangePassword}
            handleDeconnexion={handleOnClickDeconnexion}
            handleConnexion={handleOnClickConnexion}
            email={emailInput}
            password={passwordInput}
            user={user}
          />
        </>
      )}
        </>
    )
}
export default HeaderUser;