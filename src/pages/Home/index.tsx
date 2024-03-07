import { useState } from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import styles from './Home.module.css';

type StudentType = {
  name: string;
  time: string;
}
export function Home(){
  const [nameUser, setNameUser] = useState("");
  const [students, setEstudents] = useState<StudentType[]>([] as StudentType[])

  function handleName(name: string) {
    setNameUser(name);
  }
  function handleAddStudent() {
    const newStudent = {
      name: nameUser,
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    /* const arraytemp = students;
    arraytemp.push(newStudent);
    setEstudents(arraytemp); */
    setEstudents((anterior) => [...anterior, newStudent]);
    setNameUser("");

  }
  return (
    <div className={styles.container}>
      <Header title="Frequência dos alunos" />
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={(event) => handleName(event.target.value)}
        value={nameUser}
      />
      <button onClick={handleAddStudent}>cadastrar discente</button>

      <div className={styles.containerCards}>
        {
          students.length > 0 ?
            students.map(student => (
              <Card nameValue={student.name} time={student.time} key={student.time} />
            ))
            :
            <strong>não existes discente cadastrado</strong>
        }
      </div>
    </div>
  )
}
