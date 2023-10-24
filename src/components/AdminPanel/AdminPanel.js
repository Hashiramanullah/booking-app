import React from 'react'
import "./Admin.css"
export default function AdminPanel() {
  return (
    <div>
         <div className="sidebar">
    <div className="logo-details">
      <i className="bx bxl-c-plus-plus" />
      <span className="logo_name">HK Store</span>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#" className="active">
          <i className="bx bx-grid-alt" />
          <span className="links_name">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-box" />
          <span className="links_name">Product</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-list-ul" />
          <span className="links_name">Order list</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2" />
          <span className="links_name">Analytics</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-coin-stack" />
          <span className="links_name">Stock</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-book-alt" />
          <span className="links_name">Total order</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-user" />
          <span className="links_name">Team</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-message" />
          <span className="links_name">Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-heart" />
          <span className="links_name">Favrorites</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="links_name">Setting</span>
        </a>
      </li>
      <li className="log_out">
        <a href="#">
          <i className="bx bx-log-out" />
          <span className="links_name">Log out</span>
        </a>
      </li>
    </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn" />
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search" />
      </div>
      <div className="profile-details">
        <img src="/myPic.jpeg" alt="" />
        <span className="admin_name">Hashir Amanullah</span>
        <i className="bx bx-chevron-down" />
      </div>
    </nav>
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">40,876</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt" />
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart-alt cart" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Sales</div>
            <div className="number">38,876</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt" />
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bxs-cart-add cart two" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">$12,876</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt" />
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart cart three" />
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Return</div>
            <div className="number">11,086</div>
            <div className="indicator">
              <i className="bx bx-down-arrow-alt down" />
              <span className="text">Down From Today</span>
            </div>
          </div>
          <i className="bx bxs-cart-download cart four" />
        </div>
      </div>
      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Sales</div>
          <div className="sales-details">
            <ul className="details">
              <li className="topic">Date</li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
              <li>
                <a href="#">02 Jan 2021</a>
              </li>
            </ul>
            <ul className="details">
              <li className="topic">Customer</li>
              <li>
                <a href="#">Alex Doe</a>
              </li>
              <li>
                <a href="#">David Mart</a>
              </li>
              <li>
                <a href="#">Roe Parter</a>
              </li>
              <li>
                <a href="#">Diana Penty</a>
              </li>
              <li>
                <a href="#">Martin Paw</a>
              </li>
              <li>
                <a href="#">Doe Alex</a>
              </li>
              <li>
                <a href="#">Aiana Lexa</a>
              </li>
              <li>
                <a href="#">Rexel Mags</a>
              </li>
              <li>
                <a href="#">Tiana Loths</a>
              </li>
            </ul>
            <ul className="details">
              <li className="topic">Sales</li>
              <li>
                <a href="#">Delivered</a>
              </li>
              <li>
                <a href="#">Pending</a>
              </li>
              <li>
                <a href="#">Returned</a>
              </li>
              <li>
                <a href="#">Delivered</a>
              </li>
              <li>
                <a href="#">Pending</a>
              </li>
              <li>
                <a href="#">Returned</a>
              </li>
              <li>
                <a href="#">Delivered</a>
              </li>
              <li>
                <a href="#">Pending</a>
              </li>
              <li>
                <a href="#">Delivered</a>
              </li>
            </ul>
            <ul className="details">
              <li className="topic">Total</li>
              <li>
                <a href="#">$204.98</a>
              </li>
              <li>
                <a href="#">$24.55</a>
              </li>
              <li>
                <a href="#">$25.88</a>
              </li>
              <li>
                <a href="#">$170.66</a>
              </li>
              <li>
                <a href="#">$56.56</a>
              </li>
              <li>
                <a href="#">$44.95</a>
              </li>
              <li>
                <a href="#">$67.33</a>
              </li>
              <li>
                <a href="#">$23.53</a>
              </li>
              <li>
                <a href="#">$46.52</a>
              </li>
            </ul>
          </div>
          <div className="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div className="top-sales box">
          <div className="title">Top Seling Product</div>
          <ul className="top-sales-details">
            <li>
              <a href="#">
                <img src="/p1.png" alt="" />
                <span className="product">Vuitton Sunglasses</span>
              </a>
              <span className="price">$1107</span>
            </li>
            <li>
              <a href="#">
                <img src="/p7.png" alt="" />
                <span className="product">Hourglass Jeans </span>
              </a>
              <span className="price">$1567</span>
            </li>
            <li>
              <a href="#">
                <img src="/4.png" alt="" />
                <span className="product">Nike Sport Shoe</span>
              </a>
              <span className="price">$1234</span>
            </li>
            <li>
              <a href="#">
                <img src="/sec-4.jpg" alt="" />
                <span className="product">Hermes Silk Scarves.</span>
              </a>
              <span className="price">$2312</span>
            </li>
            <li>
              <a href="#">
                <img src="/ShowCart1.png" alt="" />
                <span className="product">Succi Ladies Bag</span>
              </a>
              <span className="price">$1456</span>
            </li>
            <li>
              <a href="#">
                <img src="/slide-1.png" alt="" />
                <span className="product">Gucci Womens's Bags</span>
              </a>
              <span className="price">$2345</span>
            </li>
            <li>
              <a href="#">
                <img src="/sec2.jpg" alt="" />
                <span className="product">Addidas Running Shoe</span>
              </a>
              <span className="price">$2345</span>
            </li>
            <li>
              <a href="#">
                <img src="sec-4.jpg" alt="" />
                <span className="product">Bilack Wear's Shirt</span>
              </a>
              <span className="price">$1245</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
