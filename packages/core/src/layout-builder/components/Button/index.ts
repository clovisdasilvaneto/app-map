const Button = ({ onClick, container }) => {
  const template = `
    <button>Click me</button>
  `;

  const render = () => {
    container.innerHTML = template;
    container.querySelector("button").addEventListener("click", onClick);
  };

  return {
    render
  };
};

export default Button;
