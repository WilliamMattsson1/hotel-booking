import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[#F6F9FC]">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img
                        src={assets.logo}
                        alt="logo"
                        className="mb-4 h-8 md:h-9 invert opacity-80"
                    />
                    <p className="mt-6 text-sm">
                        Discover the world's most extraordinary places to stay,
                        from boutique hotels to luxuary villas and private
                        islands.
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <img
                            src={assets.instagramIcon}
                            alt="instagram"
                            className="w-6"
                        />
                        <img
                            src={assets.facebookIcon}
                            alt="facebook"
                            className="w-6"
                        />
                        <img
                            src={assets.twitterIcon}
                            alt="twitter"
                            className="w-6"
                        />
                        <img
                            src={assets.linkendinIcon}
                            alt="linkedin"
                            className="w-6"
                        />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-playfair font-semibold mb-5 text-gray-800">
                            Company
                        </h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-playfair font-semibold text-gray-800 mb-5">
                            Subscribe to our newsletter
                        </h2>
                        <div className="text-sm space-y-2">
                            <p>
                                The latest news, articles, and resources, sent
                                to your inbox weekly.
                            </p>
                            <div className="flex items-center gap-2 pt-4">
                                <input
                                    className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <button className="flex items-center justify-center bg-black h-9 text-white rounded w-9 my-auto ">
                                    <img
                                        src={assets.arrowIcon}
                                        alt="arrow icon"
                                        className="w-3.5 invert"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © QuickStay. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer
