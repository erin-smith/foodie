import React, {useState, useEffect} from "react";
import Card from "../../components/Card";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import leaf from "../../assets/fonts/style.css"
import {findAllChefs} from "../../../controllers/controller"

function Local (){ 
    const [localList, setLocalList] = useState([]);

    useEffect(() => {
      loadLocals()
    }, []);
    
    function loadLocals() {
    API.getLocals()
       .then(response => 
         setLocalList(response.data)
       )
      .catch(err => console.log(err));
    };
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
    {localList.length ? (
<Card>
    <List>
{localList.map(val => {
  return(
  <ListItem key={val._id}>
    {/* /* <a href={"/local" + local._id}></a> */}
      <li>Chef: {val.name}</li>
      <li>Awards: {val.awards}</li>
      <li>Restaurants: {val.restaurants}</li>
      <li>Location: {val.city}</li>
      </ListItem>
  );
})}
</List>
 </Card> 
    ) : (
      <h3>No Results to Display</h3>
  )}
</div>
    )   
}


export default Local;
