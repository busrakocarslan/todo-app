import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FcFullTrash } from "react-icons/fc";
import "../index.css";
import { addLocal } from "../helpers/unitl";

function TodoList({ plans=[], setPlans }) {//plansı direk [] atayıp error vermesi engellendi
  const handleClean = (id) => {
    const deneme=plans?.filter((app) => app.id !== id);    
    setPlans(deneme)
    addLocal("planlar",JSON.stringify(deneme))

  };
  const handleLine = (id) => {
    const deneme=plans?.map((app) => (app.id === id ? { ...app, durum: !app.durum } : app))
    setPlans(deneme);
    addLocal("planlar",JSON.stringify(deneme))
  };
  return (
    <div className="w-50 m-auto div">
      <ul className="w-100 m-auto list-unstyled">
        {plans.map((plan) => (
          <li
            onDoubleClick={() => handleLine(plan.id)}
            className={`p-1 pe-4 ${plan.durum ? 'completed': ''}`}// backtick ile yapman gerek yoksa olmuyor true durumunda completed sınıfı ekliyorsun
            key={plan.id}
          >
            <span>
              <GoArrowRight />
              {plan.title}{" "}
            </span>
            <FcFullTrash type="button" onClick={() => handleClean(plan.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
