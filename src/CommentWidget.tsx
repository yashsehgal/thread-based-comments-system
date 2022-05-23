import React, { useState } from 'react';

interface PostCaption {
    caption: String
};

interface Comment {
    username: String,
    comment: String
    commentThread: Comment
};

export default function CommentWidget() {
    const [commentThreadRef, setCommentThread] = useState(null);

    let postCaption: PostCaption = {
        caption: 'This is my first ever photo on this platform, this is so cool :)'
    }

    return (
        <React.Fragment>
            <div className='comment-widget-wrapper p-4 h-fit border border-dashed border-gray-500 rounded-md bg-white'>
                <div className="post-caption-wrapper">
                    <p className='leading-snug text-sm text-gray-800 font-normal'>{postCaption.caption}</p>
                </div>
            </div>
        </React.Fragment>
    )
}