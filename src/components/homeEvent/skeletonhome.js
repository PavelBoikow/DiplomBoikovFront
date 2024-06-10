import React from "react";
import img from "./../../jpg/01.jpg"

import "./style.css"

export const SkeletonHome = () => {
  return (
    <div className="admin">
        <div className="admindiv">
            <div className="admindivup">
                <div className="admindivupleft">
                    <p className="pading">...</p>
                </div>
            </div>
            <div className="admindivdown">
                <div>
                    <img className="admindivdownLeft" src={img}/>
                </div>
            </div>
        </div>
    </div>
  );
};
