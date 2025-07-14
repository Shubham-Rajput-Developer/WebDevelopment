import "./Product.css";

function Product({title,description,textColor}) {
    // const list = features.map((feature)=><li>{feature}</li>)
    //let bg = {backgroundColor:"red"};
    return ( 
        <div className="Product" >
            <h3 style={{color:textColor}}>{title}</h3>
            <h5>{description}</h5>
        
        </div>
     );
}

export default Product;