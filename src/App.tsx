import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/index.tsx';

export function App() {
  return (
    <>
    <Container>
        <Heading>Testando meu componente</Heading>
    </Container>
      <div className='container'>
        <div className='content'>
          <section>LOGO</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}