import React from 'react'
import logo1 from '../../../public/equinix.png'
import logo2 from '../../../public/prologis.png'
import logo3 from '../../../public/realty.png'
import logo4 from '../../../public/tower.png'
import './Company.css'
const Company = () => {
  return (
    <div className='container-fluid paddings '>
      <div className="row ">
        <div className="col-md-3 col-sm-6 my-class">
        <img src={logo2} alt="img" width={150} />
        </div>
        <div className="col-md-3 col-sm-6 my-class">
            <img src={logo1} alt="img" width={150} />
        </div>
        <div className="col-md-3 col-sm-6 my-class">
        <img src={logo3} alt="img" width={150} />
        </div>
        <div className="col-md-3 col-sm-6 my-class">
        <img src={logo4} alt="img" width={150} />
        </div>
      </div>
    </div>
  )
}

export default Company
