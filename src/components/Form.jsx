import React from 'react'
import Head from './Head'

const Form = () => {
  return (
    <div className='form'>
      <Head />
      <div className='form-head'>
        <h1>Pro Form Layout</h1>
        <h3><span style={{ color: '#778295' }}>dashbord/ </span><span style={{ color: '#2424df' }}>Pro Form Layout</span></h3>
      </div>
      <div className='forms'>
        <form action="" className='contact-form'>
          <h2>Contact From 2</h2>
          <hr />
          <br />
          <div className='details'>
            <div>
              <label htmlFor="firstName">First name</label> <br />
              <input type="text" placeholder='Enter your first name' />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label> <br />
              <input type="text" placeholder='Enter your last name' />
            </div>
          </div>
          <div className='details'>
            <div>
              <label htmlFor="email">Email</label> <br />
              <input type="text" placeholder='yourmail@gmail.com' />
            </div>
            <div>
              <label htmlFor="phone">Phone</label> <br />
              <input type="text" placeholder='(321) 5555-0115' />
            </div>
          </div>
          <label style={{ paddingLeft: '1vw' }} htmlFor="">Select option</label><br /><br />
          <div className="radio">
            <div>
              <input type="radio" name="option" id="" /> <label htmlFor="">Graphic Design</label>
            </div>
            <div>
              <input type="radio" name="option" id="" /> <label htmlFor="">Web Development</label>
            </div>
            <div>
              <input type="radio" name="option" id="" /> <label htmlFor="">Logo Design</label>
            </div>
            <div style={{ marginTop: '-6vh' }}>
              <input type="radio" name="option" id="" /> <label htmlFor="">Others</label>
            </div>
          </div>
          <div style={{ paddingInline: '1vw' }}>
            <label htmlFor="">Message</label><br />
            <textarea name="" placeholder='Type your message'></textarea>
          </div>
          <div style={{ paddingInline: '1vw' }}>
            <button>Send Message</button>
          </div>
        </form>
        <form action="" className='contact-form'>
          <h2>Contact From 2</h2>
          <hr />
          <br />
          <div className='survey'>
            <label htmlFor="">Name</label><br />
            <input type="text" placeholder='Enter your full name' />
          </div>
          <div className='survey'>
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder='Enter your email address' />
          </div>
          <div className='survey'>
            <label htmlFor="">Age</label><br />
            <input type="text" placeholder='Enter your age' />
          </div>
          <div className='survey'>
            <label htmlFor="">which Option best describes you?</label><br />
            <input type="text" placeholder='Enter your full name' />
          </div>
          <div className='survey-radio'>
            <label htmlFor="">Would you recommend our site to a friend?</label> <br /><br />
            <div>
              <input type="radio" name="site" id="" />
              <label htmlFor="">Yes</label>
            </div>
            <div>
              <input type="radio" name="site" id="" />
              <label htmlFor="">No</label>
            </div>
            <div>
              <input type="radio" name="site" id="" />
              <label htmlFor="">May be</label>
            </div>
          </div>
          <div className='survey-radio'>
            <label htmlFor="">Which langueages and framworks you know?</label> <br /><br />
            <div>
              <input type="radio" name="site" id="" />
              <label htmlFor="">Yes</label>
            </div>
            <div>
              <input type="radio" name="site" id="" />
              <label htmlFor="">No</label>
            </div>
            <div>
              <input type="radio" name="site" id="" />
              <label htmlFor="">May be</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form