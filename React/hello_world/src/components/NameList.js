import React from 'react'
import Person from './Person'
function NameList() {
  const names = ["pepe_1", "pepe_2", "pepe_3"]
  const persons = [
    {
      id: 1,
      name: 'pepe_1',
      age: 30,
      skill: 'Gifs'
    },
    {
      id: 2,
      name: 'pepe_2',
      age: 25,
      skill: 'Jokes'
    },
    {
      id: 3,
      name: 'pepe_3',
      age: 200,
      skill: 'React'
    }
  ]

  // const personList = persons.map(person => <Person key = {person.id} person = {person}></Person>)
const NameList = names.map(name, index => <h2 key = {index}>{index}{name}</h2>)
  return (
    <div>
      {/* {personList} */}
      {NameList}
    </div>
  )
}


export default NameList
