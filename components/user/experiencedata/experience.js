const Experience = ({ experience }) => {

  return (
    <>
      <span className="text-base ">{experience.duration}</span>
      <div className="last:mb-14">
        <h2 className="text-[1.2rem] font-medium mb-2">
          {experience.role} . {experience.company}
        </h2>
        <p className="mb-4 text-[1.1rem]">{experience.jd}</p>
        <ul className="flex flex-wrap gap-10 text-sm">
          {experience.stacks.length > 0 &&
            experience.stacks.map((stack, i) => <li className='bg-white lg:px-4 lg:py-2 border border-gray-300 rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out'>{stack}</li>)}
        </ul>
      </div>
    </>
  );
};

export default Experience;
