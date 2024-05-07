export type Episode = {
    episode: number;
    title: string;
    description: string;
    video_url: string;
};

export type Chapter = {
    chapter: number;
    title: string;
    episodes: Episode[];
};

export type Course = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    rating: string;
    reviews: number;
    category: string;
    chapters: Chapter[];
};
