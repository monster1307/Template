import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Paper, ListItem, List, ListItemText } from '@material-ui/core';

// Helpers
import { History } from 'Helpers';
import { Route, Switch } from 'react-router-dom';

// Pages
import Page1 from 'Pages/Page1';
import Page2 from 'Pages/Page2';

const useStyles = makeStyles({
  root: {
  },
  main: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    minHeight: 'calc(100vh - 64px)',
    maxHeight: 'calc(100vh - 64px)'
  },
  sideMenu: {
    width: 250,
    minWidth: 250,
    maxWidth: 250
  },
  mainContainer: {
    flex: 1,
    overflowY: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  pageContainer: {
    padding: 20
  }
});

const paths = [
  "/",
  "/Page1",
  "/Page2"
];

function App() {

  const classes = useStyles();
  const [selectedSideMenuIndex, setSelectedSideMenuIndex] = useState(paths.findIndex(p => p === History.location.pathname));

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>Header</Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Paper className={classes.sideMenu}>
          <List>
            <ListItem
              button
              onClick={() => {
                setSelectedSideMenuIndex(0);
                History.push("/");
              }}
              selected={selectedSideMenuIndex === 0}
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setSelectedSideMenuIndex(1);
                History.push("Page1");
                }}
                selected={selectedSideMenuIndex === 1}
              >
              <ListItemText>Page 1</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setSelectedSideMenuIndex(2);
                History.push("Page2");
                }}
                selected={selectedSideMenuIndex === 2}
              >
              <ListItemText>Page 2</ListItemText>
            </ListItem>
          </List>
        </Paper>
        <div className={classes.mainContainer}>
          <Paper className={classes.pageContainer}>
            <Switch>
              <Route exact path="/" component={Page2} />
              <Route path="/Page1" component={Page1} />
              <Route path="/Page2" component={Page2} />
            </Switch>
          </Paper>
        </div>
      </main>
    </div>
  );
}

export default App;
