import React from 'react'
import { Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Nav justify variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href='#'>News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="###">Archives</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar