import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState(``);
  const [registration, setRegistration] = useState(false);
  const [successfulReg, setSuccessfulReg] = useState(false);

  //   FETCH USER DETAILS (6 USERS PER FETCH REQUEST)
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      );
      const data = await response.json();

      if (data.success) {
        setLoading(false);
        setUsers((oldUsers) => {
          if (page === 1) {
            return data.users;
          } else {
            return [...oldUsers, ...data.users];
          }
        });
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [page]);

  //   FETCH USER POSITIONS

  const fetchPositions = async () => {
    try {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      );
      const data = await response.json();
      setPositions(data.positions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchPositions();
  }, [fetchUsers, successfulReg]);

  //   FETCH TOKEN FOR REGISTRATION
  const fetchToken = async () => {
    try {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );

      const data = await response.json();
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        users,
        positions,
        token,
        page,
        setPage,
        registration,
        setRegistration,
        successfulReg,
        setSuccessfulReg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
