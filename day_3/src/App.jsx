
import './App.css';
import { useState } from 'react';


function App() {

  
  let [sub1, set] = useState("HTML5")
  let [t_mark] = useState(100)
  let [mark1] = useState(98)

  let [sub2] = useState("CSS3")
  let [mark2] = useState(99)

  let [sub3] = useState("javaScript")
  let [mark3] = useState(97)

  let a = 0

  // for (let num = 0; num < 4; num++) {
  //   a = num
  // }


  return (<div className="App">

    <center>
      <table border={2}>
        <tr>
          <th>NO.</th>
          <th>Subject</th>
          <th>Total Mark</th>
          <th>Marks</th>
        </tr>
        <tr>
          <td>{1}</td>
          <td>{sub1}</td>
          <td>{t_mark}</td>
          <td>{mark1}</td>
        </tr>

        <tr>
          <td>{2}</td>
          <td>{sub2}</td>
          <td>{t_mark}</td>
          <td>{mark2}</td>
        </tr>
        <tr>
          <td>{3}</td>
          <td>{sub3}</td>
          <td>{t_mark}</td>
          <td>{mark3}</td>
        </tr>

      </table>
    </center>

  </div>
  );
}

export default App;
