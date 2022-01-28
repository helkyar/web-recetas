import './component.css';

function Footer() { 
  return (
    <footer>
     <p>{`Recetas picos pardos. Todos los derechos reservados ${new Date().getFullYear()} `}&copy;</p>
    </footer>
  );
}

export default Footer;