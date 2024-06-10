import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateFilteredProducts } from '../features/products/ProductSlice';
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products) || [];
    const totalPrice = useSelector((state) => state.products.totalPriceBasket) || 0;

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredProducts = products.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        dispatch(updateFilteredProducts(filteredProducts));
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="bg-red-500 dark:bg-gray-400 text-white dark:text-gray-200 p-2 flex justify-between items-center px-24">
            <div className="font-bold text-lg">
                <Link to={'/'}>SOLID ICT</Link>
            </div>
            <div className="relative">
                <input
                    type="text"
                    className="pl-10 pr-4 py-2 border text-black"
                    placeholder={t('header.searchPlaceHolder', 'Search...')}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <span className="mr-2"><FontAwesomeIcon className="text-white dark:text-gray-200" icon={faBriefcase} /></span>
                    <span>{t('header.totalPrice', 'Total Price')}: ${totalPrice}</span>
                </div>
                <div>
                    <span className="mr-2"><FontAwesomeIcon className="text-white dark:text-gray-200" icon={faUser} /></span>
                    <span>{t('header.user', 'User')}</span>
                </div>
                <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    {
                        theme === 'dark' ?
                        <span className="mr-2">{t('header.switchToLightMode', 'Switch to Light Mode')}</span>
                        : <span className="mr-2">{t('header.switchToDarkMode', 'Switch to Dark Mode')}</span>
                    }
                </div>
                <div>
                    <select 
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="p-2 rounded bg-blue-500 text-white dark:bg-blue-300"
                    >
                        <option value="en">English</option>
                        <option value="tr">Türkçe</option>
                    </select>
                </div>
            </div>
        </header>
    );
}
