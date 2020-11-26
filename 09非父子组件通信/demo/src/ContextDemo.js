import React, {Component} from 'react';

const UserContext = React.createContext({ nickname: "默认", level: -1 })

// class ProfileHeader extends Component {
//   render() {
//     return (
//       <div>
//         <h2>用户昵称: {this.context.nickname}</h2>
//         <h2>用户等级: {this.context.level}</h2>
//       </div>
//     )
//   }
// }

// ProfileHeader.contextType = UserContext;

function ProfileHeader(props) {
  return (
    <div>
      <UserContext.Consumer>
        {
          value => {
            return (
              <div>
                <h2>用户昵称: {value.nickname}</h2>
                <h2>用户等级: {value.level}</h2>
              </div>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>文本1</li>
          <li>文本2</li>
          <li>文本3</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <UserContext.Provider value={{ nickname: "伍裕丰", level: 99 }}>
          <Profile />
        </UserContext.Provider>
        <h2>其他内容</h2>
      </div>
    )
  }
}