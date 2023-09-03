import CarouselImage from "../components/CarouselImage"
import CoursesList from "../components/CoursesList"
import Learners from "../components/Learners"
import Photos from "../components/Photos"

function HomePage() {
    return (
        <div>
            <CarouselImage/>
            <Photos/>
            <CoursesList/>
            <Learners/>
        </div>
    )
}

export default HomePage
