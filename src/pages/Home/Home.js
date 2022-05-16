import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <section className='Home-hero-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6' id="My-Hero-Heading" data-aos="fade-up">
              <div className='Hero-heading'>
              You don’t have to
save alone
              </div>
              <div className='hero-text-container'>
                <p className='hero-text'>Create and easily manage your <span>chitfunds</span></p>
                <img src='./images/usa-flag.svg'/>
              </div>
              <div className='hero-input-container' id="Hero-Inputs">
                <input placeholder='Name'/>
                <input placeholder='Email'/>
               <div className='hero-input-btn'>
               <button class="home-contact-btn" type="submit">Get Early Access &nbsp; <img src='./images/arrow.svg'/></button>
               </div>
              </div>
              <div className='hero-btn-container' id="Hero-Works">
                <div className='hero-works'>
                 <img src='./images/play.svg'/> &nbsp;  See How it Works
                </div>
                <div className='playstore-btn'>
                <img src='./images/playstore.svg'/>&nbsp;  Playstore
                </div>
                <div className='playstore-btn'>
                <img src='./images/apple.svg'/>&nbsp;  Appstore
                </div>
              </div>
            </div>
            <div className='col-lg-6 ' data-aos="zoom-in" style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
              <img src='./images/hero-bg.svg' style={{width:'100%'}}/>
              <div className='hero-show'>

              <div className='hero-input-container' >
                <input placeholder='Name'/>
                <input placeholder='Email'/>
               <div className='hero-input-btn'>
               <button class="home-contact-btn" type="submit">Get Early Access &nbsp; <img src='./images/arrow.svg'/></button>
               </div>
              </div>
              <div className='hero-btn-container' >
                <div className='hero-works'>
                 <img src='./images/play.svg'/> &nbsp;  See How it Works
                </div>
                <div className='playstore-btn'>
                <img src='./images/playstore.svg'/>&nbsp;  Playstore
                </div>
                <div className='playstore-btn'>
                <img src='./images/apple.svg'/>&nbsp;  Appstore
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-financial-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6' data-aos="slide-right">
              <img src='./images/order-r.svg' style={{width:'100%'}} />
            </div>
            <div className='col-lg-6 Financial' data-aos="slide-left" >
              <div className='financial-text-container'>
                <p className='financial-sub-text'>Why Choose us</p>
                <div className='financial-header'>
                Take small steps to a better financial future
                </div>
                <div className='financial-para'>
                RaundTable is Inspired by a century-old method of saving together. We are adding technology to make it faster, transparent and more convenient.
                </div>
                <div className='financial-line'></div>
                <div className='financial-tick-container'>
                  <div className='financial-tick'>
                    <img src='./images/tic.svg'/>
                   &nbsp; Get 24/7 access to your saving journey
                  </div>
                  <div className='financial-tick'>
                    <img src='./images/tic.svg'/>
                   &nbsp; Make contributions and receive payouts easily and
safely
                  </div>
                  <div className='financial-tick'>
                    <img src='./images/tic.svg'/>
                   &nbsp; Access our Support Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-financial-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 Financial Financial1' data-aos="slide-right">
            <div className='financial-text-container'>
                <p className='financial-sub-text'>Why Choose us</p>
                <div className='financial-header'>
                Save together.<br/>
Save better.<br/>
Save faster
                </div>
                <div className='financial-para-1'>
                We are all about inspiring our members to reach their full financial potential together and live fulfilling financial lives with the support of loved ones.  </div>
              </div>
            </div>
            <div className='col-lg-6' data-aos="slide-left">
            <img src='./images/credit-card.svg' style={{width:'100%'}} />
            </div>
          </div>
        </div>
      </section>
      <section className="Home-benefit-section">
<h1 className='benefit-header' data-aos="zoom-in" >Benefits</h1>
<p className='benefit-para' data-aos="slide-right">You set your savings goals. We help you and your trusted friends and loved ones get there.</p>
    <div className='container'>
    <div className='row'>
      <div className='col-lg-4 sm-box-center' data-aos="zoom-in">
        <div className='home-box'>
          <img src="./images/loan.svg"/>
          Home loan deposite
        </div>
        
      </div>
      <div className='col-lg-4 sm-box-center' data-aos="zoom-in">
        <div className='home-box'>
          <img src="./images/wedding.svg"/>
          Wedding
        </div>
        
      </div>
      <div className='col-lg-4 sm-box-center' data-aos="zoom-in">
        <div className='home-box'>
          <img src="./images/car.svg"/>
          Car
        </div>
        
      </div>
      <div className='col-lg-4 sm-box-center' data-aos="zoom-in">
        <div className='home-box'>
          <img src="./images/loan.svg"/>
          Smart Phone
        </div>
        
      </div>
      <div className='col-lg-4 sm-box-center' data-aos="zoom-in">
        <div className='home-box'>
          <img src="./images/holiday.svg"/>
          Holidays
        </div>
        
      </div>
      <div className='col-lg-4 sm-box-center' data-aos="zoom-in">
        <div className='home-box'>
          <img src="./images/furniture.svg"/>
         Furniture
        </div>
        
      </div>
    </div>
    </div>
      </section>
      <section className='Home-joining-section'>
        <div className='container'>
       <div className='row'>
         <div className='col-lg-6' data-aos="slide-right">
         <div className='financial-sub-text'>Why should you work with us?</div>
    <div className='home-join-header'>
    Why join
RaundTable?
    </div>
         </div>
         <div className='col-lg-6' data-aos="slide-left">
         <div className='financial-tick-container'>
                  <div className='financial-tick financial-tick1'>
                    <img src='./images/left-arrow.svg'/>
                   &nbsp; Help yourself while helping your community and loved ones
                  </div>
                  <div className='financial-tick financial-tick1'>
                    <img src='./images/left-arrow.svg'/>
                   &nbsp; No costly interest rates, set up fees or any hidden costs
                  </div>
                  <div className='financial-tick financial-tick1'>
                    <img src='./images/left-arrow.svg'/>
                   &nbsp; Manage your savings groups in a secure and transparent way
                  </div>
                </div>
         </div>
       </div>
       <div className='home-better-header' data-aos="zoom-in">Here's why we are better</div>
       <div className='row'>
         <div className='col-lg-4 hm-sm-interest' data-aos="zoom-in" style={{display:"flex",flexDirection:'column',justifyContent:'center'}}>
           <div className='home-better-container'>
             <p>No interest charged</p>
             <p>No set up fees</p>
             <p>Help loved ones</p>
             <p>Community Benefit</p>
             <p>Transparent fees</p>
           </div>
         </div>
         <div className='col-lg-4 hm-sm-mybox' data-aos="zoom-in">
           <div className='better-box'>
             <p>Round Table</p>
             <img src='./images/tick-green.svg'/>
             <img src='./images/tick-green.svg'/>
             <img src='./images/tick-green.svg'/>
             <img src='./images/tick-green.svg'/>
             <img src='./images/tick-green.svg'/>
             
           </div>
         </div>
         <div className='col-lg-4 hm-sm-mybox' data-aos="zoom-in">
         <div className='better-box better-box1'>
         <p>Traditional Financial
Products</p>
             <img src='./images/cross.svg'/>
             <img src='./images/cross.svg'/>
             <img src='./images/cross.svg'/>
             <img src='./images/cross.svg'/>
             <img src='./images/cross.svg'/>
         </div>
         </div>
       </div>
       <div className='home-better-btn'>
       <button class="home-contact-btn" type="submit">Get Started</button>
       </div>
        </div>
       </section>
       <section className='Home-need-container'>
         <div className='container'>
           <h1 className='home-need-header' data-aos="slide-right">Here’s what you need to do</h1>
           <div className='row hm-sm-events'>
             <div className='col-lg-4 home-need-para-container r-image2'>
               <div className='home-need-img' data-aos="slide-right">
                 <img src='./images/register.svg'/>
               </div>
             </div>
             <div className='col-lg-4 r-image1' data-aos="zoom-in">
               <div className='home-line-container'>
                 <img src='./images/line.svg' />
                 <h1>01</h1>
                 <p>Register</p>
               </div>
             </div>
             <div className='col-lg-4 home-need-para-container r-image3'data-aos="slide-left" >
               <div className='home-need-paras'>
               Download the app
Submit your ID details
We verify them
               </div>
             </div>
           </div>
           <div className='row hm-sm-events'>
           <div className='col-lg-4 home-need-para-container r-image3' data-aos="slide-left" style={{display:'flex',alignItems:'flex-end'}} >
               <div className='home-need-paras home-need-para-right' >
               Create Table You are the Table Leader Set your table name Set your contribution amount Set your start date
               </div>
             </div>
            
             <div className='col-lg-4 r-image1' data-aos="zoom-in" >
               <div className='home-line-container'>
                 <img src='./images/line.svg' />
                 <h1>02</h1>
                 <p>Create Table</p>
               </div>
             </div>
             <div className='col-lg-4 home-need-para-container r-image2' data-aos="slide-right">
               <div className='home-need-img'>
                 <img src='./images/table.svg'/>
               </div>
             </div>
           </div>
           <div className='row hm-sm-events'>
             <div className='col-lg-4 home-need-para-container r-image2' data-aos="slide-left">
               <div className='home-need-img'>
                 <img src='./images/invite.svg'/>
               </div>
             </div>
             <div className='col-lg-4 r-image1' data-aos="zoom-in">
               <div className='home-line-container'>
                 <img src='./images/line.svg' />
                 <h1>03</h1>
                 <p>Invite Others</p>
               </div>
             </div>
             <div className='col-lg-4 home-need-para-container r-image3' data-aos="slide-right" >
               <div className='home-need-paras'>
               Invite your trusted crew Discuss Table details Adjust Table settings
               </div>
             </div>
           </div>
           <div className='row hm-sm-events' data-aos="slide-left">
           <div className='col-lg-4 home-need-para-container r-image3' style={{display:'flex',alignItems:'flex-end'}} >
               <div className='home-need-paras home-need-para-right' >
               Watch your savings grow
Help your loved ones
See your community grow
Be happy
  </div>
             </div>
            
             <div className='col-lg-4 r-image1'data-aos="zoom-in" >
               <div className='home-line-container'>
                 <img src='./images/line.svg' />
                 <h1>04</h1>
                 <p>Start Saving</p>
               </div>
             </div>
             <div className='col-lg-4 home-need-para-container r-image2' data-aos="slide-right">
               <div className='home-need-img'>
                 <img src='./images/saving.svg'/>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section className="Home-plan-container">
         <h1 className='Plan-header' data-aos="zoom-in">Our Plans</h1>
         <p className='Plan-para' data-aos="slide-left">
         If you receive last you pay <span>$0</span> fees. It pays to come last 🙌
         </p>
         <div className='container'>
           <div className='row'>
             <div className='col-lg-4 hm-sm-plancards' data-aos="zoom-in">
               <div className='plan-cards'>
                <div className="plancard-header">
                  <div className='card-header-img'>
                    <img src='./images/five-less.svg' />
                  </div>
                  <div className='card-header-txt'>
                  Five Less
                  </div>
                </div>
                <div className='plancard-txt-container'>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Min Members: <span>3</span>
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Max Members: <span>5</span>
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Admin Fee: <span>1.3%</span> of Pay Out
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg' style={{marginTop:"-30px"}}/>
                   <div className='plancard-t '> 
                  <p> Admin fee reduces by <span>0.1%</span> based on receiving position</p>
                   </div>
                   
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Last person pays: <span>0$</span> 
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    <span>Fortnightly</span> or <span>Monthly Cycle</span>
                  </div>
                  <div className='plancard-btn' style={{marginTop:"50px"}}>
                  <button class="home-contact-btn" type="submit">Get Started</button>
                  </div>
                </div>
               </div>
             </div>
             <div className='col-lg-4 hm-sm-plancards' data-aos="zoom-in">
             <div className='plan-cards'>
             <div className='plan-cards'>
                <div className="plancard-header">
                  <div className='card-header-img'>
                    <img src='./images/five-plus.svg' />
                  </div>
                  <div className='card-header-txt'>
                  Five Plus
                  </div>
                </div>
                <div className='plancard-txt-container'>
                  <div className='plancard-txt-data'>
                    <img src='./images/filled-tick.svg'/>
                    Min Members: <span>6</span>
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/filled-tick.svg'/>
                    Max Members: <span>12</span>
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/filled-tick.svg'/>
                    Admin Fee: <span>1.3%</span> of Pay Out
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/filled-tick.svg' style={{marginTop:"-30px"}}/>
                   <div className='plancard-t '> 
                  <p> Admin fee reduces by <span>0.1%</span> based on receiving position</p>
                   </div>
                   
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/filled-tick.svg'/>
                    Last person pays: <span>0$</span> 
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/filled-tick.svg'/>
                   <span>Fortnight Cycle only</span>
                  </div>
                  <div className='plancard-btn' style={{marginTop:"50px"}}>
                  <button class="home-contact-btn" type="submit">Get Started</button>
                  </div>
                </div>
               </div>
                 </div>
             </div>
             <div className='col-lg-4 hm-sm-plancards' data-aos="zoom-in">
             <div className='plan-cards'>
             <div className='plan-cards'>
                <div className="plancard-header">
                  <div className='card-header-img'>
                    <img src='./images/five-square.svg' />
                  </div>
                  <div className='card-header-txt'>
                  Fair ‘n’ Square
                  </div>
                </div>
                <div className='plancard-txt-container'>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Min Members: <span>3</span>
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Max Members: <span>Unlimited</span>
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    <div className='plancard-t '> 
                  <p>  Admin Fee: <span>2.99%</span> per week (Billed Monthly)</p>
                   </div>
                    
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg' style={{marginTop:"-30px"}}/>
                   <div className='plancard-t '> 
                  <p> Every member 
 <span>pays the same fee </span> despite receiving position</p>
                   </div>
                   
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    Last person pays: <span>0$</span> 
                  </div>
                  <div className='plancard-txt-data'>
                    <img src='./images/half-tick.svg'/>
                    <span>Fortnightly</span> or <span>Monthly Cycle</span>
                  </div>
                  <div className='plancard-btn'>
                  <button class="home-contact-btn" type="submit">Get Started</button>
                  </div>
                </div>
               </div>
                 </div>
             </div>
           </div>
         </div>
       </section>
       <section className='Home-additional-benefit-section' >
         <h1 className='additional-benefit-heading' data-aos="slide-right">*Additional Benefits</h1>
         <div className='container'>
           <div className='additional-box' data-aos="zoom-in">
             <div className='row'>
               <div className='col-3'>
                 <div className='box-heading'>Table Leaders</div>
               </div>
               <div className='col-9'>
                 <div className='add-sub-box'>
                 <p>
                 Create a <span>Five Plus</span> Table with 8 or more members and you pay <span>NO</span> admin fees. Yes <span>$0</span> admin fee.
                
                 </p>
                  </div>
               </div>
             </div>
             <div className='row'>
               <div className='col-3'>
                 <div className='box-heading'>Members</div>
               </div>
               <div className='col-9'>
               <div className='add-sub-box'>
                 <p>
                 Get best deals and massive discounts when you shop for items you are saving for with our partners <span>(coming soon)</span>
            
                 </p>
               </div>
               </div>
             </div>
           </div>
         </div>
       </section>
    </div>
  )
}

export default Home