import React from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Game Detail: {id}</h1>
    </div>
  );
};

export default GameDetail;
