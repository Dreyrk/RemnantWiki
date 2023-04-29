import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // On recup la value dans le localstorage
  const saved = localStorage.getItem(key);
  // on la convertis
  const initial = JSON.parse(saved);
  // on renvoit soit la value convertis, soit la value donnée par defaut.
  return initial || defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
  // Le hook personnalisé gère une value et son setteur.
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // Au lancement, soit on a récupéré une value et on l'enregistre
    // soit on stocke une value par defaut
    localStorage.setItem(key, JSON.stringify(value));
    // si la value, on met à jour le local storage
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
