import { useNavigate } from 'react-router-dom';
import { Rating } from 'primereact/rating';

import { Course } from '../../helpers/types';
import './CourseCard.scss';

function CourseCardPurchased({ course }: { course: Course }) {
    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate(`/dashboard/mycourses/${course._id}`);
    };

    return (
        <div className="courseCard" onClick={handleCourseClick}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="courseCard-ratingAndReviews">
                <Rating value={parseFloat(course.rating)} readOnly cancel={false} />
                <span>{`(${course.reviews})`}</span>
            </div>
        </div>
    );
}

export default CourseCardPurchased;
