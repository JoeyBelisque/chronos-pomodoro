import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/Defaultinput';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
    <Container>
        <Logo/>
    </Container>

     <Container>
        <Menu/>
    </Container>

    <Container>
      <CountDown/>
    </Container>

    
    <Container>
      <form className='form' action="">
        <div className='formRow'></div>
          <DefaultInput 
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          />
        <div/>

        <div className='formRow'></div>
          <p>
            Lorem ipsum dolor sit
          </p>
        <div/>

        <div className='formRow'></div>
          <Cycles />
        <div/>

        <div className='formRow'>
          <button>Enviar</button>
        </div>

      </form>
    </Container>
    </>
  );
}