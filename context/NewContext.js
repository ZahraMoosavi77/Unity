"use client";
import { REGex} from "@/constants/constantNewPage";
import { createContext, useState } from "react";
export const NewContext = createContext({});
export const NewPageProvider = ({ children }) => {
  const [isSale, setIsSale] = useState(false);
  const [isExchange, setIsExchange] = useState(false);
  const [isValidName, setIsValidName] = useState('-');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState('-');
  const [isValidSellerName, setIsValidSellerName] = useState('-');
  const [isValidPrice, setIsValidPrice] = useState('-');
  const [isValidProvince, setIsValidProvince] = useState('-');
  const [isValidCity, setIsValidCity] = useState('-');
  const [isValidPlatform, setIsValidPlatform] = useState('-');
  const [cities, setCities] = useState([]);
  const [file, setFile] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [gameLocation, setGameLocation] = useState({});
  const [centerCity,setCenterCity] = useState([35.68804331563681, 51.38883302970867]);
  const [values, setValues] = useState({
    name: "",
    sellername: "",
    phonenumber: "0",
    price: "",
    preferedExchange: "",
    moreInfo: "",
    platformId: "",
    cityId: "",
    provinceId: "",
    exchange: "",
    locId:"",
  });

  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "name") setIsValidName(true);
    if (e.target.name === "sellername") setIsValidSellerName(true);
    if (e.target.name === "price") setIsValidPrice(true);
    if (e.target.name === "phonenumber") {
      const result = REGex.test(e.target.value);
      if (!result && !values.phonenumber.trim()) setIsValidPhoneNumber(false);
      if (result && values.phonenumber.trim()) setIsValidPhoneNumber(true);
    }
  };
 
  return (
    <NewContext.Provider
      value={{
        cities,
        setCities,
        isSale,
        setIsSale,
        isExchange,
        setIsExchange,
        isValidName,
        setIsValidName,
        isValidPhoneNumber,
        setIsValidPhoneNumber,
        isValidSellerName,
        setIsValidSellerName,
        isValidPrice,
        setIsValidPrice,
        isValidProvince,
        setIsValidProvince,
        isValidCity,
        setIsValidCity,
        onChange,
        values,
        setValues,
        file,
        setFile,
        imageUrl,
        setImageUrl,
        gameLocation,
        setGameLocation,
        centerCity,
        setCenterCity,
        isValidPlatform,
        setIsValidPlatform,
        setIsValidPhoneNumber,
      }}
    >
      {children}
    </NewContext.Provider>
  );
};
