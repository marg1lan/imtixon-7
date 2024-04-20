'use client'
import './page.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Loading from '../Components/Loading'


function Women() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='wrapper'>
      <div className='task'>
        <div className='logo'>
          <Image src="/logo.svg" alt="tasvir" width={91} height={45} />
        </div>
        <div className='links'>
        <Link className='link' href='/'>Shop</Link>
          <Link className='link' href='/men'>Men</Link>
          <Link className='link' href='/women'>Women</Link>
          <Link className='link' href='/combos'>Combos</Link>
          <Link className='link' href='/joggers'>Joggers</Link>
        </div>
        <div className='input'>
          <input type="text" placeholder="Search" />
        </div>
        <div className='icons'>
          <div className="one-icon">
            <button className='btn'>
                  <Link href='/about'><Image src='/like.svg' alt="tasvir" width={20} height={20} /></Link>
            </button>
          </div>
          <div className="two-icon">
            <button className='btn'>
              <Image src='/user.svg' alt="tasvir" width={20} height={20} />
            </button>
          </div>
          <div className="three-icon">
            <button className='btn'>
              <Image src='/shopping.svg' alt="tasvir" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="kotta-img">
          <Image src='/kotta.png' alt="tasvir" width={520} height={785} />
        </div>
        <div className="texts">
          <div className="one-text">
            <h1>Raven Hoodie With <br /> Black colored Design</h1>
          </div>
          <div className="size">
            <Image src='/size.svg' alt="tasvir" width={290} height={89} />
          </div>
          <p className='para'>Colours Available </p>
          <div className="colors">
            <div className="color1">
              <button></button>
            </div>
            <div className="color2">
              <button></button>
            </div>
            <div className="color3">
              <button></button>
            </div>
            <div className="color4">
              <button></button>
            </div>
          </div>
          <div className="btns">
            <div className="add">
              <button className='Add'>Add To Cart</button>
            </div>
            <div className="pri">
              <button>$63.00</button>
            </div>
          </div>
          <div className="producy">
            <h1>Product Description</h1>
          </div>
          <div className="like">
            <button>Like</button>
          </div>
        </div>
      </div>
      <div className="smill">
        <h1>Similar Products</h1>
        <div className="cards">
          {product.map((product, index) => (
            <div className="card" key={index}>
              <Image className='image' src={product.image} alt="tasvir" width={282} height={300} />
              <div className="name">
                <h3>{product.category}</h3>
              </div>
              <div className="price">
                <h3>${product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="foooter">
      <div className='footer'>

<div className='um'>
  <div className='Text1'>
    <div className="p">
      <p >Need Help</p>
    </div>
    <div className='kop'>
      <div className='contact'> <h3>Contact use</h3></div>
      <div className='contact'> <h3>Track Order</h3></div>
      <div className='contact'> <h3>Returns & Refunds</h3></div>
      <div className='contact'> <h3>FAQ,s</h3></div>
      <div className='contact'> <h3>Carreer</h3></div>
    </div>
  </div>
  <div className='Text1'>
    <div className="p">
      <p >Company</p>
    </div>
    <div className='kop'>
      <div className='contact'> <h3>About us</h3></div>
      <div className='contact'> <h3>euphoria Blog</h3></div>
      <div className='contact'> <h3>euphoriastan</h3></div>
      <div className='contact'> <h3>Collaboration</h3></div>
      <div className='contact'> <h3>Media</h3></div>
    </div>
  </div>
  <div className='Text1'>
    <div className="p">
      <p >More Info</p>
    </div>
    <div className='kop'>
      <div className='contact'> <h3>Term and Conditions</h3></div>
      <div className='contact'> <h3>Privacy Policy</h3></div>
      <div className='contact'> <h3>Shipping Policy</h3></div>
      <div className='contact'> <h3>Sitemap</h3></div>
      <div className='contact'> <h3>Site   </h3></div>
    </div>
  </div>
  <div className='Text1'>
    <div className="p">
      <p >Location</p>
    </div>
    <div className='kop'>
      <div className='contact'> <h3>support@euphoria.in</h3></div>
      <div className='contact'> <h3>Eklingpura Chouraha, Ahmedabad Main Road</h3></div>
      <div className='contact'> <h3>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</h3></div>
      <div className='contact'> <h3>Order</h3></div>
      <div className='contact'> <h3>Sport@aephpria</h3></div>
    </div>
  </div>
</div>
<div className='instala'>
  <div className='insta'>
    <Image className='TwoCard' src='/tort.svg' alt="tasvir" width={178} height={38} />
  </div>
  <div className='togrisi'>
    <h2>Download The App </h2>
    <div className="imi">
      <Image className='TwoCard' src='/play.svg' alt="tasvir" width={328} height={53} />
    </div>
  </div>
</div>
<div className='popular'>
  <p>Popular Category</p>
</div>
</div>
      </div>
   
    </div>
  )
}

export default Women