import "./services.css";
import cart from "../../assets/shopping-bag-outline.svg";
import monitor from "../../assets/monitor-outline.svg";
import mobile from "../../assets/smartphone-outline.svg";

const Services = () => {
  return (
    <div className="container-services" id="services">
      <h4>OUR SERVICES</h4>
      <h1>
        MODERN AND FUNCTIONALLY <span>WEBSITES</span>
      </h1>
      <div className="cards-services-container">
        <div className="card-services">
          <img src={cart}></img>
          <h3>E-Commerce</h3>
          <p className="line-services"></p>
          <p>
            With our e-commerce solutions, you can build your online store in
            minutes. Add products, manage orders, and ship them to your
            customers.
          </p>
        </div>
        <div className="card-services">
          <img src={monitor}></img>

          <h3>Blogs</h3>
          <p className="line-services"></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            cumque nam ratione nulla veritatis neque cum perspiciatis dicta
            temporibus magni!
          </p>
        </div>
        <div className="card-services">
          <img src={monitor}></img>
          <h3>Landing pages</h3>
          <p className="line-services"></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptas architecto commodi dolore repellat accusamus minima sed ab
            eos iusto?
          </p>
        </div>
        <div className="card-services">
          <img src={mobile}></img>
          <h3>Responsive Desings</h3>
          <p className="line-services"></p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            unde officiis id placeat, maxime enim quas qui voluptatum deleniti
            quisquam?
          </p>
        </div>
      </div>
      <p className="text-services">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        recusandae, laudantium provident voluptates ducimus dolore aut nam quam
        exercitationem accusamus corporis eveniet pariatur quo debitis iste
        quaerat eos aliquid nulla! Laboriosam ab a rem nobis placeat repellendus
        magnam ex. Aspernatur est exercitationem laboriosam eaque vel illo.
        Rerum dignissimos quaerat quae? Voluptates tempore praesentium
        consectetur id facilis facere eveniet, minus sequi dignissimos alias
        voluptatum, soluta eos ad ducimus deleniti fugiat ipsa harum qui.
        Tempora recusandae modi nemo obcaecati eaque in delectus consequuntur
        blanditiis, voluptates sunt dolorem, libero soluta? Rem sapiente ratione
        excepturi atque quaerat eaque voluptas, maxime non deserunt aliquid
        corrupti.
      </p>
    </div>
  );
};

export default Services;
