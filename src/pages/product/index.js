import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom'

import './styles.css'


export default class Product extends Component {
  state ={
    product: {},
  };

  async componentDidMount(){
    const { id } = this.props.match.params;

    console.log('IDD')
    console.log(id)
    
    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
   const { product } = this.state;

   console.log('TESTTEE')
   console.log(product)
   console.log(product.title)

   return(
     <div className="product-info">
       <h1>{product.title}</h1>
       <p>{product.description}</p>

       <p>
          URL: <a href={product.url}>{product.url}</a>
       </p>
       <b/>
       <p>
          <Link to={`/`}>Voltar</Link>
       </p>
     </div>
   );
  }
}
