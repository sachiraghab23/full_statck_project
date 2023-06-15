import React from 'react'
import './css/About.css';

export default function About() {
  return (
    <>
      <div className="container" style={{marginTop:'50px'}}>
        <h1 className='para-heading'>
          Who we are
        </h1>
        <p>Launched in 2023, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        <h1 className='para-heading'>Our speciality</h1>
        <div className="row">
          <div className="col-md-6">
            <p>Despite the significant progress India has made, a large number of people still face the risk of food insecurity. The COVID-19 pandemic has further exacerbated the challenge of hunger in our country. As a response to the devastating consequences of the pandemic, Feeding India by Zomato launched the Daily Feeding Program in January 2021 to provide daily meal support to the most vulnerable families.</p>
          </div>
          <div className="col-md-6">
            <p>Under this program, Feeding India has served 4.3+ crore meals with the main focus on reducing hunger for the most vulnerable. This has been enabled with the support of over 140 NGO partners spread across 40 cities in the country.</p>
          </div>
        </div>
        <div className="row">
          <h1>Our chief</h1>
          <div className="col-md-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam magni pariatur autem obcaecati maiores sint harum dicta animi molestiae?</div>
          <div className="col-md-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut amet facere sed perspiciatis! Quisquam provident excepturi animi beatae quia distinctio eveniet, delectus assumenda eligendi.</div>
          <div className="col-md-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam blanditiis labore repellat dolorum. Cupiditate voluptates ad perspiciatis deleniti voluptatibus id totam facilis veritatis, ut impedit officia laudantium voluptate corrupti.</div>
          <div className="col-md-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nisi reiciendis cum quibusdam ipsam enim non ipsa consequatur, sunt perspiciatis quidem, amet praesentium porro perferendis quas fuga officiis esse quae quia quos rerum maiores velit!</div>
        </div>
      </div>
    </>
  )
}
