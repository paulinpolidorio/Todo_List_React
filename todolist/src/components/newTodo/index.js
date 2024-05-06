import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";
const NewTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };
  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };
  const onchange = (event) => {
    setValue(event.target.value);
  };
  const onKeyDown = (event) => {
    if (event.which === 13) {
      submit();
    } else if (event.whitch === 27) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onchange}
      onKeyDown={onKeyDown}
    />
  );
};
NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
