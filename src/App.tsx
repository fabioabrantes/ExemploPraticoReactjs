import { useState } from "react";

import { Header } from "./components/Header";

import styles from './App.module.css';

type StudentType = {
  name: string;
  time: string;
}
function App() {
  const [nameUser, setNamUser] = useState("");
  const [student, setStudent] = useState<StudentType>({} as StudentType)
  const [students, setEstudents] = useState<StudentType[]>([] as StudentType[])

  function handlAddStudent() {

  }
  return (
    <div className={styles.container}>
      <Header title="Frequência dos alunos" />
      <input type="text" />
      <button onClick={() => { }}>alterar estado</button>

      <div className={styles.containerCards}>
        <Card nameValue={student.name} time={student.time} />
        <Card nameValue={student.name} time={student.time} />
        <Card nameValue={student.name} time={student.time} />
      </div>
    </div>
  )
}

export default App
