import React from 'react';
import {NavLink} from 'react-router-dom';

function ArticleCard(props) {
    return(
        <>
            <section className="feed">
                <div className="article-card">
                    <div className="userpic">
                        <img src="https://swastikyadav.com/static/9190270ec82670b045f4c683c0a8ede8/f53aa/profile.png" alt="user" width="50px" height="50px" />
                        <p>{props.author}</p>
                    </div>

                    <h3 className="title">{props.title}</h3>
                    <p className="about">{props.about}</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <NavLink className="a" to="/"><small className="articlePage">Read More...</small></NavLink>
                        <p style={{padding: '4px', border: '1px solid gray', cursor: 'pointer'}}>Like</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ArticleCard;