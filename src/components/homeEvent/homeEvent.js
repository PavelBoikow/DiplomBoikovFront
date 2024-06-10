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
        {/* <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
        {isEditable && (
            <div className={styles.editButtons}>
            <Link to={`/posts/${id}/edit`}>
                <IconButton color="primary">
                <EditIcon />
                </IconButton>
            </Link>
            <IconButton onClick={onClickRemove} color="secondary">
                <DeleteIcon />
            </IconButton>
            </div>
        )}
        {imageUrl && (
            <img
            className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
            src={imageUrl}
            alt={title}
            />
        )}
        <div className={styles.wrapper}>
            <UserInfo {...user} additionalText={createdAt} />
            <div className={styles.indention}>
            <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
                {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
            </h2>
            <ul className={styles.tags}>
                {tags.map((name) => (
                <li key={name}>
                    <Link to={`/tag/${name}`}>#{name}</Link>
                </li>
                ))}
            </ul>
            {children && <div className={styles.content}>{children}</div>}
            <ul className={styles.postDetails}>
                <li>
                <EyeIcon />
                <span>{viewsCount}</span>
                </li>
                <li>
                <CommentIcon />
                <span>{commentsCount}</span>
                </li>
            </ul>
            </div>
        </div>
        </div> */}
</div>
);
};