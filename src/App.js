import React, {useState} from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';

import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import GetCountryList from './GetCountryList';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });
  
  // write a GraphQL query that asks for names and codes for all countries
  const LIST_CONTINENTS = gql`
    {
        continents {
        name
        code
      }
    }
  `;
  
const App = () => {
    return (
        CountrySelect()
    )
}

function CountrySelect() {
    const [country, setCountry] = useState('AS');
    const [state, setState] = useState('1');
    const {data, loading, error} = useQuery(LIST_CONTINENTS, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        setState('2');
      }  
    const backToSelect = () => {
      setState('1');
    }  
    return (
    <div>
    {state === '1' &&
    <form onSubmit={handleSubmit}>  
       <FormControl  style={{minWidth:'438px'}}>
       <InputLabel htmlFor="age-more">Continents</InputLabel>
         <Select value={country} onChange={event => setCountry(event.target.value)}
        >
            {data.continents.map(continent => (
               <MenuItem key={continent.code} value={continent.code}>{continent.name}</MenuItem>
        ))}
        
        
        </Select>
        
      </FormControl>
      <br></br><br />
      <FormControl  style={{minWidth:'438px'}}>
      <Button type="submit" style={{color:'white',backgroundColor:'green'}}>
            Submit
          </Button>
      </FormControl>    
      </form>
    }
    {state === '2' && <GetCountryList continent_code={country} />}
    {state === '2' && 
    <Button onClick={backToSelect} style={{color:'white',backgroundColor:'green'}}>Back</Button>
    }
      </div>
    );
  }

export default App;
