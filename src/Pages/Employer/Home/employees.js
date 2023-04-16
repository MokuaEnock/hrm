import React from "react";
import { useParams } from "react-router-dom";

export default function EmployerEmployees() {
  let { id } = useParams();

  return <main>This is an employee</main>;
}
