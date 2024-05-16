import React from "react";
import s from "./CardProduct.module.scss";

export const CardProduct = ({ isActive, Model, onChange }) => {
  let classBox = isActive && ` ${s.active} `;
  classBox = classBox + ` ${s.wrap} `;
  return (
    <div className={classBox}>
      <div className={s.title}>{Model}</div>
      <div onClick={() => onChange()} className={s.button}>
        Config
      </div>
    </div>
  );
};
