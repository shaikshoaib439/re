import './App.css';
import Navbar from'./Navbar'
import TextBar from'./TextBar'

function App() {
  return (
    <>
<Navbar title="Texto Editors" about="About Texto Editor"/>
<div ClassName="container ">
<TextBar  heading="Enter the Text"/>
</div>
</>
   
  );
}
export default App;