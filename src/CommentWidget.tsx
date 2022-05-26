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
    const [commentThreadRef, setCommentThread] = useState([]);
    const [threadInputVisibilityRef, setThreadInputVisibility] = useState('none');

    let postCaption: PostCaption = {
        caption: 'This is my first ever photo on this platform, this is so cool :)'
    }

    return (
        <React.Fragment>
            <div className='comment-widget-wrapper p-4 h-fit border border-dashed border-gray-500 rounded-md bg-white'>
                <div className="post-caption-wrapper w-full h-auto flex flex-row items-center justify-between">
                    <p className='leading-snug font-semibold text-gray-800'>{postCaption.caption}</p>
                    <button className='px-4 py-1 flex flex-row items-center justify-center text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-800'
                        onClick={() => {
                            if (threadInputVisibilityRef.toLowerCase() === "none") {
                                setThreadInputVisibility("flex");
                            }
                        }}
                    >
                        Comment
                    </button>
                </div>
                <div className='mt-6' />
                <div className='post-comment-thread-wrapper'>
                    {commentThreadRef.length == 0
                        ? <React.Fragment></React.Fragment>
                        : <React.Fragment>
                            {commentThreadRef.map((comment, commentIndex) => {
                                return (
                                    <div className='w-full h-auto flex flex-row items-center justify-flex-start' key={commentIndex}>
                                        {comment.username}
                                        {comment.comment}
                                    </div>
                                )
                            })}
                        </React.Fragment>
                    }
                </div>
                <div className='new-comment-thread-input-wrapper w-full h-auto flex flex-row items-center justify-between gap-8 mt-6'
                    style={{
                        display: threadInputVisibilityRef
                    }}
                >
                    <input type="text" placeholder='Type your comment or response to this post :)' 
                        className='px-4 py-1.5 rounded-md border border-gray-400 w-full' id="comment-thread-input-value"
                    />
                    <button className='px-4 py-1 flex flex-row items-center justify-center text-white font-semibold rounded-md bg-green-600 hover:bg-green-800'
                        onClick={() => {
                            let commentThreadInputValue = document.getElementById('comment-thread-input-value');
                            
                        }}
                    >
                        Reply
                    </button>
                    <button className='px-4 py-1 flex flex-row items-center justify-center text-white font-semibold rounded-md bg-red-600 hover:bg-red-800'
                        onClick={() => {
                            if (threadInputVisibilityRef.toLowerCase() === "flex") {
                                setThreadInputVisibility("none");
                            }
                        }}
                    >
                        Discard
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}