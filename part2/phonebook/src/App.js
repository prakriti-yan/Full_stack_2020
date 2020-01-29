import React, { useState, useEffect } from 'react';
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/number'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  // includes() method is used to find the filter in the name information.
  const filteredPerson = 
    persons.filter(persons=> persons.name.toUpperCase().includes(newFilter.toUpperCase()));
  
  const handleNameChange = (event) =>{
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) =>{
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) =>{
    console.log('filter is', event.target.value);
    setNewFilter(event.target.value);
  }

  const addNumber = (event) =>{
    event.preventDefault()
    const duplicate = persons.filter(person => person.name === newName)
    console.log('duplicate is ', duplicate)
    if (duplicate.length !== 0){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const id = duplicate[0].id
        const target = persons.find(n=>n.id === id)
        const changedPerson = {...target, number: newNumber}

        personService
        .update(id, changedPerson)
        .then(returnedPerson=>{
          setPersons(persons.map(person=>person.id !==id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
      alert(`${newName} is already added to phonebook`);
    }else{
    const nameObject = {
      name: newName,
      number: newNumber
    }
    personService
    .create(nameObject)
    .then(returnedPerson =>{
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
  }}

  useEffect(()=>{
    personService
    .getAll()
    .then(initialPersons =>{
      setPersons(initialPersons)
    })
    },[])


    const removePerson = (id, name) => () => {
      if (window.confirm(`Delete ${name}?`)){
      personService.deleteItem(id)
      setPersons(persons.filter(person=>person.id!==id))}
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter = {newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addNumber={addNumber} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filteredPerson={filteredPerson} handleClick = {removePerson}/>
    </div>
  )
}

export default App;
