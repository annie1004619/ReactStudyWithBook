import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      //요청 대기중
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9c872d4a6bdf4481a5e270d7b95e753e',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
  };

  //대기 중 일때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  //아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  //articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom; 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
  width:100%;
  padding-left: 1rem;
  padding-right: 1rem;
  }
`;

export default NewsList;
