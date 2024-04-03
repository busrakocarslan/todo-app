import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FcFullTrash } from "react-icons/fc";
import "../index.css";

function TodoList({ plans, setPlans }) {
  const handleClean = (id) => {
    setPlans(plans?.filter((app) => app.id !== id));
  };
  const handleLine = (id) => {
    setPlans(
      plans?.map((app) => (app.id === id ? { ...app, durum: !app.durum } : app))
    );
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
