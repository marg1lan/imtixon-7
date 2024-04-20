'use client'
import './page.css'; 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../Components/Loading';

function Page() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false)
      })
      
  }, []);

  const handleAddToCart = (product) => {
    let cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handleLike = (product) => {
    let likedProductsList = likedProducts.slice();
    likedProductsList.push(product);
    setLikedProducts(likedProductsList);
  };
  if (loading) {
    return <Loading />;
  }


  return (
    <div className="all">
      <Link href='/'>Go Back</Link>
      <Image
        className='like'
        src='/like.svg'
        alt='rasm'
        width={50}
        height={50}
      />
      <div className="umumiyy">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <Image
                src={product.image}
                alt="Card Image"
                width={300}
                height={200}
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{product.category}</h2>
              <p className="card-description">Lorem ipsum dolor sit amet.</p>
              <div className="card-price">${product.price}</div>
              <button className="card-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button className="like-button" onClick={() => handleLike(product)}>
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="liked-products">
        <h2>Liked Products</h2>
        {likedProducts.map((product, index) => (
          <div className="liked-card" key={index}>
            <div className="liked-image">
              <Image
                src={product.image}
                alt="Liked Card Image"
                width={150}
                height={100}
              />
            </div>
            <div className="liked-content">
              <h3>{product.category}</h3>
              <p>{product.description}</p>
              <div>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
