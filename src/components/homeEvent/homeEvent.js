import "./style.css"
import img from "./../../jpg/01.jpg"
import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import { UserInfo } from '../UserInfo';
import { SkeletonHome } from './skeletonhome';
import { fetchRemovePost } from '../../redux/slices/posts';


export const EventHome = ({
    id,
    title,
    createdAt,
    imageUrl,
    user,
    viewsCount,
    commentsCount,
    tags,
    children,
    isFullPost,
    isLoading,
    isEditable,
    }) => {

    if (isLoading) {
        return <SkeletonHome />;
    }
    
    return (
        <div>
            <div className="admin">
                <Link to={`/posts/${id}`} className="adminLink">
                    <div className="admindiv">
                        <div className="admindivup">
                            <div className="admindivupleft">
                                <p className="pading">{title}</p>
                            </div>
                        </div>
                        <div className="admindivdown">
                            <div>
                                {
                                    imageUrl ? <img className="admindivdownLeft" src={imageUrl}/> : <></>
                                }                
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
</div>
);
};