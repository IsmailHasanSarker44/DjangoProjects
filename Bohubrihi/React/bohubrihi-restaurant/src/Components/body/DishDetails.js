import React from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';
import CommmentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: '10px' }}>
                <CardImg src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>
                            {props.dish.description}
                        </p>
                        <p>Price:
                            {props.dish.price}
                        </p>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommmentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;