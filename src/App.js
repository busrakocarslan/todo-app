import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "react-bootstrap";

function App() {
  const [plan, setPlan] = useState("");
  const [plans, setPlans] = useState([]);
  let newPlan = () => {
    const trimPlan=plan.trim()
    // newPlan fonksiyonunu parentte belirleyip onClick de çağırdım.
    const addTodo = {
      id: uuidv4(),
      title: plan,
      durum:false
    };
    if (trimPlan?.length) {//PLAN?.LENGTH? ŞEKLİNDE YAZDIM AMA HATA VERDİ

      setPlans([...plans, addTodo]);
    } else {
      alert("boş giriş yapılamaz");
    }

    setPlan(""); // inputların boşalması için
  };

  return (
    <div>
      <Header plan={plan} setPlan={setPlan} newPlan={newPlan} />
      <TodoList plans={plans} setPlans={setPlans} newPlan={newPlan} />
    </div>
  );
}

export default App;
