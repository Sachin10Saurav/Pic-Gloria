import React from "react";
import { Link } from "react-router-dom";

const Home = ({ dataList }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {dataList.map((cur) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link className="links image-name-link" to={`/${cur.name}`}>
                  <div key={cur.id} className="img-card-div">
                    <img className="img-card" alt="pic" src={cur.images[0].url} />
                    <p className="img-card-text">{cur.name}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
