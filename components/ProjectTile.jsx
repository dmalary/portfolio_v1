const ProjectTile = ({img, copy, link, size}) => {

  return (
    <>
      <div className={`inline-block px-1 py-1 ${size}`}>
        {
          link ? 
            <a href={link} target="_blank" rel="noopener noreferrer"><img src={img} alt={copy || ""} /></a>
          : 
            <img src={img} alt="" />
        }
        {
          (copy) && <p className="text-left">{copy}</p>
        }
      </div>
    </>
  )
}
export default ProjectTile;