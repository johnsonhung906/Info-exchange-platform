import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import MapTwoToneIcon from '@material-ui/icons/MapTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function SideBar({log_in}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const logout = () =>{
    log_in(false);
  };

  const CustomLink = props => <Link to='/' {...props} />;

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Info Exchange
        </ListSubheader>
      }
      className={classes.root}
    >

      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" component={Link} to="/profile"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to="/">
            <ListItemIcon>
              <AppsTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button className={classes.nested} component={Link} to="/calendar">
            <ListItemIcon>
              <CalendarTodayTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Course Calendar" />
          </ListItem>
          <ListItem button className={classes.nested} component={Link} to="/map">
            <ListItemIcon>
              <MapTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Library Map" />
          </ListItem>
          <ListItem button className={classes.nested} component={Link} to="/pastexams">
            <ListItemIcon>
              <ImportContactsTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Past Exams" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button style={{position: "fixed",bottom: 0, width: 250}} onClick={logout} component={CustomLink}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout"/>
      </ListItem>
    </List>
  );
};

export default SideBar;
