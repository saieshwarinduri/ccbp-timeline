import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderElement = list => {
    if (list.categoryId === 'COURSE') {
      return <CourseTimelineCard list={list} key={list.id} />
    }
    return <ProjectTimelineCard list={list} key={list.id} />
  }
  return (
    <div className="chrono-container">
      <h1 className="myjourny">
        MY JOURNEY OF
        <br />
        <h1 className="ccbp4.0"> CCBP 4.0</h1>
      </h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(each => renderElement(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
