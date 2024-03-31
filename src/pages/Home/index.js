import {Link} from 'react-router-dom';

function Home() {
    return (
      <div >
        <h1>Bem vindo a pagina HOME</h1>
        <span>Sujeito Henrique</span> <br/> <br/>

        <Link to="/sobre">Sobre </Link><br />
        <Link to='/contato'>Contato</Link><br /><br />
      </div>
    );
  }
  
  export default Home;
  