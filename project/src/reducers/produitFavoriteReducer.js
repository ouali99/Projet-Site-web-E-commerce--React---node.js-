
import React from "react";

const produitFavoriteReducer = (state, action) => {
  switch (action.type) {
    case "APF": {
      let result = state.produitsFavoris.filter((t) => t._id === action.pFavoris._id);
      if (result.length > 0)
      return { 
        ...state, 
        produitsFavoris: state.produitsFavoris.filter((t) => t._id !== action.pFavoris._id) 
      };
      else 
      return { 
        ...state, 
        produitsFavoris: [...state.produitsFavoris, action.pFavoris] 
      };
      
    }
    case "RESET":{
      return { ...state, produitsFavoris: [] };
    }
    default: {
      return new Error("Action non reconnue");
    }
  }
};

export default produitFavoriteReducer;
