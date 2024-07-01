import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import { Grid, Typography, MenuItem, Select, FormControl, InputLabel, TextField, Button, Pagination } from '@mui/material';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [availability, setAvailability] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(category, company);
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, [category, company]);

  const handleFilterChange = () => {
    // Implement filtering logic here
  };

  const handleSortChange = () => {
    // Implement sorting logic here
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>All Products</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* Add MenuItem components for each category */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Company</InputLabel>
        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
          {/* Add MenuItem components for each company */}
        </Select>
      </FormControl>
      <TextField fullWidth margin="normal" label="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <TextField fullWidth margin="normal" label="Price Range" value={priceRange} onChange={(e) => setPriceRange(e.target.value.split(',').map(Number))} />
      <FormControl fullWidth margin="normal">
        <InputLabel>Availability</InputLabel>
        <Select value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <MenuItem value="in-stock">In Stock</MenuItem>
          <MenuItem value="out-of-stock">Out of Stock</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Sort By</InputLabel>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="discount">Discount</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleFilterChange}>Filter</Button>
      <Grid container spacing={2} marginTop={2}>
        {filteredProducts.slice((page - 1) * productsPerPage, page * productsPerPage).map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={Math.ceil(filteredProducts.length / productsPerPage)} page={page} onChange={handlePageChange} />
    </div>
  );
};

export default AllProducts;
