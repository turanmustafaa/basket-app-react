import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalPrice } from '../features/products/ProductSlice';
import { useTranslation } from 'react-i18next';

export default function TotalPrice() {
  const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const totalPrice = useSelector((state) => state.products.totalPriceBasket) || 0;

    useEffect(() => {
        const storedTotalPrice = localStorage.getItem('totalPrice');
        if (storedTotalPrice) {
            dispatch(updateTotalPrice(parseInt(storedTotalPrice)));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('totalPrice', totalPrice.toString());
    }, [totalPrice]);

    return (
        <div>
            <div className='w-full bg-white p-3 flex flex-col gap-2 shadow-sm min-w-44'>
                <div>
                    <span>Total Price :</span>
                    <span className='text-red-500 dark:text-black'>{totalPrice} ₺</span>
                </div>
                <button className='w-full py-1 bg-red-500 dark:bg-gray-400 text-white dark:text-gray-200'>{t('body.checkout', 'Check Out')}</button>
            </div>
        </div>
    );
}
