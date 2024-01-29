import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../store/thunks';
import Post from '../components/Post'
import '../styles/CSS/main.css';


function SearchResults() {
    const { term } = useParams();

    const navigate = useNavigate();

    const handleLinkClick = (post) => {
        // Use navigate to append the new route to the existing URL
        navigate(`../comments/${post.title.replace(/\s/g, '_')}`, { state: { post: post } });
    };


    const dispatch = useDispatch();
    // const { data, loading, error } = useSelector((state) => state.subredditPosts);
    const { data, loading, error  } = useSelector((state) => state.search)


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
              // Dispatch actions to fetch data from both APIs
              dispatch(fetchSearch(term));
            //   dispatch(fetchSubredditPosts(subreddit));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

      
          fetchData();

    }, [dispatch, term]);


    console.log('Redux State:', {
        search: { data, loading, error },
        // search: { searchData, searchLoading, searchError },
      });
    
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return <div>Search Loading...</div>;
    }
    if (error) {
        return <div> Search Error: {error}</div>;
    }

    console.log('searchData', data);

    return (
        <div>
            <div className="subreddit-header">
                    <h1 className="subreddit-title">search : {term}</h1>
                </div>

            <ul style={{ listStyle: 'none' }}>
                {data.map((post) => (
                    <div onClick={() => handleLinkClick(post)} key={post.id}>
                        <Post post={post} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;




