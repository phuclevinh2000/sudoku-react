import React, {FC, Children} from 'react'

import Block from "./block"
import { Container, Row } from './styles'

const Grid: FC = () => {
    return (
        <Container data-cy="grid-container">
            {/* React.Chilren.toArray to generate key */}
            {/* _ for no need data */}
            {Children.toArray([...Array(9)].map((_, rowIndex) => (   
                <Row data-cy="grid-row-container">
                    {Children.toArray([...Array(9)].map((_, colIndex) => (
                        <Block colIndex={colIndex} rowIndex={rowIndex}/>
                    )))}
                </Row>
            )))}
        </Container>
    )
}

export default Grid
