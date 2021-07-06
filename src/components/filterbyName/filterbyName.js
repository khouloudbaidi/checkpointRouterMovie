import React from "react";
import { Form } from "react-bootstrap";

const filterbyName = ({ input, setInput }) => {
  return (
    <div>
      <Form.Control
        style={{ width: "400px" }}
        type="text"
        placeholder="Enter movie ..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
};

export default filterbyName;
