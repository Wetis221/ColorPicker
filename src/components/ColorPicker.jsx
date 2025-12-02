import React, { useState, useEffect } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("Выбранный цвет:", color);
  }, [color]);

  return (
    <div className="color-picker">
      <div className="block" style={{ backgroundColor: color }}></div>
      <div className="color-picker_buttons">
      <button className="picker_btn btn-red" onClick={() => setColor("red")}>Red</button>
        <button className="picker_btn btn-green" onClick={() => setColor("green")}>Green</button>
        <button className="picker_btn btn-blue" onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
};

export default ColorPicker;