// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Data from "./Data.json";
// import "./DrinkDetails.css";
// import { connect } from "react-redux";



// import React, { useState } from "react";
// import { Navigate, useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { updateRemark } from "./Remarks";
// import Data from "./Data.json";
// import "./DrinkDetails.css";



// const Details = () => {
//     const { id } = useParams();
//     const [remark, setRemark] = useState('');
  
//   const coffeeItem = Data.find((item) => item.id == parseInt(id));



//   const handleRemarksSubmit = (e) => {
//     e.preventDefault();
//     updateRemark(coffeeItem.id, remark);
//     Navigate("/coffee");
//   };



//   if (!coffeeItem) {
//     return <div>Not found</div>;
//   }

//   return (
//     <div >
//     <div className="cd">
//       <img className="ci" src={coffeeItem.image} alt={coffeeItem.title} />
//       <h2 className="ct">{coffeeItem.title}</h2>
//       <p className="cd">{coffeeItem.description}</p>
//       <p className="cd">{coffeeItem.ingredients}</p>
//       <form onSubmit={handleRemarksSubmit}>
//         <label  htmlFor="remark">Add Remark:</label>
//         <input style={{borderRadius:'30px'}}
//           type="text"
//           id="remark"
//           value={remark}
//           onChange={(e)=>setRemark(e.target.value)}
//         />
//         <button style={{backgroundColor:'#3926ea',color:'white'}} type="submit">Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     coffeeItems: state.coffeeItems,
//   };
// };

// const mapDispatchToProps = {
//   updateRemark,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Details);


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateRemark } from "./Remarks";
import Data from "./Data.json";
import "./DrinkDetails.css";
import { useNavigate } from "react-router-dom";

const Details = ({  updateRemark }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const coffeeItem = Data.find((item) => item.id === parseInt(id));
  const [remark, setRemark] = useState("");


  const handleRemarksSubmit = (e) => {
    e.preventDefault();
    updateRemark(coffeeItem.id, remark);
    navigate("/coffee");
  };

  const handleBackClick = () => {
    navigate("/coffee");
  };

  if (!coffeeItem) {
    return <div>Not found</div>;
  }

  return (
   
     
      <div className="cd">
        <img
          className="ci"
          src={coffeeItem.image}
          alt={coffeeItem.title}
        />
        <h2 className="ct">{coffeeItem.title}</h2>
        <p className="cd">{coffeeItem.description}</p>
        <p className="cd">{coffeeItem.ingredients}</p>
        <form onSubmit={handleRemarksSubmit}>
          <label htmlFor="remark" style={{fontWeight:'bold'}}>Add Remarks :</label>
          <input style={{borderRadius:'30px'}}
            type="text"
            id="remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <div >
          <button className="edit-button" style={{backgroundColor:'#3926ea',color:'white',borderRadius:'10px'}} type="submit">Add Changes</button><br/>
         
          </div>
        </form>
     
   
      </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.coffeeItems,
  };
};
const mapDispatchToProps = {
  updateRemark,
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);