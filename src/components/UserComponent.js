import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/slices/userSlice";

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div class="box">
      <h2 class="userdetail"> User Details </h2>
      {userData?.map((item) => (
        <div key={item.id} class="card">
          <span class="nama">Name: {item.name}</span>
          <span class="min"> - </span>
          <span class="email">Email: {item.email}</span>
        </div>
      ))}
    </div>
  );
}

export default UserComponent;
