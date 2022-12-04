import React, { useState, useEffect } from 'react';

//Components
import StudentCommentCart from './StudentCommentCart';

//Style
import style from "./StudentComment.module.css"

//Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const allUsers = [
    {
        id: 1,
        name: "علی امینی",
        coursesStudent: "دانشجوی دوره ری اکت",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 2,
        name: "سامان محلاتی",
        coursesStudent: "دانشجوی دوره جاوااسکریپت",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 3,
        name: "احمد محبی",
        coursesStudent: "دانشجوی دوره نکست ",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 4,
        name: " غزاله احمدی",
        coursesStudent: "دانشجوی دوره ری اکت ",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 5,
        name: "حسن خدایی",
        coursesStudent: "دانشجوی دوره ری اکت ",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 6,
        name: "زهرا سبحانی",
        coursesStudent: "دانشجوی دوره نکست ",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 7,
        name: "مبینا آذرخش",
        coursesStudent: "دانشجوی دوره نکست ",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
    },
    {
        id: 8,
        name: "نیما خداداد",
        coursesStudent: "دانشجوی دوره  ری اکت",
        comment: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
        image: "https://generated.photos/face/neutral-latino-young-adult-male-with-short-brown-hair-and-brown-eyes--5e680c376d3b380006d62e0b"
    },
]


const StudentComment = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(allUsers)
    }, [])

    return (
        <div className={style.studentCommentContainer}>
            <div className={style.CartTitleContainer}>
                <h1 className={style.CartTitle}>نظرات دانشجویان</h1>
                <span className={style.CartTitleEffect}></span>
            </div>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={5}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                <div className={style.CommentContainer}>
                    {users.map(user => <SwiperSlide><StudentCommentCart key={user.id} data={user} /></SwiperSlide>)}
                </div>
            </Swiper>
        </div>
    );
};

export default StudentComment;