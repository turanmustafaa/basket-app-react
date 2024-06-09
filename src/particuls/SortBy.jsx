import React from "react";
import { useDispatch } from 'react-redux';
import { sort } from '../features/products/ProductSlice';
import { useTranslation } from 'react-i18next';

const SortBy = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const sortByType = e.target.value;
    dispatch(sort({ sortByType }));
  };

  return (
    <section className="text-[#585858]">
      <label className="text-sm">{t('body.sortBy', 'Sort By')}</label>
      <div className="flex flex-col gap-2 bg-white shadow-md p-3">
        <div className="flex gap-2">
          <input
            type="radio"
            id="oldToNew"
            name="sortBy"
            value="oldToNew"
            onChange={handleSortChange}
          />
          <label htmlFor="oldToNew">{t('body.oldtoNew', 'Old To New')}</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="newToOld"
            name="sortBy"
            value="newToOld"
            onChange={handleSortChange}
          />
          <label htmlFor="newToOld">{t('body.newtoOld', 'New To Old')}</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="priceHighToLow"
            name="sortBy"
            value="priceHighToLow"
            onChange={handleSortChange}
          />
          <label htmlFor="priceHighToLow">{t('body.priceHighToLow', 'Price high to low')}</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="priceLowToHigh"
            name="sortBy"
            value="priceLowToHigh"
            onChange={handleSortChange}
          />
          <label htmlFor="priceLowToHigh">{t('body.priceLowtoHigh', 'Price low to high')}</label>
        </div>
      </div>
    </section>
  );
};

export default SortBy;
