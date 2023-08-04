import React from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    padding: '16px 16px 16px 16px',
    height: (props) => (props.height ? props.height : '300px'),
    width: (props) => (props.width ? props.width : '300px'),
    backgroundColor: '#050e25',
    position: 'relative',
    top: '20px',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:before': {
      content: '""',
      position: 'absolute',
      top:(props) => (props.ArrowPlaced ? props.ArrowPlaced : '-12px'),
      left: (props) => (props.ArrowPosition ? props.ArrowPosition : '125px'),
      height: (props) => (props.ArrowHeight ? props.ArrowHeight : '15px'),
      width: '15px',
      backgroundColor: '#050e25',
      transform: 'rotate(225deg) translate(-50%)',
    },
  },
}));

export default function BasicPopover(props) {
  const { open, setOpen, width, height, ArrowPosition ,ArrowSize ,ArrowPlaced } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles({ width, height, ArrowPosition ,ArrowSize,ArrowPlaced });


  return (
    <div>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <div className={classes.dialogBox}>
            {props.children}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}