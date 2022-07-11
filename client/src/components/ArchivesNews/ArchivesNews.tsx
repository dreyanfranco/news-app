import React from 'react'

import { Link } from 'react-router-dom'
import { News as NewsInterface } from '../../interfaces/News.interface'
import { Button, Card } from 'react-bootstrap'

const ArchivesNews = ({ title, description, date, content, author }: NewsInterface) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>{date}</Card.Text>
                <Button variant="primary">Archive</Button>
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default ArchivesNews