import React from 'react';
import Image from 'next/image';
import IMG from '../../public/images/jhon.jpg';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SearchIcon from '@mui/icons-material/Search';
export default function Team() {
  return (
    <>
<h1 className="card-title" style={{ fontWeight: 300, color: "gray",marginTop:60 }}>OUR TEAM</h1>
    <div className="container" style={{marginTop: 60}}>
  <div className="row row-cols-1 row-cols-md-4 g-4">
    <div className="col">
      <div className="box">
      <Image src={IMG} className="d-block w-60"  alt="..." />
        <div className="box-content">
          <h3 className="title">Jon Oliver</h3>
          <span className="post">Business Development</span>
          <ul className="icon">
            <li>
              <a href="#">
               <SearchIcon/>
              </a>
            </li>
            <li>
              <a href="#">
                <AddLinkIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <div className="col">
      <div className="box">
      <Image src={IMG} className="d-block w-60"  alt="..." />
        <div className="box-content">
        <h3 className="title">Jon Oliver</h3>
          <span className="post">Business Development</span>
          <ul className="icon">
          <li>
              <a href="#">
               <SearchIcon/>
              </a>
            </li>
            <li>
              <a href="#">
                <AddLinkIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="box">
      <Image src={IMG} className="d-block w-60"  alt="..." />
        <div className="box-content">
        <h3 className="title">Jon Oliver</h3>
          <span className="post">Business Development</span>
          <ul className="icon">
          <li>
              <a href="#">
               <SearchIcon/>
              </a>
            </li>
            <li>
              <a href="#">
                <AddLinkIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div className="col">
      <div className="box">
      <Image src={IMG} className="d-block w-60"  alt="..." />
        <div className="box-content">
        <h3 className="title">Jon Oliver</h3>
          <span className="post">Business Development</span>
          <ul className="icon">
          <li>
              <a href="#">
               <SearchIcon/>
              </a>
            </li>
            <li>
              <a href="#">
                <AddLinkIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<br/>
    </>
  )
}
