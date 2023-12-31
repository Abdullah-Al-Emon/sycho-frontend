import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/image/logo.png';
import msg from '../../assets/image/sycho-psd.png';
import { Icon } from '@iconify/react';
import Menu from './Menu';


const menu = [
    {
        name: 'home',
        isActive: false,
        id: 1,
        subMenu: [
            {
                id: 1,
                name: 'home1',
                isActive: false,
            },
            {
                id: 2,
                name: 'home2',
                isActive: false,
            },
            {
                id: 3,
                name: 'home3',
                isActive: false,
            },
        ]
    },
    {
        name: 'pages',
        isActive: false,
        id: 2,
        subMenu: [
            {
                id: 1,
                name: 'page1',
                isActive: false,
            },
            {
                id: 2,
                name: 'page2',
                isActive: false,
            },
            {
                id: 3,
                name: 'page3',
                isActive: false,
            },
        ]
    },
    {
        name: 'services',
        isActive: false,
        id: 3,
        subMenu: [
            {
                id: 1,
                name: 'service1',
                isActive: false,
            },
            {
                id: 2,
                name: 'service2',
                isActive: false,
            },
            {
                id: 3,
                name: 'service3',
                isActive: false,
            },
        ]
    },
    {
        name: 'case',
        isActive: false,
        id: 4,
        subMenu: [
            {
                id: 1,
                name: 'case1',
                isActive: false,
            },
            {
                id: 2,
                name: 'case2',
                isActive: false,
            },
            {
                id: 3,
                name: 'case3',
                isActive: false,
            },
        ]
    },
    {
        name: 'article',
        isActive: false,
        id: 5,
        subMenu: [
            {
                id: 1,
                name: 'article1',
                isActive: false,
            },
            {
                id: 2,
                name: 'article2',
                isActive: false,
            },
            {
                id: 3,
                name: 'article3',
                isActive: false,
            },
        ]
    },
    {
        name: 'Contact',
        isActive: false,
        id: 6
    },
]
const Header = () => {
    const [sticky, setSticky] = useState('');
    const [menus, setMenus] = useState([...menu])
    const [sideBar, setSideBar] = useState(false);
    const [menuBar, setMenuBar] = useState(false);
    // const [open, setOpen] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }

    const handleMenuBar = () => {
        setMenuBar(!menuBar)
    }



    useEffect(() => {
        const headerSticky = () => {
            if (window.scrollY >= 90) {
                setSticky('sticky')
            } else {
                setSticky('')
            }
        };
        window.addEventListener('scroll', headerSticky);
    }, []);



    const handleAddedMenu = (id) => {
        // setOpen(!open)
        const findItem = menus.findIndex((item) => item.id === id)
        // console.log(findItem, menus[findItem]['isActive'])
        setMenus((prev) => {
            let temp=prev
            // console.log('prev',prev[findItem]['isActive'])
            temp[findItem] = {
                ...prev[findItem],
                isActive: !temp[findItem].isActive
            }
            return temp
        })
        console.log(menus)
    }
    return (
        <>
            <div className={`header-section ${sticky}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-6">
                            <div className="header-logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 d-none d-lg-block">
                            <div className="header-left">
                                <div className="header-menu">
                                    <ul>
                                        <li className='fast'>
                                            <a className='link' href="#">Home+</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className='link' href="#">Pages+</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Pages 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Pages 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">Pages 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className='link' href="#">services+</a>
                                            <ul>
                                                <li>
                                                    <a href="#">services 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">services 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">services 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className='link' href="#">Case Studies+</a>
                                            <ul>
                                                <li>
                                                    <a href="#">case studies 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">case stuies 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">case studies 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className='link' href="#">Article+</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Article 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Article 2</a>
                                                </li>
                                                <li>
                                                    <a href="#">Article 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className='link' href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="header-right">
                                <span><Icon height={30} icon="ph:phone-call-thin" /></span>
                                <p className='p-number'><a href="#">+1 (202) 588-6500</a></p>
                                <span onClick={handleMenuBar} className='mobile-menu-icon'><Icon height={32} icon="ri:menu-2-fill" /></span>
                                <span onClick={handleSideBar} className='sidebar-menu'><Icon height={28} icon="ri:menu-2-fill" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-sidebar">
                <div className={`overlay ${sideBar || menuBar ? 'active' : ''}`}></div>
                <div className={`menu-sidebar ${menuBar ? 'active' : ''}`}>
                    <span onClick={handleMenuBar} className='cross'><Icon height={30} icon="radix-icons:cross-1" /></span>
                    <div className="menu-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header-menu">
                        <Menu/>
                        {/* <ul>
                            {
                                menus.map((item,idx) => (
                                    <li onClick={() => handleAddedMenu(item.id)} className='m-li' key={idx}>
                                        <a className='link' href="#">{item.name}+
                                            {
                                                item.subMenu && (
                                                    <span><Icon height={22} icon="icon-park-outline:down" /></span>
                                                )}
                                        </a>
                                        {
                                            item.subMenu && (
                                                <ul className={item.isActive ? 'active' : ''}>
                                                    {
                                                        item.subMenu.map(submenu => (
                                                            <li >
                                                                <a href="#">{submenu.name}</a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }


                                    </li>
                                ))
                            } */}
                            {/* <li className='m-li'>
                <a className='link' href="#">Home+
                  <span><Icon height={22} icon="icon-park-outline:down" /></span>
                </a>
                <ul>
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li className='m-li'>
                <a className='link' href="#">Pages+
                  <span><Icon height={22} icon="icon-park-outline:down" /></span>
                </a>
                <ul>
                  <li>
                    <a href="#">Pages 1</a>
                  </li>
                  <li>
                    <a href="#">Pages 2</a>
                  </li>
                  <li>
                    <a href="#">Pages 3</a>
                  </li>
                </ul>
              </li>
              <li className='m-li'>
                <a className='link' href="#">services+
                  <span><Icon height={22} icon="icon-park-outline:down" /></span>
                </a>
                <ul>
                  <li>
                    <a href="#">services 1</a>
                  </li>
                  <li>
                    <a href="#">services 2</a>
                  </li>
                  <li>
                    <a href="#">services 3</a>
                  </li>
                </ul>
              </li>
              <li className='m-li'>
                <a className='link' href="#">Case Studies+
                  <span><Icon height={22} icon="icon-park-outline:down" /></span>
                </a>
                <ul>
                  <li>
                    <a href="#">case studies 1</a>
                  </li>
                  <li>
                    <a href="#">case stuies 2</a>
                  </li>
                  <li>
                    <a href="#">case studies 3</a>
                  </li>
                </ul>
              </li>
              <li className='m-li'>
                <a className='link' href="#">Article+
                  <span><Icon height={22} icon="icon-park-outline:down" /></span>
                </a>
                <ul>
                  <li>
                    <a href="#">Article 1</a>
                  </li>
                  <li>
                    <a href="#">Article 2</a>
                  </li>
                  <li>
                    <a href="#">Article 3</a>
                  </li>
                </ul>
              </li>
              <li className='m-li'>
                <a className='link' href="#">Contact</a>
              </li> */}
                        {/* </ul> */}
                    </div>
                </div>
            </div>
            <div className="header-sidebar">
                <div className={`overlay ${sideBar || menuBar ? 'active' : ''}`}></div>
                <div className={`sidebar ${sideBar ? 'active' : ''}`}>
                    <span onClick={handleSideBar} className='cross'><Icon height={30} icon="radix-icons:cross-1" /></span>
                    <div className="sidebar-about">
                        <div className="sidebar-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="sidebar-about-content">
                            <p>Waters divided said aims kind seicond winged form it tree after female the deep a itself creepeth land bring place day sea don't may thing open who their midst to seas.</p>
                        </div>
                        <div className="sidebar-social">
                            <h4>Follow us</h4>
                            <div className='sidebar-icon'>
                                <span><Icon height={30} icon="ri:facebook-fill" /></span>
                                <span><Icon height={30} icon="ri:twitter-fill" /></span>
                                <span><Icon height={30} icon="formkit:pinterest" /></span>
                                <span><Icon height={30} icon="mdi:instagram" /></span>
                                <span><Icon height={30} icon="formkit:linkedin" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-touch">
                        <h3>Stay in Touch</h3>
                        <div className='sidebar-touch-desc'>
                            <p>Fruitful and herb the seasons of fish saying likeness face beas</p>
                            <div className='sidebar-input-div'>
                                <input placeholder='Email Address' type="text" />
                                <span><img src={msg} alt="" /></span>
                            </div>
                            <button><span><Icon height={22} icon="akar-icons:paper-airplane" /></span> Subscribe now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header