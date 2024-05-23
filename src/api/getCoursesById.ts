import { Course } from '../helpers/types';

const getCourseById = async (id: string): Promise<Course | null> => {
    try {
        const response = await fetch(`https://elearning-back.onrender.com/courses/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const courseData = await response.json();
        const formattedCourse: Course = {
            ...courseData,
            id: courseData._id,
            rating: parseFloat(courseData.rating).toString()
        };

        return formattedCourse;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

export default getCourseById;
