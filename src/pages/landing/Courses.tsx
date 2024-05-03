import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

import Header from "../../components/landing/Header";
import CourseCard from "../../components/courses/CourseCard";
import Footer from '../../components/landing/Footer';

import './Courses.scss';

export type Course = {
    id: number;
    title: string;
    description: string;
    price: string;
    rating: string;
    image: string;
    reviews: number;
    category: string;
};

function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            const fetchedCourses: Course[] = [
                {
                    id: 1,
                    title: 'Modern Front-End Development',
                    description: 'Master HTML, CSS, and JavaScript to build responsive and dynamic websites.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '29.99 €',
                    rating: '4.8',
                    reviews: 3487,
                    category: 'Web Development',
                },
                {
                    id: 2,
                    title: 'Advanced React and Redux',
                    description: 'Deep dive into React development and learn to manage your application state with Redux.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '34.99 €',
                    rating: '4.9',
                    reviews: 2890,
                    category: 'Web Development',
                },
                {
                    id: 3,
                    title: 'Node.js: From Zero to Production',
                    description: 'Become a backend expert with Node.js, Express, and MongoDB databases.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '39.99 €',
                    rating: '4.7',
                    reviews: 4023,
                    category: 'Backend Development',
                },
                {
                    id: 4,
                    title: 'UX/UI Design for Beginners',
                    description: 'Understand the fundamental principles of interface design and user experience.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '24.99 €',
                    rating: '4.6',
                    reviews: 1765,
                    category: 'UX/UI Design',
                },
                {
                    id: 5,
                    title: 'Data Science Fundamentals',
                    description: 'Get introduced to the world of data analysis and learn to interpret complex information.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '45.99 €',
                    rating: '4.5',
                    reviews: 2319,
                    category: 'Data Science',
                },
                {
                    id: 6,
                    title: 'Full Stack with Django and React',
                    description: 'Build complete web applications with Django backend and React frontend.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '49.99 €',
                    rating: '4.7',
                    reviews: 1587,
                    category: 'Full Stack Development',
                },
                {
                    id: 7,
                    title: 'Introduction to Python',
                    description: 'Learn Python from scratch. A comprehensive course covering basic syntax to advanced programming concepts.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '19.99 €',
                    rating: '4.8',
                    reviews: 5400,
                    category: 'Programming',
                },
                {
                    id: 8,
                    title: 'Applied Machine Learning',
                    description: 'Explore advanced machine learning techniques and artificial intelligence to solve real-world problems.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '59.99 €',
                    rating: '4.9',
                    reviews: 3150,
                    category: 'Artificial Intelligence',
                },
                {
                    id: 9,
                    title: 'Mobile App Development with Flutter',
                    description: 'From interface creation to database integration, learn how to develop mobile apps with Flutter.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '35.99 €',
                    rating: '4.6',
                    reviews: 2020,
                    category: 'Mobile Development',
                },
                {
                    id: 10,
                    title: 'Cybersecurity for Beginners',
                    description: 'Discover the fundamentals of cybersecurity and how to protect your systems from threats.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '25.99 €',
                    rating: '4.7',
                    reviews: 1650,
                    category: 'Cybersecurity',
                },
                {
                    id: 11,
                    title: 'Cloud Computing Fundamentals',
                    description: 'Learn to work with major cloud computing platforms and deploy applications in the cloud.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '29.99 €',
                    rating: '4.5',
                    reviews: 1487,
                    category: 'Cloud Computing',
                },
                {
                    id: 12,
                    title: 'Digital Marketing and Social Media',
                    description: 'Practical course to learn how to design and execute effective digital marketing strategies and manage social media.',
                    image: 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1714405656/eLearning/courses/curso_py.jpg',
                    price: '49.99 €',
                    rating: '4.8',
                    reviews: 1932,
                    category: 'Digital Marketing',
                }
            ];

            setCourses(fetchedCourses);
        };

        fetchCourses();
    }, []);

    useEffect(() => {
        const filtered = selectedCategory ? courses.filter(course => course.category === selectedCategory) : courses;
        setFilteredCourses(filtered);
    }, [courses, selectedCategory]);

    const handleCategoryChange = (e: { value: string | null }) => {
        setSelectedCategory(e.value);
    };

    const categories = Array.from(new Set(courses.map(course => course.category)));
    const categoryOptions = [{ label: 'All', value: null }, ...categories.map(category => ({ label: category, value: category }))];

    return (
        <>
            <Header />
            <div className="coursesPage">
                <Dropdown
                    value={selectedCategory}
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    placeholder="All"
                />
                <div className="coursesList">
                    {filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Courses;