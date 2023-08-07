import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();
  const handleBackButtonClick = () => {
    history.goBack(); //editar
  };

  return (
    <>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Se essa task foi adicionada focar em realiza-la em tempo hábil,
          estudar e revisar as que forem completas desse modo evitar problemas
          futuros
        </p>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
    </>
  );
};

export default TaskDetails;
