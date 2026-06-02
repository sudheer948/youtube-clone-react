const Button = ({ name }) => {
  return (
    <div>
      <button className="m-2 px-5 py-2 bg-gray-300 rounded-lg transition-all hover:bg-gray-400 hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
