import "./home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-title">
        <h1>SOLUCIONES <span>WEB</span></h1>
        <p className="line"></p>
      </div>
      <div className="container-home">
        <h4>Aplicaciones Web</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          maiores tenetur temporibus vero voluptate recusandae sapiente rem?
          Animi iure rerum corporis error dicta nam sunt mollitia rem, corrupti
          magni illo!
        </p>
        <button className="cssbuttons-io-button">
          Get started
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
