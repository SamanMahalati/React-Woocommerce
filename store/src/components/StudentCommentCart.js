import React from 'react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//images 
import userImage from "../images/user.png"

//Style
import style from "./StudentCommentCart.module.css"

const StudentCommentCart = ({ data }) => {
    const { name, coursesStudent, comment } = data
    return (
        <div className={style.cartContainer}>
            <div className={style.StudentCommentCart}>
                <div className={style.cartHeader}>
                    <div className={style.studentImageContainer}>
                        <img src={userImage} alt="User Image" />
                    </div>
                    <div className={style.commentHeaderText}>
                        <h1 className={style.studentName}>{name}</h1>
                        <h5 className={style.studentCourseName}>{coursesStudent}</h5>
                    </div>
                </div>

                <h5 className={style.studendtComment}>{comment}</h5>
            </div>
        </div>
    );
};

export default StudentCommentCart;