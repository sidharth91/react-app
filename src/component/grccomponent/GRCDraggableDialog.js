import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import GRCReportTableDialogue from './GRCReportTableDialogue'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TocIcon from '@material-ui/icons/Toc';
import CloseIcon from '@material-ui/icons/Close';
import { lighten, makeStyles } from '@material-ui/core/styles';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles((theme) => ({
  dialoguewidth:{
    maxWidth:'inherit'
  }
}));


const GRCDraggableDialog=(props)=>{

const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    setOpen(props.dialogueState);
    setData(props.data==undefined?[]:props.data)
}, [props])

  const handleClickOpen = () => {
    setOpen(props.dialogueState);
   
  };

  const handleClose = () => {
    props.closeDialogue()
  };

  return (

      <Dialog
      classes={{
        paper:classes.dialoguewidth
      }}
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
          <Grid container spacing={1}>
          <Grid item md={11}>
            <DialogTitle style={{ cursor: 'move', maxHeight: 10, fontFamily: 'Helvetica', fontSize: 14 }} id="draggable-dialog-title">
            </DialogTitle>
          </Grid>
          <Grid item md={1} style={{ textAlign:'right'}}>
          <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          style={{ padding: 0 }}
          onClick={handleClose}
        >
          <CloseIcon/>
        </IconButton>
          </Grid>
        </Grid>
        <DialogContent>
        {data.length>0?<GRCReportTableDialogue  header={props.header} data={data}/>:null}
        </DialogContent>
      </Dialog>

  );
}

export default GRCDraggableDialog