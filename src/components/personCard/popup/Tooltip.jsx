import './Tooltip.scss'

const Tooltip = ({ x, y, text }) => {
    return (
      <div
        style={{ position: 'fixed', left: x + 20, top: y }}
        className="tooltip"
      >
        {text}
      </div>
    );
  };
  export default Tooltip