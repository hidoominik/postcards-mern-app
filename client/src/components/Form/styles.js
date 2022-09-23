import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: 'rgba( 255, 255, 255, 0.4 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 5.5px )',
    webkitBackdropFilter: 'blur( 5.5px )',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    color: 'white'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
   
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    
  },
  multilineColor:{
    color:'white',
  },
  textFieldStyle:{
    borderColor: 'white',
   
  }
}));
