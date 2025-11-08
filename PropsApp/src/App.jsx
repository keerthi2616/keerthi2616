function App() {
  return (
    <div>
      <Student name="Keerthi" />
       <Student name="Janu" />
    </div>
  );
}
function Student(props) {
  return <h2>Hello , {props.name}!</h2>
}
export default App;