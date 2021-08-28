import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

  
//   // Function based component

// import { Fragment, useState, useEffect, Component } from 'react';

//   const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//     const [searchedName, setSearchedName] = useState("")

//     const searchChangeHandler = (e) => {
//         setSearchedName(e.target.value);
//         console.log(e.target.value)
//     }

//     useEffect(()=> {
//         setFilteredUsers(
//                   DUMMY_USERS.filter((user) => user.name.toLocaleLowerCase().includes(searchedName.toLocaleLowerCase()))
//                 );

//         console.log(filteredUsers)
//     }, [searchedName]);

//     return(
//         <Fragment>
//             <div className={classes.finder}>
//                 <input
//                     type="text" 
//                     placeholder="type name"
//                     onChange={searchChangeHandler}></input>
//                 <Users users={filteredUsers}></Users>
//             </div>
//         </Fragment>
//     )
//   };

export default UserFinder;


