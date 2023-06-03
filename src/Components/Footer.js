import React from 'react'
import '../../src/Styles/About.css'
import footer01 from '../Images/footer01.webp'
import footer02 from '../Images/footer02.webp'
import footer03 from '../Images/footer03.webp'

const Footer = () => {
  return (
    <div >
       <div className="fotter">
<div className="row">
  <div className="col-4">
  <h3 className='text-center text-white'>About Us</h3>
  <hr />
  <p className='text-center'>Lusioto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>

  {/* <p>Lusioto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p> */}

 

  </div>
  <div className="col-4">
  <h3 className=' text-white' >  OFFICE ADDRESS</h3>
 
  <hr />
  <tr>
    <td className='text-center'><strong>Location</strong></td>
    <td> : Kaliurang St. No 104, Sinduharjo, <br />&nbsp;&nbsp;Ngaglik, Sleman.</td>
  </tr>
  <tr>
    <td><strong>Telp</strong></td>
    <td> : (0274) 9982732</td>
  </tr>
  <tr>
  <td><strong>Email</strong> </td>
  <a href="mailto:staff@localhost.net">staff@localhost.net</a>

  </tr>
  <tr>
    <td><strong>Open Hour</strong></td>
    <td><td> : Monday ‐ Friday <br/> &nbsp;&nbsp;08:00 AM ‐ 16:00 PM</td></td>

  </tr>
  <p>Second Office</p>
  <tr>
    <td><strong>Location</strong></td>
    <td> : Kaliurang St. No 104, Sinduharjo,  <br />&nbsp;&nbsp;Ngaglik, Sleman.</td>
  </tr>
  <tr>
    <td><strong>Telp</strong></td>
    <td> : (0274) 9982732</td>
  </tr>
  <tr>
  <td><strong>Email</strong> </td>
  <a href="mailto:staff@localhost.net">staff@localhost.net</a>

  </tr>
  <tr>
    <td><strong>Open Hour</strong></td>
    <td><td> : Monday ‐ Friday <br/> &nbsp;&nbsp;08:00 AM ‐ 16:00 PM</td></td>

  </tr>
  </div>
  <div className="col-md-4 col-sm-12">
    <h3 className='text-white'>LATEST POSTS</h3>
    <hr />
    <div className="footer-image d-flex">
      <div className="image01">
     <img src={footer01} alt="" />
     <h4>DYNAMICUS</h4>
      </div>
      <div className="image-text ">
      <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a>
      <h5>CLARITAS EST ETIAM PROCESSUS</h5>
      </div>
    </div>
    <div className="footer-image d-flex">
      <div className="image01">
     <img src={footer02} alt="" />
     <h4>ASSUM</h4>
      </div>
      <div className="image-text px-4">
      <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a>
      <h5>MAZIM PLACERAT FACER POSSIM</h5>
      </div>
    </div>
    <div className="footer-image d-flex">
      <div className="image01">
     <img src={footer03} alt="" />
     <h4>ASSUM</h4>
      </div>
      <div className="image-text px-4">
      <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a>
      <h5>TEMPOR CUM SOLUTA NOBIS ELEIFEND</h5>
      </div>
    </div>
  </div>
</div>
   </div>
   <div className="footer-credit">
    <div className="row">
    <div className="col-md-5 ">
    <p className='text-center' class="copy">Powered by WordPress - Built by <a href="https://themesawesome.com/">Themes Awesome</a></p>
    </div>
    <div className="col-md-3 ">
    
    </div>
    <div className="social_media_logo">
    <div className="col-md-4 ">

    </div>
    </div>
    </div>
   </div>
    </div>
  )
}

export default Footer
