import React, {useState} from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';
import GridLayout from "react-grid-layout";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// initialize a GraphQL client

 const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });
  

function GetCountryList(props){
    const { continent_code } = props;
    // alert(continent_code);
    
    const LIST_COUNTRIES = gql`
    {countries(filter: { continent: { eq: "${continent_code}" } }){
        name
        code
        native
        capital
        emoji
        currency
        continent {
          code
          # name
        }
        languages {
          code
          name
        }
      }
    }
  `;
//   alert(q);
    const [country, setCountry] = useState('US');
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
    const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
        return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
      });
    return (

<List>
    {data.countries.map(country => (
    <ListItem xs={12}>
    <Grid container spacing={1} alignItems="flex-start" direction="row" justifyContent="center">
      <Grid item xs={1} md={1}> Code :{country.code}</Grid>
      <Grid item xs={4} md={2}> Name : {country.name}</Grid>
      <Grid item xs={2} md={2}> Currency :{country.currency}</Grid>
      <Grid item xs={5} md={6}> languages :{
           country.languages.map(lang => (
                         <p>{lang.name}</p>
                     ))
       }</Grid> 
    </Grid>
    </ListItem>
    ))}
</List>
    );
} 

export default GetCountryList;