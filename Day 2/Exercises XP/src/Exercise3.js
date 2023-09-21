import React, { Component } from "react";
import "./Exercise.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const h1Style = {
  color: "red",
  backgroundColor: "lightblue",
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={h1Style}>This is a Header</h1>
        <p>This is a paragraph</p>
        <a href="https://www.example.com">This is a link</a>
        <form>
          <label>
            <h1 style={style_header}>This is a Form:</h1>
            <p>Enter you name:</p>
            <input type="text" name="name" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>Here is an Image:</p>
        <img
          src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
          alt="Example"
        />

        <p>This is a List:</p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
