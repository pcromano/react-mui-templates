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
});
function getItems() {
  var json = {
    "list": [{
      "id": 1,
      "title": "Templates",
      "items": [{
        "id": 10,
        "name": "Forms",
        "subitems": [{
          "id": 11,
          "name": "Contact Us",
          "url": 'contact-us'
        },
        {
          "id": 2,
          "name": "Lollipop",
          "url": '',
          "subitems": [{
              "id": 21,
              "name": "Contact Us",
              "url": 'contact-us'
            },
            {
              "id": 22,
              "name": "Lollipop",
              "url": ''
            }]
        }]
      },
      {
        "id": 23,
        "name": "Chrome",
        "url" : 'chrome'
      }
      ]
    }
    ]
  };
  return json;
}

class SidebarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                        <ListItem button key={item.id} onClick={() => this.handleClick(item.name)} >
                          <ListItemText primary={item.name} />
                          {this.state[item.name] ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse key={list.items.id} component="li" in={this.state[item.name]} timeout="auto" unmountOnExit>
                          <List disablePadding>
                            {item.subitems.map((sitem) => {
                              return (
                                <ListItem button key={sitem.id} className={classes.nested} onClick={() => this.handleClickLink(sitem.url)}>
                                  <ListItemText key={sitem.id} primary={sitem.name} />
                                </ListItem>
                              )
                            })}
                          </List>
                        </Collapse> </div>
                    ) : (
                        <ListItem button onClick={() => this.handleClickLink(item.url)} key={item.id}>
                          <ListItemText primary={item.name} />
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