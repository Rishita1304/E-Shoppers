import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Annoucement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { productsList } from '../productData';

const Container = styled.div``;
const Title = styled.h1` 
margin-bottom:20px;
${mobile({ marginBottom: "10px" })}
`;

const FilterContent = styled.div`
display: flex; 
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
font-size:20px; 
font-weight:600;
margin-right: 20px;
${mobile({ marginRight: "0px", marginLeft: "10px"  })}
`;

const Select = styled.select`
margin-left:10px; 
padding:5px;
${mobile({ margin: "10px 5px" })}
`;

const Option = styled.option`
padding: 10px 0;
`;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value
        })
    }
    console.log(filters);
    console.log(sort);

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContent>
            <Filter>
                <FilterText>Filter Products: </FilterText>
                <Select name='color' onChange={handleFilter}>
                    <Option disabled selected>Color</Option>
                    <Option>white</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>black</Option>
                    <Option>green</Option>
                    <Option>yellow</Option>
                    <Option>brown</Option>
                </Select>
                <Select name='size' onChange={handleFilter}>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value='newest' >Newest</Option>
                    <Option value='asc'>Price (asc)</Option>
                    <Option value='desc'>Price (desc)</Option>
                </Select>
                </Filter>
        </FilterContent>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
