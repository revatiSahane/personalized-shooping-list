import React from 'react'

export default function Input(props) {
    const [title, setTitle] = React.useState("");
    const [qty, setQty] = React.useState(0);
    const [price, setPrice] = React.useState(0);

    const createProduct = () => {
        console.log("I am creating a product");

        let curr = {
            name: title,
            quan: qty === 0 ? 1 : qty,
            amount: price
        }
        props.setProduct([...props.product, curr]);
        console.log(props.product);
    }

    return (
        <div className="container">
            <div className="container">
                <div className="row my-2">
                    <h3 id="sub-heading" className="fw-light">Add to your List</h3>
                </div>
                <hr />
                <div className="row my-2">
                    <label className="fs-4 fw-light" htmlFor="title">Title</label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" />
                </div>
                <div className="row my-2">
                    <label className="fs-4 fw-light" htmlFor="qty">Quantity</label>
                    <input onChange={(e) => { setQty(e.target.value) }} type="number" className="form-control" />
                </div>
                <div className="row my-2">
                    <label className="fs-4 fw-light" htmlFor="price">Price</label>
                    <input onChange={(e) => { setPrice(e.target.value) }} type="number" className="form-control" />
                </div>
                <hr />
                <div className="row my-4">
                    <button onClick={createProduct} className="btn btn-lg btn-secondary">Add</button>
                </div>
            </div>
        </div>
    )
}