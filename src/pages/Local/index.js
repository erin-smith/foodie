import Card from "../../components/Card";
import pizza from "../../assets/fonts/style.css"


function Local (){ 
return(
<>
    <div className="jumbotron" id="local">
    <div className="container-fluid">
    <div class="row">
        <div class="col-md-4 promo-item item-4"></div>
        <div class="col-md-8">
        <h1><span className="glyphicon glyphicon-pizza" src={pizza}/> &nbsp; San Diego Local Favorites </h1>
        <p>"You don't need a silver fork to eat good food. -Paul Prudhomme"</p>
        </div>
    </div>
    </div>
    </div>
    
<Card/>
</>
)
}

export default Local;
