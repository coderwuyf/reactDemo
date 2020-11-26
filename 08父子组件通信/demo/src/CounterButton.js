// 函数式组件

export default function CounterButton(props) {
  const { operator, btnClick } = props;

  return (<button onClick={btnClick}>{ operator }</button>);

}