"use client";
import { REGex} from "@/constants/constantNewPage";
import { createContext, useState } from "react";

export const NewContext = createContext({});

export const NewPageProvider = ({ children }) => {
  const [isSale, setIsSale] = useState(false);
  const [isExchange, setIsExchange] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidSellerName, setIsValidSellerName] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);
  const [isValidProvince, setIsValidProvince] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);
  const [cities, setCities] = useState([]);
  const [file, setFile] = useState([]);
  const [imageUrl, setImageUrl] = useState('')
  const [values, setValues] = useState({
    name: "",
    sellername: "",
    phonenumber: "",
    price: "",
    preferedExchange: "",
    moreInfo: "",
    platformId: "",
    cityId: "",
    provinceId: "",
    exchange: "",
  });

  const onChange = (e) => {
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
        setImageUrl
      }}
    >
      {children}
    </NewContext.Provider>
  );
};
