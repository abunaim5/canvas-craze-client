import React, { useContext } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import {
    UserCircleIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import Switcher from "../Switcher/Switcher";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const profileMenuItems = [
    {
        label: "User",
        icon: UserIcon,
    },
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    },
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: RectangleGroupIcon,
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
    },
];

function ProfileMenu({ user, logOutUser }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLogoutUser = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "You are logged out",
                    icon: "success"
                });
            })
            .catch(error => console.error(error))
    }

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" >
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt={user.displayName}
                        className="border border-[#a55e3f] dark:border-[#C8CBD0] p-0.5"
                        src={user?.photoURL ? user.photoURL : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'}
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""} text-[#a55e3f] dark:text-[#C8CBD0]`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 rounded-none mt-[17px]">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const displayName = key === profileMenuItems.length - 6;
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu && isLastItem && handleLogoutUser}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 text-[#a55e3f] ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-semibold text-xs font-lato text-[#000000] uppercase tracking-widest"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {displayName ? user?.displayName : label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 text-xs font-semibold text-[#a55e3f] tracking-widest dark:text-[#C8CBD0] font-lato rounded-none uppercase"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Resources
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-none mt-[6px] lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    const {user} = useContext(AuthContext);
    // console.log(currentUser)

    const links = <>
        <NavLink to='/'><ListItem className="flex items-center gap-2 py-2 pr-4 text-xs font-semibold text-[#a55e3f] tracking-widest font-lato rounded-none dark:text-[#C8CBD0] uppercase">Home</ListItem></NavLink>
        <NavLink to='/allArtAndCraft'><ListItem className="flex items-center gap-2 py-2 pr-4 text-xs font-semibold text-[#a55e3f] tracking-widest font-lato rounded-none dark:text-[#C8CBD0] uppercase">All Art & Craft</ListItem></NavLink>
        <NavListMenu />
        <NavLink to='/addCraft'><ListItem className="flex items-center gap-2 py-2 pr-4 text-xs font-semibold text-[#a55e3f] tracking-widest font-lato rounded-none dark:text-[#C8CBD0] uppercase">Add Craft Item</ListItem></NavLink>
        {
            user && <NavLink to='/myCrafts'><ListItem className="flex items-center gap-2 py-2 pr-4 text-xs font-semibold text-[#a55e3f] tracking-widest font-lato rounded-none dark:text-[#C8CBD0] uppercase">My Art & Craft List</ListItem></NavLink>
        }
        <NavLink><ListItem className="flex items-center gap-2 py-2 pr-4 text-xs font-semibold text-[#a55e3f] tracking-widest font-lato rounded-none dark:text-[#C8CBD0] uppercase">Contact Us</ListItem></NavLink>
    </>

    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            {links}
        </List>
    );
}

const Header = () => {
    const { user, logOutUser, loading } = useContext(AuthContext);

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }

    return (
        <div>
            <Navbar className="mx-auto max-w-full px-8 py-4 bg-transparent backdrop-saturate-100 backdrop-blur-none bg-opacity-0 shadow-none border-b-2 border-dashed border-x-0 border-t-0 border-b-[#a55e3f] dark:border-b-[#C8CBD0] rounded-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to='/'><h1 className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl md:text-3xl font-semibold text-[#a55e3f] dark:text-[#C8CBD0]">CanvasCraze</h1></Link>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            {
                                user ? <ProfileMenu user={user} logOutUser={logOutUser} /> : <div className="hidden gap-2 lg:flex">
                                    <Link to='/login'><Button className="rounded-none tracking-widest font-lato hover:glass text-[#a55e3f] dark:text-[#C8CBD0]" variant="text" size="sm" >
                                        Log In
                                    </Button></Link>
                                    <Link to='/signUp'><Button className="rounded-none tracking-widest font-lato bg-[#a55e3f] dark:bg-[#C8CBD0] dark:text-[#000000] glass" size="sm">
                                        Sign Up
                                    </Button></Link>
                                </div>
                            }
                        </div>
                        <div>
                            <Switcher />
                        </div>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                    <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                        <Link to='/login'><Button className="rounded-sm" variant="outlined" size="sm" color="blue-gray" fullWidth>
                            Log In
                        </Button></Link>
                        <Link to='/signUp'><Button className="rounded-sm" variant="gradient" size="sm" fullWidth>
                            Sign Up
                        </Button></Link>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
};

ProfileMenu.propTypes = {
    user: PropTypes.object.isRequired,
    logOutUser: PropTypes.func.isRequired,
}

export default Header;