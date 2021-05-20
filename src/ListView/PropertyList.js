import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    flexWrap: 'wrap',
    spacing : '6',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1300,
    spacing : '8',
    height: 900,
    padding :'10px'
  }, 
  
}));


const PropertyList = ({setdata}) => {
  const classes = useStyles();


  return(
    <div className={classes.root}>
      <GridList cellWidth = {300} cellHeight={400} className={classes.gridList} cols={3}>
            {setdata && setdata.map((data) => (
            <GridListTile key={data.img}>
              <img src={data.photos[0]} alt={data.title} />
            <GridListTileBar
              title = {data.property.bedrooms + ' BR ' + ' | ' + (data.property.bathsFull + (0.5 * data.property.bathsHalf)) + ' Bath' + ' | ' + data.property.area + ' Sq ft' }  
              subtitle = {'$' + data.listPrice + ' | ' + moment(data.listdate).format("MM/DD/YY") + ' | ' + data.address.streetName + ',' + data.address.city + ',' + data.address.state } 
              actionIcon={
                <IconButton aria-label={`star ${data.title}`}>
                  <FavoriteBorderIcon color="secondary" onClick={() => {localStorage.setItem('msId', data.mlsId)}} />
                </IconButton>
              }
              /> 
        </GridListTile>    
        ))} 
      </GridList>
    </div>
  );
}

export default  PropertyList;