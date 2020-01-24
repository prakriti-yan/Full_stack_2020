import React, { useState } from 'react';
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }]) 
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
    const same = persons.filter(person => person.name === newName)
    if (same.length !== 0){
      alert(`${newName} is already added to phonebook`);
    }else{
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter = {newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addNumber={addNumber} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filteredPerson={filteredPerson}/>
    </div>
  )
}

export default App;
