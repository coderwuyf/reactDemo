export default function App2(props) {
  const {name, age, height} = props;
  const skill = 'code'

  return (
    <div>
      <h2>我是函数式组件</h2>
      <p>我是父组件传递过来的数据：{name + '' + age + '' + height}</p>
      <p>{skill}</p>
    </div>
  )
}