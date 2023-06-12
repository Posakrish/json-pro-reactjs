// import React, {useState} from "react";
// import "./Dashboard.css";
// import data from "./Data.json";
// import { Link, useNavigate } from "react-router-dom";
// import coffeIcon from "./coffee.jpg"
// import { connect } from "react-redux";



import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { updateRemark } from "./Remarks";
import "./Dashboard.css";
import data from "./Data.json";

import coffeIcon from "./coffee.jpg"



  const Dashboard = ({ coffeeItems, updateRemark }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [editItemId, setEditItemId] = useState(null);
    const [editRemark, setEditRemark] = useState("");
   

  const handleEditRemarkChange = (e) => {
    setEditRemark(e.target.value);
  };
  const handleDeleteClick = (id) => {
    updateRemark(id, "");
  };
  const handleEditClick = (id) => {
    setEditItemId(id);
    const item = coffeeItems.find((item) => item.id === id);
    if (item) {
      setEditRemark(item.remark);
    }
  };
  const handleEditRemarkSubmit = (e) => {
    e.preventDefault();
    updateRemark(editItemId, editRemark);
    setEditItemId(null);
    setEditRemark("");
  };
  return (
    <>
      <div className="templateContainer">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <img src={coffeIcon} alt="" style={{height:'57px',marginRight1:'10px' ,borderRadius:'30px'}} />
        <h1 style={{ color: 'whiteSmoke',
          textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}} >Coffee Drinks</h1>
        </div>
        <div className="searchInput_Container">
        
          <input style={{borderRadius:'20px'}} id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                     <Link to={`/Details/${val.id}`}> <img src={val.image} alt="No Image" /></Link>
                      <h3 style={{fontFamily:'Verdana'}}>{val.title}</h3>
                      {editItemId === val.id ? (

                        <form onSubmit={handleEditRemarkSubmit}>
                          <div style={{display:'flex', flexDirection:'column'}}>
                            <div>
                          <input style={{width:'270px',borderRadius:'30px',borderColor:'aqua'}} 
                            type="text"
                            value={editRemark}
                            onChange={handleEditRemarkChange}
                          />
                          </div>
                          <div>
                          <button style={{backgroundColor:'#3926ea',color:'white'}} type="submit" className="edit-button">Update</button>
                          </div>
                          </div>
                        </form>
                      ) : (
                        <>
                          <p style={{fontWeight:'bold'}}>Remark: {val.remark}</p>
                          <div style={{display:'flex',gap:'10px',margin:'5px'}} >
                          
                            <button style={{backgroundColor:'#4c3bea',color:'white',borderRadius:'10px'}} className="edit-button" onClick={() => handleEditClick(val.id)}>Edit</button>
                            <button style={{backgroundColor:'#4c3bea',color:'white',borderRadius:'10px'}} className="delete-button" onClick={() => handleDeleteClick(val.id)}>Delete</button>
                          </div>
                        </>
                      )}
        
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
   return {
     coffeeItems: state.coffeeItems, };
     }; 

const mapDispatchToProps = {
  updateRemark,
 };
 export default connect(mapStateToProps, mapDispatchToProps)(  Dashboard );








// import React, { useState } from "react";

// import data from "./Data.json";
// import DrinkDetails from "./DrinkDetails";

// function Dashboard() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedDrink, setSelectedDrink] = useState(null);

//   const handleDrinkClick = (drink) => {
//     setSelectedDrink(drink);
//   };

//   return (
//     <>
//       <div className="templateContainer">
//         <div className="searchInput_Container">
//           <input
//             id="searchInput"
//             type="text"
//             placeholder="Search here..."
//             onChange={(event) => {
//               setSearchTerm(event.target.value);
//             }}
//           />
//         </div>
//         <div className="template_Container">
//           {data
//             .filter((val) => {
//               if (searchTerm === "") {
//                 return val;
//               } else if (
//                 val.title.toLowerCase().includes(searchTerm.toLowerCase())
//               ) {
//                 return val;
//               }
//             })
//             .map((val) => {
//               return (
//                 <div
//                   className="template"
//                   key={val.id}
//                   onClick={() => handleDrinkClick(val)}
//                 >
//                   <img src={val.image} alt="" />
//                   <h3>{val.title}</h3>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       {selectedDrink && <DrinkDetails drink={selectedDrink} />}
//     </>
//   );
// }

// export default Dashboard;

