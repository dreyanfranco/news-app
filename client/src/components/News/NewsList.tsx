import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { getNews } from '../../service/news.service'
import NewsCard from './NewsCard'

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getNews().then((response) => {
      setNewsData(response.data)
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {newsData.map((news: any) => {
        return (<NewsCard key={news._id} {...news} />)
      })}
    </div>
  )
}


export default NewsList