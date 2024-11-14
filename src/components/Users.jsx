import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import User from './User';
import Pagination from './Pagination';
import paginate from '../utils/paginate';
import SearchStatus from './SearchStatus';
import GroupList from './GroupList';
import API from '../API';

function Users({ users, onDelete, onBookmark }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState(null);
  const PAGE_SIZE = 4;

  useEffect(() => {
    API.proffesions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const clearFilter = () => {
    setSelectedProf(null);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };
  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession._id === selectedProf._id)
    : users;
  const usersCrop = paginate(filteredUsers, currentPage, PAGE_SIZE);
  const usersCount = filteredUsers.length;

  return (
    <div className="relative overflow-x-auto">
      <SearchStatus usersCount={usersCount} />
      {professions && (
        <>
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button
            className="bg-gray-500 text-white rounded-md mb-2 hover:bg-gray-600 mt-2 px-3 py-2"
            onClick={clearFilter}
          >
            Clear
          </button>
        </>
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
        itemsCount={usersCount}
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
