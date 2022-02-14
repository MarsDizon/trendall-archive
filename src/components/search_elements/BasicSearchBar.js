import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Paper, InputBase, IconButton, TextField, MenuItem, } from '@material-ui/core';

//-------------------------------------------------------------

//Style for the Basic Search Bar Components.
const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
    height: 55,
    borderRadius: '10px 10px 10px 10px',
    elevation: 0,
    alignItems: 'center',
    '& .MuiTextField-root': {
      display: 'flex',
      marginTop: '0px',
      textIndent: 15,
      height: 55,
      width: '20ch',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: '10px 0px 0px 10px',
      backgroundColor: '#F6E7CB',   
      '&:hover': {
        backgroundColor: '#EBD3A5',
      },
    }
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    marginRight: 10,
  },  
}));

//-------------------------------------------------------------

//Renders Dropdown Menu with all Criteria Fields, Renders Basic Search Bar
const BasicSearchBar = () => {
  const classes = useSearchStyles();

  //States for the Dropdown Field and for Input Field
  const [field, setField] = React.useState('vaseRef');
  const [input, setInput] = React.useState('');

  //Handles the Change in the Dropdown Field
  const handleField = (event) => {
    setField(event.target.value);
  };

  //Handles the Change in the Input Field
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  //Dropdown Field Menu Items
  const fields = [
      { value: 'vaseRef',      label: 'Vase Number' },
      { value: 'shapeName',  label: 'Shape' },
      { value: 'fabric',      label: 'Fabric' },
      { value: 'subject',     label: 'Subject' },
      { value: 'publications', label: 'Publication' },
      { value: 'collectionName',  label: 'Collection' },
      { value: 'provenanceName',  label: 'Provenance' },
  ];

  //Returns the Basic Search Bar
  return (
    <>
    <Paper component="form" elevation={0} className={classes.root}>

        {/* Dropdown Fields*/}
        <TextField id="outlined-select-field" select value={field} onChange={handleField} InputProps={{ disableUnderline: true }} >
          {fields.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Basic Search Input Bar */}
        <InputBase
          className={classes.input}
          value={input}
          onChange={handleInput}
          placeholder="Search the Trendall Archive in the left field..."
        />

        {/* Basic Search Icon Button */}
        <IconButton type="submit" className={classes.iconButton} aria-label="search" 
          href ={`/search/?${field}=${input}`}
          style={{ backgroundColor: '#DAA844' }}
          padding="500px"
        >
          <SearchIcon style={{ color: 'white' }}/>
        </IconButton> 
  
    </Paper>
    </>
  )
}

export default BasicSearchBar