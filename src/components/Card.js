import { useState, useEffect } from "react";
import style from "../styles/Card.module.scss";
import { AiFillContacts, AiFillMail, AiFillPhone } from "react-icons/ai";
import randomUser from "../helpers/randomUser.js";

const Card = () => {
  const [info, setInfo] = useState("null");
  const [show, setShow] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    randomUser(setInfo);
    setShow("");
  }, [click]);

  return (
    <div className={`${style.Card}`}>
      <div className={`${style.Card__ImageContainer}`}>
        <img
          className={`${style.Card__Image}`}
          alt={info.first}
          src={info.picture}
        />
      </div>

      <div className={`${style.Card__text}`}>
        <span className={`${style.Card__Name}`}>{`${info.title || ""} ${
          info.first || ""
        } ${info.last || ""}`}</span>
        <span className={`${style.Card__Gender}`}>{info.gender}</span>
      </div>

      <div className={`${style.Card__Contact}`}>

        <span className={`${style.Card__Show}`}>{show}</span>

        <div className={`${style.Card__Buttons}`}>
          <AiFillContacts className={`${style.Card__Button}`} onMouseEnter={() => setShow(info.age)} />
          <AiFillMail className={`${style.Card__Button}`} onMouseEnter={() => setShow(info.email)} />
          <AiFillPhone className={`${style.Card__Button}`} onMouseEnter={() => setShow(info.phone)} />
        </div>

      </div>

      <button className={`${style.Card__Click}`} onClick={() => setClick(!click)}>click</button>
    </div>
  );
};

export default Card;
