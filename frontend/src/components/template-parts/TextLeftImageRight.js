import React from "react";
const TextLeftImageRight = ({text,imageUrl})=>(
    <div className="section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="textcolumn col-7" dangerouslySetInnerHTML={{ __html: text }} />
            <div className="imagecolumn col-5">
              <img className="imageRight" src={imageUrl}/></div>
          </div>
        </div>
      </div>
);
export default TextLeftImageRight;