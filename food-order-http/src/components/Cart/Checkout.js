import {useRef, useState} from 'react';
import classes from './Checkout.module.css';

const inputValidity = (val) => {
    return val.trim().length > 0
}

const zipValidity = (val) => {
    return val.trim().length === 5
}

const Checkout = (props) => {
    const nameRef = useRef();
    const streetRef = useRef();
    const zipRef = useRef();
    const cityRef = useRef();

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        zip: true,
        city: true
    })

  const confirmHandler = (event) => {
    event.preventDefault();
    
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredZip = zipRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = inputValidity(enteredName);
    const enteredStreetIsValid = inputValidity(enteredStreet);
    const enteredCityIsValid = inputValidity(enteredCity);
    const enteredZipIsValid = zipValidity(enteredZip);

    setFormValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        zip: enteredZipIsValid,
        city: enteredCityIsValid
    })

    const fortmIsValid =
            enteredNameIsValid 
            && enteredCityIsValid 
            && enteredStreetIsValid
            && enteredZipIsValid
    
    if (!fortmIsValid) {
        return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        zip: enteredZip,
        city: enteredCity
    })
  };

  const nameControlClasses = `${classes.control} ${formValidity.name ? "" : classes.invalid }`
  const streetControlClasses = `${classes.control} ${formValidity.street ? "" : classes.invalid }`
  const zipControlClasses = `${classes.control} ${formValidity.zip ? "" : classes.invalid }`
  const cityControlClasses = `${classes.control} ${formValidity.city ? "" : classes.invalid }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef}/>
        {!formValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef}/>
        {!formValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={zipControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={zipRef}/>
        {!formValidity.zip && <p>Please enter valid postal code</p>}

      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef}/>
        {!formValidity.city && <p>Please enter valid City</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;