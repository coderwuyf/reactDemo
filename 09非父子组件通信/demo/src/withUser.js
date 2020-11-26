// // import React, { PureComponent, createContext } from 'react';

// // const UserContext = createContext({
// //   nickname: "默认",
// //   level: -1
// // })

// // function withUser(WrapperCpn) {
// //   return props => {
// //     return (
// //       <UserContext.Consumer>
// //         {
// //           value => {
// //             return <WrapperCpn {...props} {...value}/>
// //           }
// //         }
// //       </UserContext.Consumer>
// //     )
// //   }
// // }

// // function Header(props) {
// //   const { height, nickname, level } = props;
// //   return <h2>Header {"昵称:" + nickname + "等级:" + level + "身高" + height}</h2>
// // }


// // function Footer(props) {
// //   const { nickname, level } = props;
// //   return <h2>Footer {"昵称:" + nickname + "等级:" + level}</h2>
// // }

// // const UserHeader = withUser(Header);
// // const UserFooter = withUser(Footer);

// // export default class App extends PureComponent {
// //   render() {
// //     return (
// //       <div>
// //         <UserContext.Provider value={{ nickname: "why", level: 90 }}>
// //           <UserHeader height="180cm"/>
// //           <UserFooter />
// //         </UserContext.Provider>
// //       </div>
// //     )
// //   }
// // }

// import React, { PureComponent } from 'react';

// function loginAuth(Page) {
//   return props => {
//     if (props.isLogin) {
//       return <Page/>
//     } else {
//       return <LoginPage/>
//     }
//   }
// }

// function LoginPage() {
//   return <h2>LoginPage</h2>
// }

// function CartPage() {
//   return <h2>CartPage</h2>
// }

// const AuthCartPage = loginAuth(CartPage);

// export default class App extends PureComponent {
//   render() {
//     return (
//       <div>
//         <AuthCartPage isLogin={true}/>
//       </div>
//     )
//   }
// }


import React, { PureComponent, createRef } from 'react';

function Home(props) {
  return (
    <div>
      <h2 ref={props.ref}>Home</h2>
      <button>按钮</button>
    </div>
  )
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.homeTitleRef = createRef();
  }

  render() {
    return (
      <div>
        <Home ref={this.homeTitleRef}/>
        <button onClick={e => this.printInfo()}>打印ref</button>
      </div>
    )
  }

  printInfo() {
    console.log(this.homeTitleRef);
  }
}