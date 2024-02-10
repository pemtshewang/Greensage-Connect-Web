"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import Icons from "../Icons";

const getUsersJoinedCount = async () => {
  const res = await fetch("");
  const count = await res.json();
  return count;
}

export const UsersJoinedCard = () => {
  const [usersCount, setUsersCount] = useState<number>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    getUsersJoinedCount().then((res) => {
      setUsersCount(res);
    })
  }, [])
  return (
    <Card className="w-[200px] h-24 relative">
      <CardHeader className="p-3 font-semibold">Users Joined</CardHeader>
      <CardContent className="p-12">
        <h3 className="font-bold absolute bottom-0 right-0 text-3xl font-mono m-2">0</h3>
      </CardContent>
    </Card>
  )
}

export const UsersOnlineCard = () => {
  const [usersCount, setUsersCount] = useState<number>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    getUsersJoinedCount().then((res) => {
      setUsersCount(res);
    })
  }, [])
  return (
    <Card className="w-[200px] h-24  relative">
      <CardHeader className="p-3 font-semibold">Users Online</CardHeader>
      <CardContent className="p-3 ">
        <h3 className="font-bold absolute bottom-0 right-0 text-3xl font-mono m-2">0</h3>
      </CardContent>
    </Card>
  )
}

export const RecentlyJoinedList = () => {
  return (
    <Card className="container h-24  relative min-h-[30vh]">
      <CardHeader className="p-1 font-semibold">
        <span className="flex space-x-3">
          <h3>Users Recently Joined</h3>
          <Icons.usersJoined />
        </span>
      </CardHeader>
      <CardContent className="p-3">
        <div className="container flex-col justify-center space-y-2">
          <Icons.emptyUsers className="w-8 h-8 mx-auto" />
          <p className="text-muted-foreground text-center">No users have registered yet! You may invite them</p>
        </div>
      </CardContent>
    </Card>
  )
}
