import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts(); // Fetch all products or modify the API to fetch a single product
      const product = products.find(p => p.id === id);
      setProduct(product);
    };
    fetchData();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
