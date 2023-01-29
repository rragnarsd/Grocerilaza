
import {useState } from "react";

export default function RadioButtons() {

 const [radio, setRadio] = useState('Pikkolo');


    return (
        <div>
            <h5>Shipping Options</h5>

            <div className='form-check'>
                <input type="radio" id='0' name="radios" className='form-check-input'
                    checked={radio === "Pikkolo"} value="Pikkolo" onChange={(e) => setRadio(e.target.value)}></input>
                <label htmlFor="" className='form-check-label'>Pikkolo</label>
            </div>
            <div className='form-check'>
                <input type="radio" id='1' name="radios" className='form-check-input'
                    checked={radio === "Post Office"} value="Post Office" onChange={(e) => setRadio(e.target.value)}></input>
                <label htmlFor="" className='form-check-label'>Post Office</label>
            </div>
            <div className='form-check'>
                <input type="radio" id='2' name="radios" className='form-check-input'
                    checked={radio === "Home Delivery"} value="Home Delivery" onChange={(e) => setRadio(e.target.value)}></input>
                <label htmlFor="" className='form-check-label'>Home Delivery</label>
            </div>
        </div>

    )
}

