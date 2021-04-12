import "./App.scss";

const BoxContent = () => {
  return (
    <div className="box-content">
      <h2>Tytuł</h2>
      <h3>Subtytuł</h3>
      <div>Jakiś tekst, lorem ipsum dolor sit amet</div>
    </div>
  );
};

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="boxes">
          <div className="box-wrapper box-wrapper-side box-left">
            <div className="box">
              <BoxContent />
            </div>
          </div>

          <div className="box-wrapper box-center">
            <div className="box">
              <BoxContent />
            </div>
          </div>

          <div className="box-wrapper box-wrapper-side box-right">
            <div className="box">
              <BoxContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
