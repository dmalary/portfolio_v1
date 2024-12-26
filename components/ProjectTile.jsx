/* eslint-disable react/prop-types */

const ProjectTile = ({img, copy, link, size}) => {

  return (
    <>
      <div className={`inline-block px-1 py-1 ${size} font-montserrat`}>
        {
          link ? 
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img className={'img-shadow'} style={{'border-radius': '0.25rem'}} src={`${import.meta.env.BASE_URL}${img}`} alt={copy || ""} />
            </a>
          : 
            <img className={'img-shadow'} style={{'border-radius': '0.25rem'}} src={`${import.meta.env.BASE_URL}${img}`} alt={copy || ""} />
        }
        {
          (copy) && <p className="text-left">{copy}</p>
        }
      </div>
    </>
  )
}
export default ProjectTile;