export type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    rating: string;
    reviews: number;
    category: string;
    chapters: {
        chapter: number;
        title: string;
        episodes: {
            episode: number;
            title: string;
            description: string;
            video_url: string;
        }[];
    }[];
};
