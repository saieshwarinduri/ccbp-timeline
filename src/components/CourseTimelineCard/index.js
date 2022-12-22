import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {list} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    tagsList,
    duration,
  } = list
  return (
    <div className="cardcontaienr">
      <div className="ttitleDate">
        <h1>{courseTitle}</h1>
        <div className="clockDuration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tagContiner">
        {tagsList.map(each => (
          <p className="taggg">{each.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
