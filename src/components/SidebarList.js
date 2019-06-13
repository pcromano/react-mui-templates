//From https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93
import React from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  selectedItem: {
    background: "blue"
  }
});
function getItems() {
  var json = {
    "list": [{
      "id": 1,
      "title": "Templates",
      "items": [{
        "id": 2,
        "name": "Forms",
            "subitems": [{
              "id": 3,
              "name": "Sign-In",
              "url": 'login'
            },
            {
              "id": 4,
              "name": "Album",
              "url": 'album'
            },
            {
              "id": 5,
              "name": "Checkout",
              "url": 'checkout'
            }]
      },
      {
        "id": 6,
        "name": "Page Layouts",
            "subitems": [{
              "id": 7,
              "name": "Mini Drawer",
              "url": 'minidrawer'
            },
            {
              "id": 8,
              "name": "Nav Tabs",
              "url": 'navtabs'
            }]
      }
      ]
    }
    ]
  };
  return json;
}
//const [selectedIndex, setSelectedIndex] = React.useState(1);

class SidebarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      2: true,
      6: true
    };
  }  
  
  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };
  handleClickLink = (url) => {
    this.props.history.push(url);
  }
  render() {
    const items = getItems();
    const { classes } = this.props
    return (
      <div>
        {items.list.map((list) => {
          return (
            <List className={classes.root} key={list.id}>
              {list.items.map((item) => {
                return (
                  <div key={item.id}>
                    {item.subitems != null ? (
                      <div key={item.id}>
                        <ListItem button key={item.id} onClick={() => this.handleClick(item.id)} >
                          <ListItemText primary={item.name} />
                          {this.state[item.id] ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse key={list.items.id} component="li" in={this.state[item.id]} timeout="auto" unmountOnExit>
                          <List disablePadding>
                            {item.subitems.map((sitem) => {
                              return (
                                <ListItem 
                                selected={sitem.url===this.props.location.pathname ? true : false}
                                button key={sitem.id} className={classes.nested} onClick={() => this.handleClickLink(sitem.url)}>
                                  <ListItemText key={sitem.id} primary={sitem.name} />
                                </ListItem>
                              )
                            })}
                          </List>
                        </Collapse> </div>
                    ) : (
                        <ListItem 
                          button onClick={() => this.handleClickLink(item.url)} key={item.id}>   
                          <ListItemText primary={item.name}  />  
                        </ListItem>)}
                  </div>

                )
              })}
              <Divider key={list.id} absolute />
            </List>
          )
        })}
      </div>
    );
  }
}
SidebarList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(SidebarList));