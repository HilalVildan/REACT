import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyles'

const Header = ({setQuery, setOgün, getData}) => {


  const yapSubmit = (e) => {
    e.preventDefault();
    getData();
  }


  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <FormContainer onSubmit={yapSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type='submit'>SEARCH</Button>
        <Select
          name="ögünTypes"
          id="ögünTypes"
          onChange={(e) => setOgün(e.target.value)}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
}

export default Header