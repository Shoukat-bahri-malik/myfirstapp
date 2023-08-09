import React from 'react'

export default function Card(props) {

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imageUrl} alt="BigCo Inc. logo" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.disc}</p>
          <a href="#" className="btn btn-primary">
            {props.btnTitle}
          </a>
        </div>
      </div>
    </div>
  );
}

 