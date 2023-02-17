import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    glassMorph:{
        background: 'rgba( 255, 255, 255, 0.4 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 5.5px )',
        webkitBackdropFilter: 'blur( 5.5px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        color: 'white',
        borderRadius: 15,
    },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
    
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    background: 'rgba( 255, 255, 255, 0.4 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 5.5px )',
    webkitBackdropFilter: 'blur( 5.5px )',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    color: 'white',
    borderRadius: 15,
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));