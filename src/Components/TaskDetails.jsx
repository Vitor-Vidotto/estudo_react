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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          laboriosam, consectetur placeat, sequi quia mollitia esse deserunt
          iusto error quibusdam inventore earum quas minima illum doloremque
          temporibus aut odio quo?
        </p>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
    </>
  );
};

export default TaskDetails;
