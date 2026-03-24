import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'
import { useAppContext } from '../Context/AppContext';
const Navbar = ({ containerStyles, setMenuOpened }) => {
    const [open, setOpen] = React.useState(false);
    const { user, setUser, showUserLogin, setShowUserLogin, navigate, setSearchQuery, searchQuery } = useAppContext();

    const logout = async () => {
        setUser(false);
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/products")
        }
    }, [searchQuery])

    const navLinks = [
        { path: '/', title: 'Home' },
        { path: '/collection', title: 'Collection' },
        { path: '/testimonial', title: 'Testimonial' },
        { path: '/contact', title: 'Contact' },]
    return (
        <nav className="flex z-20 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to={'/'} onClick={() => setMenuOpen(false)}><img className='h-9' src={assets.logo} alt='dummyLoGo'></img></NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>All Product</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                {user &&
                    <NavLink to='/myOrder'> My Order</NavLink>}

                <div className="hidden lg:flex items-center text-sm gap-2 border border-primary px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-primary" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search" className='w-4 h-4' />
                </div>

                <div onClick={() => { navigate('/cart') }} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt='cart-icon' className='w-6 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ?
                    (<button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-6 py-2 bg-primary hover:bg-primaryDeep transition text-white rounded-full ">
                        Login
                    </button>)
                    : (
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10 '></img>
                            <ul className='hidden group-hover:inline-block absolute top-10 right-0 bg-white shadow border-gray-200 py-2.5 w-auto text-sm text-nowrap z-40 rounded-md'>
                                <li onClick={() => { navigate('/myOrder') }} className='p-1.5 pl-3 hover:bg-primary/10'>My Orders</li>
                                <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10'>Log out</li>
                            </ul>
                        </div>
                    )}



            </div>

            {/* Mobile Menu */}
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="menu" />
            </button>
            {open &&
                <div className={`absolute top-full left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink className='block' to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink className='block' to='/products' onClick={() => setOpen(false)}>All Product</NavLink>
                    {user &&
                        <NavLink className='block' to='/MyOrder' onClick={() => setOpen(false)}>My Orders</NavLink>
                    }
                    <NavLink className='block' to='/contact' onClick={() => setOpen(false)}>Contact</NavLink>
                    {!user ?
                        (<button onClick={() => { setOpen(false); setShowUserLogin(true); }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primaryDeep transition text-white rounded-full text-sm">
                            Login
                        </button>)
                        : (<button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primaryDeep transition text-white rounded-full text-sm">
                            Logout
                        </button>)}

                </div>
            }
        </nav>
    );
}

export default Navbar;
