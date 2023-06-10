const Experience = ({ experience }) => {

  return (
    <>
      <span className="text-sm font-thin">{experience.duration}</span>
      <div className="last:mb-14">
        <h2 className="text-md font-light mb-2">
          {experience.role} . {experience.company}
        </h2>
        <p className="text-md font-thin mb-4">{experience.jd}</p>
        <ul className="flex flex-wrap gap-10 text-sm">
          {experience.stacks.length > 0 &&
            experience.stacks.map((stack, i) => <li className='cursor-pointer hover:scale-110 transition-all ease-in-out'>{stack}</li>)}
        </ul>
      </div>
    </>
  );
};

export default Experience;
