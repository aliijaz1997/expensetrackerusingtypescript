import React, { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../App.css';
import { transactionContext } from './Contextapi';
import { TransactionType } from './Contextapi';
import image from '../Images/delete.png';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 200,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }),
);

export default function HistoryList() {
  const classes = useStyles();
  // let transacton : {amount: number , desc: string } [] = [
  //   {amount :500 , desc: "camera"},
  //   {amount :500 , desc: "camera"},
  //   {amount :500 , desc: "camera"},
  //   {amount :500 , desc: "camera"},
  //   {amount :500 , desc: "camera"},

  // ]

  const { transactionListState, deleteTransaction } = useContext(transactionContext);
  return (
    <List className={classes.root} >
      <li className={classes.listSection}>
        <ul className={classes.ul}>
          {transactionListState.map((item: TransactionType, index: number) => (
            <ListItem key={index} className="List" >
              <button className="btn" onClick={() => deleteTransaction(index)}>
                <img className="image" src={image} alt="delete" />
              </button>
              <ListItemText primary={item.description} />
              <ListItemText className="listamount" primary={`$ ${item.amount}`} />
            </ListItem>
          ))}

        </ul>
      </li>
    </List>
  );
}