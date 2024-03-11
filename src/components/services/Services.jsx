import "./services.css";
import cart from "../../assets/shopping-bag-outline.svg";
import monitor from "../../assets/monitor-outline.svg";
import mobile from "../../assets/smartphone-outline.svg";

const Services = () => {
  return (
    <div className="container-services" id="services">
      <h4>NUESTROS SERVICIOS</h4>
      <h1>
        SITIOS WEB MODERNOS Y <span>FUNCIONALES</span>
      </h1>
      <div className="cards-services-container">
        <div className="card-services">
          <img src={cart}></img>
          <h3>E-Commerce</h3>
          <p className="line-services"></p>
          <p>
            Crea tu tienda online fácilmente, gestiona productos y pedidos, y
            ofrece una excelente experiencia de compra.
          </p>
        </div>
        <div className="card-services">
          <img src={monitor}></img>

          <h3>Blogs</h3>
          <p className="line-services"></p>
          <p>
            Comparte tus ideas y conecta con tu audiencia a través de blogs
            diseñados para destacar.
          </p>
        </div>
        <div className="card-services">
          <img src={monitor}></img>
          <h3>Landing pages</h3>
          <p className="line-services"></p>
          <p>
            Captura la atención inmediatamente con páginas diseñadas para
            convertir visitantes en acciones concretas.
          </p>
        </div>
        <div className="card-services">
          <img src={mobile}></img>
          <h3>Responsive Desings</h3>
          <p className="line-services"></p>
          <p>
            Asegura que tu sitio se vea perfecto en cualquier dispositivo,
            optimizando la experiencia de usuario.
          </p>
        </div>
      </div>
      <p className="text-services">
      Nuestro objetivo es minimizar la distancia entre tus ideas y la puesta en marcha de tu producto, puesto que estamos comprometidos con el diseño de la plataforma que nos confías y te acompañamos para que tú seas el protagonista.
      </p>
    </div>
  );
};

export default Services;
