import React, {useEffect, useState} from "react";
import Card from "../../components/Card";
// import List from "../../components/List";
// import API from "../../utils/API";
import leaf from "../../assets/fonts/style.css"

function Local (){ 
    const [localList, setLocalList] = useState([]);

    const loadLocals = () => {
        fetch("/api/locals")
        .then (response => response.json())
        .then (setLocalList)
    };

    useEffect(() => {
      loadLocals()
    }, []);

return(
<div>
    <div className="jumbotron" id="local">
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-4 promo-item item-5"></div>
        <div className="col-md-8">
        <h1><span className="glyphicon glyphicon-leaf" src={leaf}/> San Diego Local Favorite Hot Spots </h1>
        <p>"You don't need a silver fork to eat good food. --Paul Prudhomme"</p>
        </div>
    </div>
    </div>
    </div>
    {/* {locals.length ? ( */}
<Card>
    <table className="table table-striped mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Chef</th>
      <th scope="col">Awards</th>
      <th scope="col">Restaurants</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
    <tbody>
    {localList.map(local => (
      <tr>
        <td key={local.id}>{local.name}</td>
        <td>{local.awards}</td>
        <td>{local.restaurants}</td>
        <td>{local.city}</td>
      </tr>
    ))}
  </tbody>
  </table>
 </Card> 
    {/* ) : ( */}
      {/* <h3>No Results to Display</h3>
  )} */}
</div>
    ) ;  
}



export default Local;
