import React from 'react';
import Image from 'next/image';
import IMG from '../../public/images/jon_Oliver.png';
import insta from '../../public/images/Group 3276.png'
import twit from '../../public/images/Group 3279.png'
import yt from '../../public/images/Group 3282.png'
import linkln from '../../public/images/Group 3285.png'
export default function Me() {
  return (
    <>
    <div className="card mb-3" style={{ maxWidth: 1200,marginTop: 60,border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <Image src={IMG} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: 600, color: "gray" }}> About Me</h5>
        <p className="card-text" style={{textAlign: "justify", fontSize: 15}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum fuga possimus minus. Harum et perspiciatis deserunt explicabo laudantium. Natus est soluta illum molestiae. Quia veritatis laudantium deserunt placeat nostrum error!
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        <br/><br/>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sapiente ut voluptatum? Ad aspernatur nostrum quas aperiam maxime officia eum perferendis doloremque quo cumque accusantium impedit, consequuntur laborum, ea dolorum..
        </p>
       <div className='icons'>
        <div>
            <a
             className="btn btn-outline-secondary  btn-floating m-1"
            href="#!"
            role="button"
            >
            <Image src={insta} alt=''  
            style={{ width: "27px", height: "27px",margin:3 }} />
            </a>
        </div>
        <div>
        <a
             className="btn btn-outline-secondary  btn-floating m-1"
            href="#!"
            role="button"
            >
        <Image src={linkln} alt=''  
            style={{ width: "27px", height: "27px",margin:3 }} />
            </a>
        </div>
        <div>
        <a
             className="btn btn-outline-secondary  btn-floating m-1"
            href="#!"
            role="button"
            >
        <Image src={yt} alt=''  
            style={{ width: "27px", height: "27px",margin:3 }} />
            </a>
        </div>
        <div>
        <a
             className="btn btn-outline-secondary  btn-floating m-1"
            href="#!"
            role="button"
            >
        <Image src={twit} alt=''  
            style={{ width: "27px", height: "27px",margin:3 }} />
            </a>
        </div>
       
       </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
