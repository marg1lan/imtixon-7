'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Loading from './Components/Loading';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [twoProduct, setTwoProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => {
        setTwoProduct(data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="Wrapper">
        <div className={styles.task}>
          <div className={styles.logo}>
            <Image src="/logo.svg" alt="tasvir" width={91} height={45} />
          </div>
          <div className={styles.links}>
            <Link className={styles.link} href='/'>Shop</Link>
            <Link className={styles.link} href='/men'>Men</Link>
            <Link className={styles.link} href='/women'>Women</Link>
            <Link className={styles.link} href='/combos'>Combos</Link>
            <Link className={styles.link} href='/joggers'>Joggers</Link>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.icons}>
            <div className="one-icon">
              <button className={styles.btn}>
                <Image src='/like.svg' alt="tasvir" width={20} height={20} />
              </button>
            </div>
            <div className="two-icon">
              <button className={styles.btn}>
                <Image src='/user.svg' alt="tasvir" width={20} height={20} />
              </button>
            </div>
            <div className="three-icon">
              <button className={styles.btn}>
                <Image src='/shopping.svg' alt="tasvir" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="sliders">
          <Image src='/banner.svg' alt="tasvir" width={1340} height={716} />
        </div>
        <div className="New">
          <h1 className={styles.haj1}>New Arrival</h1>
          <div className={styles.allCardd}>
            {products.map((product, index) => (
              <div key={index} className={styles.cards}>
                <div className={styles.img}>
                  <Image
                    className={styles.imgTwo}
                    src={product.image}
                    alt='tasvir'
                    width={262}
                    height={262}
                  />
                </div>
                <div className="desc">
                  <h3 className={styles.haj3}>{product.category}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="foter">
            <div className={styles.yana}>
              <div className={styles.birCard}>
                <div className="text">
                  <div className={styles.oneTex}>
                    <h1> WE MADE YOUR EVERYDAY <br />  FASHION BETTER!</h1>
                  </div>
                  <div className={styles.twoTex}>
                    <h2>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</h2>
                  </div>
                  <div className="btn">
                    <button className={styles.butn}>Shop now</button>
                  </div>
                </div>
              </div>
              <div>
                <Image className={styles.TwoCard} src='/bg2.png' alt="tasvir" width={614} height={639} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ora}>
          <div className="parag">
            <h2 className={styles.parag}>Top Brands Deal</h2>
          </div>
          <div className="desccc">
            <h3 className={styles.ttext}>Up To <span className={styles.span}>60%</span> off on brands</h3>
          </div>
          <div className={styles.brand}>
            <div className={styles.card1}>
              <Image className={styles.nike} src='/nike1.png' alt="tasvir" width={200} height={100} />
            </div>
            <div className="bran2">
              <Image className={styles.nike} src='/hm.png' alt="tasvir" width={200} height={100} />

            </div>
            <div className="brand3">
              <Image className={styles.nike} src='/le.png' alt="tasvir" width={200} height={100} />

            </div>
            <div className="brand4">
              <Image className={styles.nike} src='/usa.png' alt="tasvir" width={200} height={100} />
            </div>
            <div className="brand5">
              <Image className={styles.nike} src='/puma.png' alt="tasvir" width={200} height={100} />
            </div>
          </div>
        </div>
        <div className="twocard">
          <div className="paraaa">
            <h1 className={styles.feed}>Feedback</h1>
          </div>
          <div className={styles.umumiy}>
            <div className={styles.onecard}>
              <div className={styles.ikitali}>
                <div className="img">
                  <Image className={styles.opa} src='/opa.svg' alt="tasvir" width={57} height={57} />
                </div>
                <div className={styles.yul}>
                  <div className={styles.oneyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.twoyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.threeyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.fouryu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.fiveyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                </div>
              </div>
              <div className={styles.aname}>
                <h3>Floyd Miles</h3>
              </div>
              <div className={styles.kota}>
                <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
              </div>
            </div>

            <div className={styles.twocard}>
              <div className={styles.ikitali}>
                <div className="img">
                  <Image className={styles.opa} src='/ak1.svg' alt="tasvir" width={57} height={57} />
                </div>
                <div className={styles.yul}>
                  <div className={styles.oneyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.twoyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.threeyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.fouryu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.fiveyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                </div>
              </div>
              <div className={styles.aname}>
                <h3>Ronald Richards</h3>
              </div>
              <div className={styles.kota}>
                <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
              </div>
            </div>

            <div className={styles.twocard}>
              <div className={styles.ikitali}>
                <div className="img">
                  <Image className={styles.opa} src='/ak2.svg' alt="tasvir" width={57} height={57} />
                </div>
                <div className={styles.yul}>
                  <div className={styles.oneyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.twoyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.threeyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.fouryu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                  <div className={styles.fiveyu}>
                    <Image src='/yulduz.svg' alt="tasvir" width={19} height={18} />
                  </div>
                </div>
              </div>
              <div className={styles.aname}>
                <h3>Savannah Nguyen</h3>
              </div>
              <div className={styles.kota}>
                <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.um}>
            <div className={styles.Text1}>
              <div className="p">
                <p >Need Help</p>
              </div>
              <div className={styles.kop}>
                <div className={styles.contact}> <h3>Contact use</h3></div>
                <div className={styles.contact}> <h3>Track Order</h3></div>
                <div className={styles.contact}> <h3>Returns & Refunds</h3></div>
                <div className={styles.contact}> <h3>FAQ,s</h3></div>
                <div className={styles.contact}> <h3>Carreer</h3></div>
              </div>
            </div>
            <div className={styles.Text1}>
              <div className="p">
                <p >Company</p>
              </div>
              <div className={styles.kop}>
                <div className={styles.contact}> <h3>About us</h3></div>
                <div className={styles.contact}> <h3>euphoria Blog</h3></div>
                <div className={styles.contact}> <h3>euphoriastan</h3></div>
                <div className={styles.contact}> <h3>Collaboration</h3></div>
                <div className={styles.contact}> <h3>Media</h3></div>
              </div>
            </div>
            <div className={styles.Text1}>
              <div className="p">
                <p >More Info</p>
              </div>
              <div className={styles.kop}>
                <div className={styles.contact}> <h3>Term and Conditions</h3></div>
                <div className={styles.contact}> <h3>Privacy Policy</h3></div>
                <div className={styles.contact}> <h3>Shipping Policy</h3></div>
                <div className={styles.contact}> <h3>Sitemap</h3></div>
                <div className={styles.contact}> <h3>Site   </h3></div>
              </div>
            </div>
            <div className={styles.Text1}>
              <div className="p">
                <p >Location</p>
              </div>
              <div className={styles.kop}>
                <div className={styles.contact}> <h3>support@euphoria.in</h3></div>
                <div className={styles.contact}> <h3>Eklingpura Chouraha, Ahmedabad Main Road</h3></div>
                <div className={styles.contact}> <h3>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</h3></div>
                <div className={styles.contact}> <h3>Order</h3></div>
                <div className={styles.contact}> <h3>Sport@aephpria</h3></div>
              </div>
            </div>
          </div>
          <div className={styles.instala}>
            <div className={styles.insta}>
              <Image className={styles.TwoCard} src='/tort.svg' alt="tasvir" width={178} height={38} />
            </div>
            <div className={styles.togrisi}>
              <h2>Download The App </h2>
              <div className="imi">
                <Image className={styles.TwoCard} src='/play.svg' alt="tasvir" width={328} height={53} />
              </div>
            </div>
          </div>
          <div className={styles.popular}>
            <p>Popular Category</p>
          </div>
        </div>
      </div>
    </>
  );

}
