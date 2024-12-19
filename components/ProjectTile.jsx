const ProjectTile = ({img, copy, link, size}) => {

  return (
    <>
      <div className={`${size} inline-block`}>
        {
          link ? 
            <a href={link}><img src={img} alt={copy || ""} /></a>
          : 
            <img src={img} alt="" />
        }
        {
          (copy) && <p>{copy}</p>
        }
      </div>
    </>
  )
}
export default ProjectTile;