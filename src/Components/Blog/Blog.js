import React from 'react';
import BlogContainer from '../BlogContainer/BlogContainer';
import blogBanner from '../../assets/blog-banner.jpg';
import SectionBanner from '../SectionBanner/SectionBanner';
import { useQuery } from '@tanstack/react-query';

const Blog = () => {
    const { blogsLoading, blogsError, data: blogsData } = useQuery({
        queryKey: ['blogs'],
        queryFn: () =>
            fetch('http://localhost:5000/all-blogs').then(
                (res) => res.json(),
            ),
    })
    if (blogsLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <SectionBanner banner={blogBanner} moto={"Important Blogs"} subTitle={"Only blogs here"} />
            <BlogContainer blogsData={blogsData} />
        </div>
    );
};

export default Blog;