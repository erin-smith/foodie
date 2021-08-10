import React, {useState, useEffect} from "react";
import star from "../../assets/fonts/style.css";
import Card from "../../components/Card";

function Transformative (){

const [chefList, setChefList] = useState([])

const loadChefs = async () => {
  try {
    const response = await fetch("/api/chefs")
    console.log(response, "Here")
    const jsonData = await response.json()
    setChefList(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  loadChefs()
}, []);

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
    {/* {chefList.length ? ( */}
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
     {chefList.map(chefs => 
       <tr>
         <td>{chefs.name}</td>
         <td>{chefs.awards}</td>
         <td>{chefs.restaurants}</td>
         <td>{chefs.city}</td>
       </tr>
     )}
   </tbody>
   </table>
  </Card> 
  {/* //   ) : (
  //     <h3>No Results to Display</h3>
  // )} */}
</div>
    )  ; 
}


export default Transformative;