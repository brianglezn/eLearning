import { Course } from '../helpers/types';

const getAllCourses = async () => {
    try {
        const response = await fetch('https://elearning-back.onrender.com/courses');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const coursesData = await response.json();
        const formattedCourses = coursesData.map((course: Course) => ({
            ...course,
            id: course.id,
            rating: parseFloat(course.rating).toString()
        }));

        return formattedCourses;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

export default getAllCourses;
