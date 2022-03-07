import React from 'react';
import { SearchHeader } from ".";

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  Input,
  IconButton,
} from '@material-ui/core';
import GoldBtn from "../components/buttons/GoldBtn";
import InfoIcon from "../assets/infoicon_brown.png";
import TermsList from "../components/terms_lists/TermsList"

//--------------------------------------------------------------------------------------------

const AdvancedSearchTitle = styled.div`
    font-size: 30px;
    font-weight: 100;
    margin-bottom: 15px;
`

const FieldTitle = styled.div`
    font-size: 16px;
    width: 40%;
`

const TermsTitle = styled.div`
    font-size: 25px;
    font-weight: 500;
`

const Terms = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
    width:100%;
`

const useSearchStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 50,
    elevation: 0,
    alignItems: 'center',
    backgroundColor: '#FCF7EE',
  },
  iconButton: {
    padding: 10,
    marginLeft: 5,
  }
}));

//--------------------------------------------------------------------------------------------

//Advanced Search Form Component. Includes 'Search' Button.
const AdvancedForm = () => {
    const [term, setTerm] = React.useState("")
    const [display, setDisplay] = React.useState("Terms Dictionary")
    console.log(term)

    //Displays a list of searchable terms for each relevant field
    const TermsDictionary = () => {
        return (
        <div className='terms-dictionary'>
            <TermsTitle fontStyle="bold">{display}</TermsTitle>
            <Terms><TermsList name={term}/></Terms>
        </div>
        )
    }

    //Field Search Template for Criteria
    const FieldSearch = (props) => {
        const classes = useSearchStyles();

        function handleTerm() {
        setTerm(props.name);
        setDisplay(props.display);
        }

        //A function to take in the name of an imported image and return it as a styled image
        function Icon(props){
        return <img src={props.name} width="auto" height="20px"/>; 
        }

        return (
        <div>
            <Paper component="form" elevation={0} className={classes.root}>
            <FieldTitle>{props.title}</FieldTitle>
            <Input 
                placeholder={props.placeholder}
                name={props.name} 
                value={props.value}
                onChange={props.onChange}
                fullWidth  
            />
            <IconButton name={props.name} className={classes.iconButton} onClick={handleTerm}>
                <Icon name={InfoIcon}/>
            </IconButton> 
            </Paper>
        </div>
        )
    }

    //The Advanced Search Form
    const Form = () => {
        const [state, setState] = React.useState({
        ref: "",
        shape: "",
        fabric: "",
        artist: "",
        subject: "",
        pub: "",
        col: "",
        prov: "",
        })
        
        //Configure url paramaters to send to API in Search Results
        let param = "/search/?";
    
        if(state.ref){
            param = param + "&vaseRef=" + state.ref;
        }
        if(state.shape){
            param = param + "&shapeName=" + state.shape;
        }
        if(state.fabric){
            param = param + "&fabric=" + state.fabric;
        }
        if(state.artist){
            param = param + "&artist=" + state.artist;
        }
        if(state.subject){
            param = param + "&subject=" + state.subject;
        }
        if(state.pub){
            param = param + "&publications=" + state.pub;
        }
        if(state.col){
            param = param + "&collectionName=" + state.col;
        }
        if(state.prov){
            param = param + "&provenanceName=" + state.prov;
        }

        //Handle Change in Text Field
        function handleChange(event) {
            const value = event.target.value;
            setState({
                ...state,
                [event.target.name]: value
            });
            console.log("onChange: " + event.target.name + " - " + event.target.value)
            console.log("Url Parameter: "+ param)
        }
    
        return (
            <div class="row justify-content-center my5" style={{paddingTop: '80px'}}>
                <div class="col-lg-5" style={{paddingTop: '50px'}}>
                    <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>
                    {/*Component that displays each 'Field Line' in the Advanced Search Form. E.g. Vase Number: Enter here (InfoIcon).*/}
                    <FieldSearch name= 'ref'     value={state.ref}     onChange={handleChange}  placeholder= "Type Vase Reference No."  title= 'Vase Reference'     display='Reference Search Guide'/>
                    <FieldSearch name= 'shape'   value={state.shape}   onChange={handleChange}  placeholder= "Enter Shape Name"         title= 'Shape'              display='Shape Terms'/>
                    <FieldSearch name= 'fabric'  value={state.fabric}  onChange={handleChange}  placeholder= "Enter Fabric Name"        title= 'Fabric'             display='Fabric Terms'/>
                    {/*<FieldSearch name= 'artist'  value={state.artist}  onChange={handleChange}  placeholder= "Enter Artist Name"        title= 'Artist' />*/}
                    <FieldSearch name= 'subject' value={state.subject} onChange={handleChange}  placeholder= "Enter Vase Decription"    title= 'Subject'            display='Subject Search Guide'/>
                    <FieldSearch name= 'pub'     value={state.pub}     onChange={handleChange}  placeholder= "Enter Publication Name"   title= 'Publication Name'   display='Publications'/>
                    <FieldSearch name= 'col'     value={state.col}     onChange={handleChange}  placeholder= "Enter Collection Name"    title= 'Collection Name'    display='Collection Names'/>
                    <FieldSearch name= 'prov'    value={state.prov}    onChange={handleChange}  placeholder= "Enter Provenance Name"    title= 'Provenance'         display='Provenance Names'/>
            
                    {/*Search Button UrlParam*/ }
                    <br/><GoldBtn width='100%' name="Search" link={`${param}`}/>
                </div>
                <div class="col-lg-5">
                    <TermsDictionary/>
                </div>
            </div>
        );
    }

  return(
    <Form/>
  )

}

//Render the Advanced Search Page.
const AdvancedSearch =() => {
    return(
      <div className="advanced-search">
        <SearchHeader/>
        <AdvancedForm/> 
      </div>
    ); 
}

export default AdvancedSearch;
