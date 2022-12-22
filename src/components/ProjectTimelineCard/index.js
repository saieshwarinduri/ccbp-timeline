import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {list} = props
  const {
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = list

  return (
    <div className="projectContaienr">
      <img className="image" src={imageUrl} alt="project" />
      <div className="titleduraiton">
        <h1>{projectTitle}</h1>
        <div className="calenderAndduration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
