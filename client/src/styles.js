import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
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
        color: 'white'
    },
    heading:{
        color: 'rgba(0,183,255,1)',
    },
    image:{
        marginLeft:'15px',

    },
    [theme.breakpoints.down('sm')]:{ //CSS for small devices
         mainContainer: {
            flexDirection:"column-reverse"
        }
    }
   

}));