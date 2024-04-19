import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const IndividualImageList = ({ dataList }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [curId, setCurId] = useState(0);
  const getImg = (name, id) => {
    setCurId(id);
    // console.log(curId);
    setTempImgSrc(`image/${name}/${id}.jpg`);
    setModel(true);
  };

  let { name } = useParams();
  let list = "none";
  dataList.filter((cur) => {
    if (cur.name === name) {
      list = cur;
    }
    return list;
  });

  const nextImg = () => {
    setCurId(curId - 1);
    setTempImgSrc(`image/${name}/${curId}.jpg`);
  };
  const prevImg = () => {
    setCurId(curId + 1);
    setTempImgSrc(`image/${name}/${curId}.jpg`);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="pic" />
        <span>
          <CloseIcon
            className="close-icon-btn"
            onClick={() => setModel(false)}
          />
        </span>
        <ChevronLeftIcon className="left-icon-btn" onClick={() => prevImg()} />
        <ChevronRightIcon
          className="right-icon-btn"
          onClick={() => nextImg()}
        />
      </div>
      <div className="container">
        <div className="internal-nav">
          <Link className="in-nav-text" to="/">
            Home
          </Link>
          <span className="in-nav-text">/</span>
          <span className="in-nav-text">{name}</span>
        </div>
        <h1 className="name-heading">{name}</h1>
        <div className="row">
          {list.images.map((curelm) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  key={curelm.id}
                  className="img-card-div"
                  on
                  onClick={() => getImg(name, curelm.id)}
                >
                  <img className="img-card-indvidual" alt="pic" src={curelm.url} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default IndividualImageList;
