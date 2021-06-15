import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Feature from "../../components/Feature";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

<>
<Header/>
    <Jumbotron/>
        <Feature>
   <div className="container">
    <div className="row">
        <div className="col-xs-12">
            <h1 className="text-center">Foodie</h1>
            <p className="lead text-center"> "People who love to eat are always the best people. -- Julia Child"</p>
        </div>
    </div>
</div>
</Feature>
<div className="container-fluid">
    <div className="row promo">
<Button>
<a href="#">
            <div className="col-md-4 promo-item item-1">
                <h3>
                    Transformative
                </h3>
            </div>
        </a>
</Button>
<Button>
<a href="#">
            <div className="col-md-4 promo-item item-2">
                <h3>
                    Local Favorites
                </h3>
            </div>
        </a>
</Button>
<Button>
<a href="#">
            <div className="col-md-4 promo-item item-3">
                <h3>
                    Find your new Fave
                </h3>
            </div>
        </a>
</Button>   
    </div>
</div>
<Footer/>
</>
