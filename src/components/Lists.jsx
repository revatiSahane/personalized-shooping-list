import React from 'react'

export default function Lists({ product, deleteProduct }) {
    const [total, setTotal] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let finalAmount = 0;
        let quantity = 0;
        product.map((e) => {
            finalAmount += parseFloat(e.amount) * parseFloat(e.quan);
            quantity += parseFloat(e.quan);
        })
        setCount(quantity)
        setTotal(finalAmount)
    }, [product, total])

    return (
        <div className="container" id="lists">
            <div className="row my-2">
                <h3 id="sub-heading" className="fw-light">Here is your List to buy items -</h3>
            </div>
            <hr />
            <div className="container" id="lists-here">
                {product.length === 0 ? null :
                    (
                        <div className="details">
                            <p className="fs-4">Total Price : <span className="fs-3 fw-bold">₹ {total}</span></p>
                            <p className="fs-4">Total Products : <span className="fs-3 fw-bold">{count}</span></p>
                        </div>
                    )}

                {product.length === 0 ? (<><p className="display-6">Nothing in the List. Add something to your list first</p></>) :

                    product.map((e, idx) => {
                        //setTotal(total + parseFloat(e.amount));
                        return (
                            <>
                                <div className="product my-2" key={idx}>
                                    <div className="col-6">
                                        <p className="fs-4">{e.name}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="fs-4 fw-light">{e.quan} no.</p>
                                    </div>
                                    <div className="col-3" id="price">
                                        <p className="fs-3">₹ {e.amount}</p>
                                        <button onClick={() => { deleteProduct(e) }} className="btn btn-warning btn-sm">Remove</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </div>
        </div>
    )
}