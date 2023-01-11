import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar:{
        borderRadius: 15,
        margin: '30px 0',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba( 255, 255, 255, 0.4 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 5.5px )',
        webkitBackdropFilter: 'blur( 5.5px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        color: 'white',
        textDecoration: 'none !important'
    },
  heading: {
    fontFamily: "Courier New",
    color: 'white',
    textDecoration: 'none !important',
    marginLeft: '15px'
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    gap: '10px'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap:'20px',
  },
  logout:{
    margin:'10px',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));