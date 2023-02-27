import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import styles from "./Post.module.css";
import { UserInfo } from "../UserInfo";
import { PostSkeleton } from "./Skeleton";

export const Post = ({
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
    return <PostSkeleton />;
  }

  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
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
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? (
              title
            ) : (
              <Link className={styles.titleLink} to={`/posts/${id}`}>
                {title}
              </Link>
            )}
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li className={styles.tagsLi} key={name}>
                <Link className={styles.tagsLiLink} to={`/tag/${name}`}>
                  #{name}
                </Link>
              </li>
            ))}
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li className={styles.postDetailsLi}>
              <EyeIcon />
              <span className={styles.postDetailsLiSvg}>{viewsCount}</span>
            </li>
            <li className={styles.postDetailsLi}>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
