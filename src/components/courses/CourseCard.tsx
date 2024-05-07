import { Course } from '../../helpers/types';
import { Rating } from 'primereact/rating';

import './CourseCard.scss';

function CourseCard({ course }: { course: Course }) {
    return (
        <div className="courseCard">
            <img src={course.image} alt={course.title} style={{ width: '100%', display: 'block' }} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="courseCard-price">{course.price}</p>
            <div className="courseCard-ratingAndReviews">
                <Rating value={parseFloat(course.rating)} readOnly cancel={false} />
                <span>{`(${course.reviews})`}</span>
            </div>
        </div>
    );
}

export default CourseCard;
