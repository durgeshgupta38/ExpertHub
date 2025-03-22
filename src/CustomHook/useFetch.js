import { useState, useEffect } from "react";
import { apiRequest } from "../ApiServices/CommonApi/api";

const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiRequest(endpoint, options.method, options.body, options.headers);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, options]);

  return { data, loading, error };
};

export default useFetch;

// import React from "react";
// import useFetch from "../hooks/useFetch";

// const UsersList = () => {
//   const { data: users, loading, error } = useFetch("/users");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default UsersList;
