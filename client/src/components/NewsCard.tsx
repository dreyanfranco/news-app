import React from 'react'
import { News } from '../interfaces/News.interface'
import { Card } from 'react-bootstrap'

const NewsCard = ({title, description, date, content, author }: News) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>News Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Card.Text></Card.Text>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default NewsCard