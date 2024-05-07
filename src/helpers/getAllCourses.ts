import coursesData from '../bdd/courses.json';

const getAllCourses = () => {
    return coursesData.map(course => ({
        ...course,
        id: course.id,
        rating: parseFloat(course.rating).toString() 
    }));
}

export default getAllCourses;
