import { useState } from "react";

import { Header } from "./components/Header";

import styles from './App.module.css';

type CardProps ={
  nameValue:string;
  time:string;
}
export function Card({nameValue,time}: CardProps) {
  
  return (
    <div className={styles.container}>
      <span> {nameValue}</span>
      <span>{time}</span> 
    </div>
  )
}

