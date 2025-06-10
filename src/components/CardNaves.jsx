import React from 'react'

const CardNaves = () => {
    return (
        <div className='container'>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <div className='botones-card'>
                    <button type="button" className="btn btn-primary">Mas info !</button>
                    <button type="button" className="btn btn-primary"><i className="fa-regular fa-star"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNaves