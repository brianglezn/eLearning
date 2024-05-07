import coursesData from '../bdd/courses.json';

const getAllCourses = () => {
    return coursesData.map(course => ({
        ...course,
        id: course.course,
        rating: course.rating.toString()
    }));
}

export default getAllCourses;
