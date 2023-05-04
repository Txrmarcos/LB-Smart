import styles from "../../styles/Todos.module.css";


import Link from "next/link";




export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos"); //consome a api

  const todos = await data.json(); //traduz a api para json

  //console.log(todos)

  return {
    props: { todos },  //tranforma em props cada 'todo'
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer:</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (                    //mapeia todas as todo e pega cada uma por id
          <li key={todo.id}>{todo.title} - <Link href={`/todos/${todo.id}`}>Ver mais</Link></li>
        ))}
      </ul>
    </>
  );
}
