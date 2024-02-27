import {Button} from "./components/button/Button";
import User from "./components/user/User";
import Example from "./components/example/Example";
import classes from "./App.css";
import Header from "./components/header/Header";


function App() {
    const navbar =  ['Главное','О нас','Контакты']
  return (
      <>
      <Header navbar={navbar}/>
      <h1 className="textBlue">hello</h1>
      <h1 className="textGreen">hello</h1>

      <Button text ={'открыть'}/>
      <Button text ={'закрыть'}/>
      <Button text ={'редактировать'}/>
      <User name={'Nurzhan'} age = {'20'}/>
          <Example>
              <div>

              </div>
              <p style =  {{
                  color: 'red',
                  fontsize: '20px'
              } }> Привет</p>
          </Example>
      </>
  );
}

export default App;
