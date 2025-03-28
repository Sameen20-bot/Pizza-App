//For specific import
// export const Pizza = (props) => {
//   return (
//     <div className="pizza">
//       <h1>{props.name}</h1>
//       <p>{props.description}</p>
//     </div>
//   )
// };


const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  )
};

//No need to import react tools will do it for you as you are using JSX

export default Pizza;


//What is JSX?

// JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It looks like HTML but works inside JavaScript.

// Why use JSX?
// Easier to write & read – It makes UI code more readable.
// Combines HTML & JavaScript – You can write HTML-like code directly inside JavaScript.
// Efficient rendering – React converts JSX into optimized JavaScript for better performance.