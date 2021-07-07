import Card from "../../components/Card";
import leaf from "../../assets/fonts/style.css"


function Local (){ 
return(
<>
    <div className="jumbotron" id="local">
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-4 promo-item item-5"></div>
        <div className="col-md-8">
        <h1><span className="glyphicon glyphicon-leaf" src={leaf}/> San Diego Local Favorite Hot Spots </h1>
        <p>"You don't need a silver fork to eat good food. -Paul Prudhomme"</p>
        </div>
    </div>
    </div>
    </div>
    
<Card href="/locals">
</Card>
</>
)
}

export default Local;
