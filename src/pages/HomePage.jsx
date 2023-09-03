import CarouselImage from "../components/CarouselImage"
import CoursesList from "../components/CoursesList"
import Learners from "../components/Learners"
import Photos from "../components/Photos"
import StudentsViewing from "../components/StudentsViewing"

function HomePage() {
    return (
        <div>
            <CarouselImage/>
            <Photos/>
            <CoursesList/>
            <Learners/>
            <StudentsViewing/>
        </div>
    )
}

export default HomePage
