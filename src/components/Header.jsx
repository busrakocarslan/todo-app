import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FloatingLabel } from "react-bootstrap";
import "../index.css"

function Header({plan,setPlan,newPlan}) {
    const handlePlan=(e)=>{
        setPlan(e.target.value)
        console.log(plan);
    }
    const handleClick=()=>{        
       newPlan()
        
    }
  return (
    <div className="w-50 text-center m-auto mt-5 pt-5">
      <h1 className="pb-4 text-warning">TODO APP</h1>
      <div>
      <InputGroup className="mb-3 ">
      <FloatingLabel
        controlId="floatingInput"
        label="Planing..."
        className="m-auto"
      >
        <Form.Control
         className="text-dark btn text-start"
          placeholder="Planing..."
          aria-label="Recipient's username"
          autoFocus
          onChange={handlePlan}
          value={plan}
        />
        </FloatingLabel>
        <Button variant="outline-warning" id="button-addon2" type="submit" className="ms-2" onClick={handleClick}>
          Add ToDo
        </Button>
      </InputGroup>
      <hr />
      </div>
    </div>
  );
}

export default Header;
