import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import User from './User';
import Pagination from './Pagination';
import paginate from '../utils/paginate';
import GroupList from './GroupList';
import API from '../API';

function Users({ users, onDelete, onBookmark }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const count = users.length;
  const PAGE_SIZE = 4;

  useEffect(() => {
    API.proffesions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleProfessionSelect = (params) => {
    console.log(params);
  };

  const usersCrop = paginate(users, currentPage, PAGE_SIZE);

  return (
    <div className="relative overflow-x-auto">
      {professions && (
        <GroupList items={professions} onItemSelect={handleProfessionSelect} />
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ім&apos;я
            </th>
            <th scope="col" className="px-6 py-3">
              Якості
            </th>
            <th scope="col" className="px-6 py-3">
              Професія
            </th>
            <th scope="col" className="px-6 py-3">
              Зустрівся разів
            </th>
            <th scope="col" className="px-6 py-3">
              Оцінка
            </th>
            <th scope="col" className="px-6 py-3">
              Обраний
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {usersCrop.map((user) => {
            return (
              <User
                key={user._id}
                {...user}
                onBookmark={onBookmark}
                isBookmarked={user.bookmark}
                onDelete={onDelete}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={PAGE_SIZE}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}
Users.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func,
  onBookmark: PropTypes.func
};

export default Users;
