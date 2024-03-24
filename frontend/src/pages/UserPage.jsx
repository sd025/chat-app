import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import useGetUserProfile from "../hooks/useGetUserProfile";

const UserPage = () => {
  const { user, loading } = useGetUserProfile();
  const { username } = useParams();

  useEffect(() => {
    if (!user) return;
  }, [username, user]);

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  if (!user && !loading) return <h1>User not found</h1>;

  return (
    <>
      <UserHeader user={user} />
    </>
  );
};

export default UserPage;
