import { Link } from "@tanstack/react-router";

function WorkoutTypeCard({ title, description, image, gradFro, gradTo, link }) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradFro}, ${gradTo})`,
  };

  return (
    <Link to={link} className="bg-gradient-to-r rounded-3xl flex flex-col p-4 gap-2 relative overflow-clip" style={gradientStyle}>
      <img className="absolute right-0 bottom-0 h-[95%]" alt="arm" src={image} />
      <div className="h-12 w-12 pb-2"></div>
      <p className="text-sm font-light">{description}</p>
      <p className="text-3xl font-semibold">{title}</p>
    </Link>
  );
}

export default WorkoutTypeCard;