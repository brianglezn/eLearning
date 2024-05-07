import { Course } from './types';

import coursesData from '../bdd/courses.json';

const getCourseById = (id: number): Course | undefined => {
    return coursesData.find(course => course.id === id);
}

export default getCourseById;
