import React, { useState } from 'react';

// import StyledButton from '../../UI/StyledButton';
import CSSButton from '../../UI/CSSButton';
// import StyledFormControl from '../../UI/StyledFormControl'
import classes from './CourseInput.module.css';

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* examples of different kind of styles */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
      {/* <StyledFormControl className={!isValid && ' invalid'}> */}
      {/* <StyledFormControl invalid={!isValid}> */}
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        <label
        // style={{ color: isValid ? 'black' : 'red' }}
        >
          Course Goal
        </label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // style={{
          //   borderColor: isValid ? 'black' : 'red',
          //   background: isValid ? 'transparent' : 'salmon',
          // }}
        />
      </div>
      {/* </StyledFormControl> */}
      {/* <StyledButton type="submit">Add Goal</StyledButton> */}
      <CSSButton type="submit">Add Goal</CSSButton>
    </form>
  );
};

export default CourseInput;

const html = '<div></div>'