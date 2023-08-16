import React from 'react';
import BlogContainer from '../BlogContainer/BlogContainer';
import blogBanner from '../../assets/blog-banner.jpg';
import SectionBanner from '../SectionBanner/SectionBanner';
import blogDetailsRow1 from '../../assets/bd-1.jpg';
import blogDetailsRow2 from '../../assets/bd-2.jpg';
import blogDetailsRow3 from '../../assets/bd-3.jpg';
import blog2 from '../../assets/blog-1.jpg';
import blog3 from '../../assets/blog-3.jpg';

const Blog = () => {
    const blogsData = [
        {
            _id: "6446efceee52035939ba4e83",
            blogTopBanner: "https://i.ibb.co/7C2NCQH/our-doctor.jpg",
            blogPublishedDate: "FEBRUARY 28, 2019",
            authorName: "JOHN SMITH",
            blogType: "HEART RATE, MEDICINE",
            blogComments: "NO COMMENTS",
            blogTitle: "Using anthrax to fight cancer effectively",
            blogTopPicture: "https://i.ibb.co/PZT0M18/blog-details.jpg",
            blogSubTitle: "I neglect my talents",
            blogDisplayShortDetails: "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language",
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: blogDetailsRow1,
            blogDetailsPic2: blogDetailsRow2,
            blogDetailsPic3: blogDetailsRow3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: [
                "Impenetrable foliage of my trees, and but a few stray gleams.",
                "A wonderful serenity has taken possession of my entire soul.",
                "I should be incapable of drawing a single stroke at the present moment."
            ],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkableLine: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            "blogPointsTwo": [
                "Impenetrable foliage of my trees, and but a few stray gleams.",
                "A wonderful serenity has taken possession of my entire soul.",
                "I should be incapable of drawing a single stroke at the present moment."
            ]
        },
        {
            _id: "6446efceee52035565656939ba4e83",
            blogTopBanner: "https://i.ibb.co/7C2NCQH/our-doctor.jpg",
            blogPublishedDate: "FEBRUARY 28, 2019",
            authorName: "JOHN SMITH",
            blogType: "HEART RATE, MEDICINE",
            blogComments: "NO COMMENTS",
            blogTitle: "Brushing your teeth may keep your heart healthy",
            blogTopPicture: blog2,
            blogSubTitle: "I neglect my talents",
            blogDisplayShortDetails: "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language",
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: blogDetailsRow1,
            blogDetailsPic2: blogDetailsRow2,
            blogDetailsPic3: blogDetailsRow3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: [
                "Impenetrable foliage of my trees, and but a few stray gleams.",
                "A wonderful serenity has taken possession of my entire soul.",
                "I should be incapable of drawing a single stroke at the present moment."
            ],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkableLine: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            "blogPointsTwo": [
                "Impenetrable foliage of my trees, and but a few stray gleams.",
                "A wonderful serenity has taken possession of my entire soul.",
                "I should be incapable of drawing a single stroke at the present moment."
            ]
        },
        {
            _id: "6446efceee52035454423939ba4e83",
            blogTopBanner: "https://i.ibb.co/7C2NCQH/our-doctor.jpg",
            blogPublishedDate: "FEBRUARY 28, 2019",
            authorName: "JOHN SMITH",
            blogType: "HEART RATE, MEDICINE",
            blogComments: "NO COMMENTS",
            blogTitle: "Doctor’s Failure to Diagnose a Medical Condition",
            blogTopPicture: blog3,
            blogSubTitle: "I neglect my talents",
            blogDisplayShortDetails: "I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language",
            blogDetailsOne: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
            anotherBlogLink: "New Law Article",
            blogDetailsPic1: blogDetailsRow1,
            blogDetailsPic2: blogDetailsRow2,
            blogDetailsPic3: blogDetailsRow3,
            blogDetailsTwo: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.",
            blogPointsOne: [
                "Impenetrable foliage of my trees, and but a few stray gleams.",
                "A wonderful serenity has taken possession of my entire soul.",
                "I should be incapable of drawing a single stroke at the present moment."
            ],
            blogDetailsThree: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet",
            remarkableLine: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.",
            "blogPointsTwo": [
                "Impenetrable foliage of my trees, and but a few stray gleams.",
                "A wonderful serenity has taken possession of my entire soul.",
                "I should be incapable of drawing a single stroke at the present moment."
            ]
        }
    ]

    return (
        <div>
            <SectionBanner banner={blogBanner} moto={"Important Blogs"} subTitle={"Only blogs here"} />
            <BlogContainer blogsData={blogsData} />
        </div>
    );
};

export default Blog;