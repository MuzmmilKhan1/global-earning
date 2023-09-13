import React, { useState } from 'react'
import styles from '../../app/CSS/Form/form.module.css'
// import { Toast } from 'bootstrap';
import axios from 'axios';
// import Toast  from 'react-hot-toast';
// import toast from 'react-hot-toast'
// import { Notyf } from 'notyf';
import Helper from './Toast';

export default function Form() {
  // Define state variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [Subscribed, setSubscribed] = useState('');
  const [believe, setBelieve] = useState('');
  const [trust, setTrust] = useState('');
  const [work, setWork] = useState('');
  const [product, setProduct] = useState([])
  const [easypaisa, setEasypaisa] = useState()



  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!name && !email && !whatsapp && !Subscribed && !easypaisa && !believe && !trust && !work) {
    //   Helper.toast("error", "Error in the field")
    // }

    const emptyFields = [];

    if (!name) {
      emptyFields.push('Name');
    }

    if (!email) {
      emptyFields.push('Email');
    }

    if (!whatsapp) {
      emptyFields.push('Whatsapp Phone');
    }

    if (!Subscribed) {
      emptyFields.push('Package Subscribed');
    }

    if (!easypaisa) {
      emptyFields.push('Easypaisa Account');
    }

    if (!believe) {
      emptyFields.push('Do You believe in us');
    }

    if (!trust) {
      emptyFields.push('Do You trust us');
    }

    if (!work) {
      emptyFields.push('Would you like to work with us');
    }

    if (emptyFields.length > 0) {
      // Show a Notyf notification with the names of empty fields
      Helper.toast('error', `The following fields are empty: ${emptyFields.join(', ')}`);
      return; // Don't proceed with form submission
    }

    await function uploadingProduct() {
      setProduct(...product, name)
      setProduct(...product, email)
      setProduct(...product, phone)
      setProduct(...product, whatsapp)
      setProduct(...product, Subscribed)
      setProduct(...product, believe)
      setProduct(...product, trust)
      setProduct(...product, work)
    }

    // Check if any of the fields are empty

    // axios.push("/productsent", product)

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <h1>My Form</h1>
        {/* Name input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="name">Name:</label><br />
          <input
            className={`${styles.input}`}
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Email:</label><br></br>
          <input
            className={`${styles.input}`}
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="nope"
            required
          />
        </div>
        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Whatsapp Phone:</label><br></br>
          <input
            className={`${styles.input}`}
            type="number"
            id="Whatsapp"
            name="whatsapp"
            placeholder='Whatsapp Number'
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            autoComplete="nope"
            required
          />
        </div>
        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Package Subscribed:</label><br></br>
          <select
            className={`${styles.input}`}
            type="select"
            id="Package"
            name="package"
            placeholder='Package Subscribed'
            value={Subscribed}
            onChange={(e) => setSubscribed(e.target.value)}
            required
          >
            <option value="" disabled>Select a package</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>


        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Easypaisa Account:</label><br></br>
          <input
            className={`${styles.input}`}
            type="number"
            id="easypaisa"
            name="easypaisa"
            placeholder='Easypaisa Account Used to Subscribe'
            value={easypaisa}
            onChange={(e) => setEasypaisa(e.target.value)}
            autoComplete="nope"
            required
          />
        </div>

        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Do You believe in us:</label><br></br>
          <select
            className={`${styles.input}`}
            type="select"
            id="Package"
            name="package"
            placeholder='Package Subscribed'
            value={believe}
            onChange={(e) => setBelieve(e.target.value)}
            required
          >
            <option value="" disabled>Select a package</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Do You trust us:</label><br></br>
          <select
            className={`${styles.input}`}
            type="select"
            id="Package"
            name="package"
            placeholder='Package Subscribed'
            value={trust}
            onChange={(e) => setTrust(e.target.value)}
            required
          >
            <option value="" disabled>Select a package</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* Email input */}
        <div className={`${styles.inputDivs}`}>
          <label htmlFor="email">Would you like to work with us:</label><br></br>
          <select
            className={`${styles.input}`}
            type="select"
            id="Package"
            name="package"
            placeholder='Package Subscribed'
            value={work}
            onChange={(e) => setWork(e.target.value)}
            required
          >
            <option value="" disabled>Select a package</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
