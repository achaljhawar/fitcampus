function WorkoutTypeCard({ title, description, image, gradFro, gradTo }) {
    return (<div className={"bg-gradient-to-r from-[rgb(29,116,106)] to-[rgb(69,187,174)] overflow-clip relative rounded-3xl flex flex-col p-4 gap-2"}>
    <img className="absolute right-0 bottom-0 h-[95%]" alt="arm" src={image} />
    <div className="h-12 w-12 pb-2"></div>
    <p className="text-sm font-light">{description}</p>
    <p className="text-3xl font-semibold">{title}</p>
  </div>)
}

export default WorkoutTypeCard;
