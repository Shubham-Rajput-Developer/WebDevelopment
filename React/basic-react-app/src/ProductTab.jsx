import Product from "./Product";
function ProductTab() {
    // let types = ["Non-veg","Veg","liquid"];
    return ( 
        <>
        <Product title="Eggs" description="Good for morning meals." textColor="yellow"/>
        <Product title="Milk" description="helathy for baby boys" textColor="white"/>
        <Product title="Water" description="everone need to intake upto 5 litter per day" textColor="blue"/>
        </>
     );
}

export default ProductTab;