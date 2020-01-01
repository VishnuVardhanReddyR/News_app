import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/news.components";
const App = () => {

  const API_KEY = ""; //place your key here

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('in');
  const [query, setQuery]= useState('business');

  useEffect(() => {
    getNews();
  }, [search,query]);
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=
  const getNews = async(e) => {
    const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=${search}&category=${query}&apiKey=${API_KEY}`);
    const response= await api_call.json();
    setNews(response.articles);
    console.log(response);

    }
  
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    setQuery(e.target.value);
  }

  return (

  <div className="App">
    <h1>Current News</h1>
    <div className="row">
      <div className="column">
        <div class="form-group">
        <div class="col-sm-6 col-md-4 align-self-center">
          <select className="form-control" value={search} onChange={updateSearch}>
            <option>country</option>
           <option value="ar">Argentina</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgium</option>
            <option value="br">Brazil</option>
            <option value="bg">Bulgaria</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czechia</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="in">India</option>
            <option value="id">Indonesia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="kr">Korea</option>
            <option value="lv">Latvia</option>
            <option value="lt">Lithuania</option>
            <option value="my">Malaysia</option>
            <option value="mx">Mexico</option>
            <option value="ma">Morocco</option>
            <option value="nl">Netherlands</option>
            <option value="nz">Newzealand</option>
            <option value="ng">Nigeria</option>
            <option value="no">Norway</option>
            <option value="ph">Philippines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="rs">Serbia</option>
            <option value="sg">Singapore</option>
            <option value="sk">Slovakia</option>
            <option value="si">Slovenia</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="ua">Ukraine</option>
            <option value="ae">United Arab Emirates</option>
            <option value="gb">United Kingdom</option>
            <option value="us">USA</option>
            <option value="ve">Venezuela</option>
            <option value="za">South Africa</option>
          </select>
          </div>
        </div>
        </div>
        <div className="column">
        <div class="form-group">
        <div class="col-sm-6 col-md-4 self-align-center">
          <select className="form-control" value={query} onChange={getSearch}>
            <option>category</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        </div>
        </div>
        </div>
        {news.map(source =>  (
          <News 
          key={source.title}
          title={source.title}
          image={source.urlToImage}
          description={source.description}
          url={source.url}
          content={source.content}
          author={source.author}
          time={source.publishedAt}
          />
        ))}
      </div>
    );


};
export default App;
