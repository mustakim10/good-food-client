import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <h2>1. Tell us the differences between uncontrolled and controlled components.</h2>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h2>2. How to validate React props using PropType ?</h2>
            <p><strong>React PropTypes validators</strong> <br />
i. any : The prop can be of any data type. <br />
ii. bool : The prop should be a Boolean. <br />
iii. number : The prop should be a number. <br />
iv. string : The prop should be a string. <br />
v. func : The prop should be a function. <br />
vi. array : The prop should be an array. <br />
vii. object : The prop should be an object.</p>

<h2>3. Tell us the difference between nodejs and express js.</h2>
<p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
<h2>4. What is a custom hook, and why will you create a custom hook?</h2>
<p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
        </div>
    );
};

export default Blog;