import React,{useState} from 'react'
import "./FAQS.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Faqs = () => {
  const[expand1,setexpand]=useState('')
  const[expand2,setexpand2]=useState('')
  const[expand3,setexpand3]=useState('')
  const[expand4,setexpand4]=useState('')
  const[expand5,setexpand5]=useState('')
  const[expand6,setexpand6]=useState('')
  const[expand7,setexpand7]=useState('')
  const[expand8,setexpand8]=useState('')
  const[expand9,setexpand9]=useState('')
  const[expand10,setexpand10]=useState('')
  const[expand11,setexpand11]=useState('')
  const[expand12,setexpand12]=useState('')
  const[expand13,setexpand13]=useState('')
  const[expand14,setexpand14]=useState('')
  const[expand15,setexpand15]=useState('')
  const[expand16,setexpand16]=useState('')
  const handleChange=()=>{
    if(expand1=="panel1"){
      setexpand("")
    }else{
      setexpand("panel1")
    }
   
    // if(expand3=="panel3"){
    //   setexpand3("")
    // }else{
    //   setexpand3("panel3")
    // }
    // if(expand4=="panel4"){
    //   setexpand4("")
    // }else{
    //   setexpand4("panel4")
    // }
    // if(expand5=="panel5"){
    //   setexpand5("")
    // }else{
    //   setexpand5("panel5")
    // }
    // if(expand6=="panel6"){
    //   setexpand6("")
    // }else{
    //   setexpand6("panel6")
    // }
    // if(expand7=="panel7"){
    //   setexpand7("")
    // }else{
    //   setexpand7("panel7")
    // }
    // if(expand8=="panel8"){
    //   setexpand8("")
    // }else{
    //   setexpand8("panel8")
    // }
    // if(expand9=="panel9"){
    //   setexpand9("")
    // }else{
    //   setexpand("panel9")
    // }
    // if(expand10=="panel10"){
    //   setexpand10("")
    // }else{
    //   setexpand10("panel10")
    // }
    // if(expand11=="panel11"){
    //   setexpand11("")
    // }else{
    //   setexpand11("panel11")
    // }
    // if(expand12=="panel12"){
    //   setexpand12("")
    // }else{
    //   setexpand12("panel12")
    // }
    // if(expand13=="panel13"){
    //   setexpand13("")
    // }else{
    //   setexpand13("panel13")
    // }
    // if(expand14=="panel14"){
    //   setexpand14("")
    // }else{
    //   setexpand14("panel14")
    // }
    // if(expand15=="panel15"){
    //   setexpand15("")
    // }else{
    //   setexpand15("panel15")
    // }
    // if(expand16=="panel16"){
    //   setexpand16("")
    // }else{
    //   setexpand16("panel16")
    // }
  }
  return (
    <div className='faq-section'>
      <div className='container'>
        <h1 className='faq-header' data-aos="zoom-in">Frequently Asked Questions</h1>
        <p className='faq-para' data-aos="slide-left">Be brave. It takes courage to ask a question. We are here to help</p>
        <div className='faq-search-container' data-aos="slide-right">
        <div className='faq-search' >
          <input placeholder='search function'/>
          <img src='./images/search.svg'/>
        </div>
        </div>
        <div className='faq-accordian-container'>
          <div className='faq-accordian' data-aos="slide-left">
            <h1 className='accordian-header'>Registration</h1>
            <div className='my-accordian'>
            <Accordion expanded={expand1 === 'panel1'} onChange={()=>handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expand1 === 'panel1'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Can I cancel my subscription?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand2 === 'panel2'} onChange={()=>expand2=='panel2'?setexpand2(""):setexpand2("panel2")}>
        <AccordionSummary
          expandIcon={expand2 === 'panel2'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I contact the support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand3 === 'panel3'} onChange={()=>expand3=='panel3'?setexpand3(""):setexpand3("panel3")}>
        <AccordionSummary
          expandIcon={expand3 === 'panel3'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Is a credit card required?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand4 === 'panel4'} onChange={()=>expand4=='panel4'?setexpand4(""):setexpand4("panel4")}>
        <AccordionSummary
          expandIcon={expand2 === 'panel4'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>How do I grow my savings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
          </div>
          <div className='faq-accordian' data-aos="slide-left" style={{marginTop:"50px"}}>
            <h1 className='accordian-header'>Creating Circles</h1>
            <div className='my-accordian'>
            <Accordion expanded={expand5 === 'panel5'} onChange={()=>expand5=='panel5'?setexpand5(""):setexpand5("panel5")}>
        <AccordionSummary
          expandIcon={expand5 === 'panel5'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>How to Create circles?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand6 === 'panel6'} onChange={()=>expand6=='panel6'?setexpand6(""):setexpand6("panel6")}>
        <AccordionSummary
          expandIcon={expand6 === 'panel6'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>Is a credit card required?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand7 === 'panel7'} onChange={()=>expand7=='panel7'?setexpand7(""):setexpand7("panel7")}>
        <AccordionSummary
          expandIcon={expand7 === 'panel7'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>How do I grow my savings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            
          </div>
          <div className='faq-accordian' data-aos="slide-left" style={{marginTop:"50px"}}>
            <h1 className='accordian-header'>Managing Circles</h1>
            <div className='my-accordian'>
            <Accordion expanded={expand8 === 'panel8'} onChange={()=>expand8=='panel8'?setexpand8(""):setexpand8("panel8")}>
        <AccordionSummary
          expandIcon={expand8 === 'panel8'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>How to Manage Circles?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand9 === 'panel9'} onChange={()=>expand9=='panel9'?setexpand9(""):setexpand9("panel9")}>
        <AccordionSummary
          expandIcon={expand9 === 'panel9'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography>Is a credit card required?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand10 === 'panel10'} onChange={()=>expand10=='panel10'?setexpand10(""):setexpand10("panel10")}>
        <AccordionSummary
          expandIcon={expand10 === 'panel10'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography>How do I grow my savings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            
          </div>
          <div className='faq-accordian' data-aos="slide-left" style={{marginTop:"50px"}}>
            <h1 className='accordian-header'>Membership</h1>
            <div className='my-accordian'>
            <Accordion expanded={expand11 === 'panel11'} onChange={()=>expand11=='panel11'?setexpand11(""):setexpand11("panel11")}>
        <AccordionSummary
          expandIcon={expand11 === 'panel11'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography>How to Manage my membership?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand12 === 'panel12'} onChange={()=>expand12=='panel12'?setexpand12(""):setexpand12("panel12")}>
        <AccordionSummary
          expandIcon={expand12 === 'panel12'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel12a-content"
          id="panel12a-header"
        >
          <Typography>How to cancel my membership?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand13 === 'panel13'} onChange={()=>expand13=='panel13'?setexpand13(""):setexpand13("panel13")}>
        <AccordionSummary
          expandIcon={expand13 === 'panel13'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel13a-content"
          id="panel13a-header"
        >
          <Typography>How to know expier my membership?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            
          </div>
          <div className='faq-accordian' data-aos="slide-left" style={{marginTop:"50px"}}>
            <h1 className='accordian-header'>Payments</h1>
            <div className='my-accordian'>
            <Accordion expanded={expand14 === 'panel14'} onChange={()=>expand14=='panel14'?setexpand14(""):setexpand14("panel14")}>
        <AccordionSummary
          expandIcon={expand14 === 'panel14'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel14a-content"
          id="panel14a-header"
        >
          <Typography>How to purchase plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand15 === 'panel15'} onChange={()=>expand15=='panel15'?setexpand15(""):setexpand15("panel15")}>
        <AccordionSummary
          expandIcon={expand15 === 'panel15'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel15a-content"
          id="panel15a-header"
        >
          <Typography>How to compare my plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className='my-accordian'>
            <Accordion expanded={expand16 === 'panel16'} onChange={()=>expand16=='panel16'?setexpand16(""):setexpand16("panel16")}>
        <AccordionSummary
          expandIcon={expand16 === 'panel16'?<RemoveIcon />:<AddIcon/>}
          aria-controls="panel16a-content"
          id="panel16a-header"
        >
          <Typography>How to know expier my membership?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  )
}


export default Faqs