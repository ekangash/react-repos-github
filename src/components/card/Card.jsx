import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './card.less';
import {getContributors, getCurrentRepo} from "../actions/repos";

// Браузер роутер прокидывает историю вперед и назад во все прокинутые через него роуты(маршуты)
// С помощьюроутеров мы можем проходить вперед, назад или на опеределенную страницу.
const Card = (props) => {
    const { username, reponame } = useParams();
    const [repo, setRepo] = useState({owner: {}});
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo);
        getContributors(username, reponame, setContributors);
    }, []);

    console.log('contributors', contributors);

    return (
        <div>
            <div>
                <button onClick={() => props.history.goBack()} className="back_btn">Back</button>
            </div>
            <img src={ repo.owner.avatar_url } alt=""/>
            <div className="name">{ repo.name }</div>
            <div className="stars">{ repo.stargazers_count }</div>
            {
                contributors.map((c, index) => {
                   return <div>{index + 1}. { c.login }</div>
                })
            }
        </div>
    )
};


export default Card;