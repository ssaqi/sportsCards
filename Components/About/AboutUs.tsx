import React from 'react';
import Team from './Team';
import Me from './Me';
export default function About() {
  return (
    <>
      <br /><br />
      <div className='container'>
        <div className="card-body" style={{ marginTop: "8%" }}>
          <h1 className="card-title" style={{ fontWeight: 300, color: "gray" }}>OUR STORY</h1>
          <p className="card-text" style={{ fontFamily: "'Mulish', sans-serif", color: "gray", fontSize: 18, fontWeight: "light", marginTop: 20, textAlign: "justify" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, .
          </p>

        </div>
        <Me/>
        <Team/>
      </div>
  
    </>
  )
}
