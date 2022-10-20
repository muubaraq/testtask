import React from "react";
import Button from "./Button";
import UserCard from "./UserCard";
import { useGlobalContext } from "./Context";
import Preloder from "./Preloder";

const Users = () => {
  const { loading, users, setPage, page } = useGlobalContext();

  return (
    <section className='users' id='users'>
      <h1>Working with GET request</h1>
      <div className='users-grid'>
        {users.map((user) => {
          return <UserCard {...user} key={user.id} />;
        })}
      </div>
      {loading && <Preloder />}
      {page <= 11 ? (
        <div className='users-btn'>
          <Button
            name={`Show more`}
            className={`btn`}
            onClick={() =>
              setPage((oldPage) => {
                return oldPage + 1;
              })
            }
          />
        </div>
      ) : null}
    </section>
  );
};

export default Users;
