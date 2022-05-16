import React from 'react'
import "./News.css"
const News = () => {
  return (
    <div className='News-section'>
      <div className='container'>
      <h1 className='news-header' data-aos="zoom-in">Read our latest blogs</h1>
       <div className='news-para-container'>
       <p className='news-para' data-aos="slide-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
       </div>

       <div className='trending-card-container'>
         <div className='trending-card' data-aos="slide-right">
           <div className='row' style={{alignItems:'center'}}>
             <div className='col-lg-7 t-txt'>
               <div className='trending-content'>
                 <h1 className='trending-subtxt'>
                 Trending Post
                 </h1>
                 <h1 className='trending-header'>
                 New invoicing features to help you get paid faster
                 </h1>
                 <p className='trending-para'>
                 Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.
                 </p>
                 
               </div>
             </div>
             <div className='col-lg-5 p-img'><img src='./images/people.svg' style={{width:"100%"}}/> </div>
           </div>
         </div>
       </div>
       <div className='post-container'>
         <h1 className=' news-header' data-aos="zoom-in">All Posts</h1>
         <div className='row'>
           <div className='col-lg-4' data-aos="zoom-in">
           <div class="card">
  <img class="card-img-top" src="./images/boy.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">7 Automation use cases that foster excellent CX</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#" class="card-sub-txt">Luke Matthews l  November 8, 2021</a>
  </div>
</div>
              </div>
              <div className='col-lg-4' data-aos="zoom-in">
           <div class="card">
  <img class="card-img-top" src="./images/workingboy.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Managing Rails application secrets with encrypted credentials</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#" class="card-sub-txt">Luke Matthews l  November 8, 2021</a>
  </div>
</div>
              </div>
              <div className='col-lg-4' data-aos="zoom-in">
           <div class="card">
  <img class="card-img-top" src="./images/workingwomen.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Account-based marketing: Data-driven selection for ABM success</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#" class="card-sub-txt">Luke Matthews l  November 8, 2021</a>
  </div>
</div>
              </div>
              <div className='col-lg-4' data-aos="zoom-in">
           <div class="card">
  <img class="card-img-top" src="./images/womenlaptop.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"> How to Calculate Your SaaS Gross Margin</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#" class="card-sub-txt">Luke Matthews l  November 8, 2021</a>
  </div>
</div>
              </div>
              <div className='col-lg-4' data-aos="zoom-in">
           <div class="card">
  <img class="card-img-top" src="./images/laptop.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">The Five Main Benefits of Automating your Accounts</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#" class="card-sub-txt">Luke Matthews l  November 8, 2021</a>
  </div>
</div>
              </div>
              <div className='col-lg-4' data-aos="zoom-in">
           <div class="card">
  <img class="card-img-top" src="./images/womenc.svg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">How to Reduce Checkout Abandonment for more Conversions</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#" class="card-sub-txt">Luke Matthews l  November 8, 2021</a>
  </div>
</div>
              </div>
            </div>
       </div>
       <div className='grow-heading-container'>
      <div className='grow-header' data-aos="zoom-in">
      Are you ready to grow your savings with us?
      </div>
      
      </div>
      <div className='contact-plan-btn-container'>
      <div className='contact-plan-btn'>
        See Plans
      </div>
      </div>
        </div>
    </div>
  )
}

export default News