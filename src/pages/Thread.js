import React, { useRef, useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments } from '../store/thunks';
import Comment from "../components/Comment";
import he from 'he'; // Import the HTML entity decoding library
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon



function Thread() {
    const { id } = useParams();

    const location = useLocation();

    const post = location.state?.post || '';

    const permalink = post.permalink;

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.postComments);


    //  ALL THIS IS VERY REPETITIVE FROM THE POST COMPONENT. ITS ALL FOR FORMATTING
    // -----------------------------------------------------------------------------
    // FOR IMAGE POST
    const image = post.url;

    // FOR FLAIR TAGS
    //they categorize the posts
    const flairBackgroundColor = post.link_flair_background_color;
    //adjust text color to background
    let flairTextColor = post.link_flair_text_color === 'light' ? '#fff' : '#000';


    // FOR SELF TEXT / TEXT PREVIEW
    // from data, parse encoded html (to keep formatting)
    // using he library :)
    const htmlString = post.selftext_html
    let decodedHtmlString;
    if (htmlString) {
        decodedHtmlString = he.decode(htmlString);
    }
    const selfTextPreview = useRef(null);
    const [shouldShowOverlay, setShouldShowOverlay] = useState(false);
    

    useEffect(() => {
        dispatch(fetchPostComments(permalink));
    }, [dispatch, permalink]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
            <div style={{ backgroundColor: 'plum' }}>
                <p> Thread </p>
            </div>



            <div className='post-layout-container'>
                <div className='post-container'>
                    <div className='post-header'>
                        <p>
                            r/{post.subreddit}  
                        </p>
                        <p>
                            u/{post.author}
                        </p>
                    </div>

                    <div className='post-main'>
                        <p className='post-title'>
                            {post.title}
                        </p>
                        <p className='flair' style={{ backgroundColor: flairBackgroundColor, color: flairTextColor }}>
                            {post.link_flair_text}
                        </p>
                        <div ref={selfTextPreview} >
                            <div dangerouslySetInnerHTML={{ __html: decodedHtmlString }} />

                        </div>
                        {shouldShowOverlay ?
                                (
                                    <>
                                        <div className='see-whole-post'> See whole Post </div>
                                    </>
                                )
                                : <></>}
                        <FaComment className='comment-icon' />
                        {post.num_comments}
                        {/* styles={{height: {post[thumbnail_height]}}} */}
                        {{ image } ?
                            (<img src={post.url} style={{ width: 100, height: 100 }} alt="Post Image" />) :
                            <></>
                        }
                        <img src={post.thumbnail} alt="Thumbnail Image" />
                    </div>

                </div>
            </div>




            <div>
                <ul style={{ listStyle: 'none' }}>
                    {data.map((comment) => (
                        <>
                                <Comment comment={comment} key={comment.id}/>
                        </>

                    ))}
                </ul>
            </div>
        </>
    )
}

export default Thread;