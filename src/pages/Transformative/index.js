import React, {useState, useEffect} from "react";
import star from "../../assets/fonts/style.css";
import Card from "../../components/Card";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

function Transformative(){

const [chefList, setChefList] = useState([])

useEffect(() => {
  loadChefs()
}, []);

function loadChefs() {
API.getChefs()
   .then(response => 
     setChefList(response.data)
   )
  .catch(err => console.log(err));
};
    return(
     <div>
    <div className="jumbotron" id="transform">
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-4 promo-item item-4"></div>
        <div className="col-md-8">
        <h1><span className="glyphicon glyphicon-star-empty" src={star}/><span className="glyphicon glyphicon-star-empty" src={star}/><span className="glyphicon glyphicon-star-empty" src={star}/><span className="glyphicon glyphicon-star-empty" src={star}/><span className="glyphicon glyphicon-star-empty" src={star}/> Critically Acclaimed Chefs</h1>
        <p>"Drama is very important in life: You have to come on with a bang. You never want to go out with a whimper. Everything can have drama if it's done right. Even a pancake. -- Julia Child"</p>
        </div>
    </div>
    </div>
    </div>
    {chefList.length ? (
<Card>
  <List>
{chefList.map(chef => {
  return(
  <ListItem key={chef._id}>
    {/* <a href={"/transformative" + chef._id}></a> */}
      <li>Chef: {chef.name}</li>
      <li>Awards: {chef.awards}</li>
      <li>Restaurants: {chef.restaurants}</li>
      <li>Location: {chef.city}</li>
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


export default Transformative;