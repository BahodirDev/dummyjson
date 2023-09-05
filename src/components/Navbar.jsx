import React, { useState } from 'react'

export default function Navbar({ categories = [], getFiltredProduct }) {
    const [nameCat, setNameCat] = useState('All Cetgories');
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">dummyJSON</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {nameCat}
                            </a>
                            <ul className="dropdown-menu">
                                <li ><span style={{ cursor: 'pointer' }} className="dropdown-item" href="#"
                                    onClick={() => {
                                        setNameCat("All Cetgories")
                                        getFiltredProduct(false)
                                    }}
                                >All Cetgories</span></li>
                                {
                                    categories?.map((v, idx) => {
                                        return (

                                            <li key={idx}><span style={{ cursor: 'pointer' }} className="dropdown-item" href="#"
                                                onClick={() => {
                                                    setNameCat(v)
                                                    getFiltredProduct(v)
                                                }}
                                            >{v}</span></li>
                                        )
                                    })
                                }
                                {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
