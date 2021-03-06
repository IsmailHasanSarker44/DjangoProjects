import React, { Component } from 'react';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';
import { CardColumns, Modal, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchPhotos, fetchComments } from '../../redux/actionCreators'
import Loading from './Loading';

const mapStateToProps = state => {
    return {
        imageDetails: state.imageDetails,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (photoId, author, rating, comment) => dispatch(
            addComment(photoId, author, rating, comment)
        ),
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Gallery extends Component {

    state = {
        ImageSelected: null,
        modalOpen: false
    }
    onImageSelect(selected) {
        this.setState({
            ImageSelected: selected,
            modalOpen: !this.state.modalOpen
        })
    }

    toogleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchComments();
    }

    render() {
        document.title = "Gallery";

        if (this.props.imageDetails.isLoading) {
            return (<Loading />)
        }
        else if (this.props.imageDetails.errMess != null) {
            return (
                <Alert color="danger">{this.props.imageDetails.errMess}</Alert>
            );
        }
        else {
            let Images = this.props.imageDetails.photos.map((singleDetails) => {
                return (
                    <Photo singleDetails={singleDetails}
                        key={singleDetails.id}
                        ImageSelect={() => this.onImageSelect(singleDetails)} />
                )
            }
            )

            let singleImageDetails = null;
            if (this.state.ImageSelected != null) {
                const comments = this.props.comments.comments.filter(comment => {
                    return this.state.ImageSelected.id === comment.photoId
                })
                singleImageDetails = <PhotoDetails
                    addComment={this.props.addComment}
                    comments={comments}
                    singleDetails={this.state.ImageSelected}
                    commentIsLoading={this.props.comments.isLoading}
                />
            }

            return (
                <div className="">
                    <div className="row">
                        <CardColumns>
                            {Images}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {singleImageDetails}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toogleModal}>
                                    Close
                            </Button>
                            </ModalFooter>
                        </Modal>
                        <CardColumns>
                        </CardColumns>
                    </div>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);