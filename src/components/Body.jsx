const Body = () => {

    const Products=[
        {title:"Card One",Price:"Title",Detail:"Card Details"},
        {title:"Card Two",Price:"Title",Detail:"Card Details"}, 
        {title:"Card Three",Price:"Title",Detail:"Card Details"}, 
        {title:"Card Four",Price:"Title",Detail:"Card Details"},
        {title:"Card Five ",Price:"Title",Detail:"Card Details"},
        {title:"Card Six",Price:"Title",Detail:"Card Details"},
    ]
    const Sidebar=[
        {title:"Side Bar Section", paragraph:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, provident."},
        {title:"Side Bar Section", paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, provident"},
    
    ]
    return ( 
        <div className="body1">
            <div className="body2">
                {
                    Products.map(Product=>{
                        return(
                            <div className="product2">
                                <h2>{Product.title}</h2>
                                <h3>{Product.Price}</h3>
                                <p>{Product.Detail}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className="body3">
            {
                    Sidebar.map(Product=>{
                        return(
                            <div className="product3">
                                <h2>{Product.title}</h2>
                                <p>{Product.paragraph}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
 
export default Body ;