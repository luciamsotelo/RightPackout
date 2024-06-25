import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
  const initialReviewsData = JSON.parse(localStorage.getItem('reviews')) || [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Great service and excellent support! Highly recommended.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Nice products and fast delivery. Will buy again!',
    },
    {
      id: 3,
      name: 'David Brown',
      rating: 5,
      comment: 'Awesome experience. The team really cares about customer satisfaction.',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [reviewsData, setReviewsData] = useState(initialReviewsData);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviewsData));
  }, [reviewsData]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddReview = () => {
    const newReview = {
      id: reviewsData.length + 1,
      name: formData.name,
      rating: parseInt(formData.rating),
      comment: formData.comment,
    };
    setReviewsData([...reviewsData, newReview]); // Update state with new review
    setFormData({ name: '', rating: 5, comment: '' });
    handleCloseModal();
  };

  // Function to calculate average rating
  const calculateAverageRating = () => {
    if (reviewsData.length === 0) return 0;

    const totalRating = reviewsData.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviewsData.length).toFixed(0); // Return average rounded to one decimal place
  };

  return (
    <div className="review-container" style={{ marginBottom: '60px' }}>
      <h2 className="text-center mb-4">Customer Reviews</h2>

      <div className="average-rating text-center mb-4">
        <p>Average Rating: {calculateAverageRating()}</p>
      </div>

      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <Card key={review.id} className="review-card">
            <Card.Body>
              <div className="rating-stars">
                {[...Array(review.rating)].map((star, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} className="star-icon" />
                ))}
              </div>
              <Card.Title>{review.name}</Card.Title>
              <Card.Text>{review.comment}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleShowModal}>
          Leave a Review
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name:</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating:</label>
              <select className="form-select" id="rating" name="rating" value={formData.rating} onChange={handleInputChange}>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment:</label>
              <textarea className="form-control" id="comment" name="comment" rows="3" value={formData.comment} onChange={handleInputChange}></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleAddReview}>Submit Review</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Review;
