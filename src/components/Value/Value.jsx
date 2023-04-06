import React from 'react'
import Accordian from '../Accordian/Accordian'
import value from '../../../public/value.png'
import './Value.css'

const Value = () => {
  return (
    <section>
      <div className="container-fluid px-4 paddings">
        <div className="row">
            <div className="col-lg-6">
              <div className="my-image-container">
                <img src={value} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
                <Accordian />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Value

