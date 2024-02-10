"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations/auth";
import Link from "next/link";
import { loginSchemaType } from "@/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Icons from "../Icons";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({ resolver: zodResolver(loginSchema) });
  const router = useRouter()
  const handleSubmittedData = async (data: loginSchemaType) => {
    setLoading(true);
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    setLoading(false);
    if (result?.status === 200) {
      toast.success("Login Successful");
      router.replace("/dashboard");
    } else {
      toast.error(`Error occurred while login with status:${result?.status}`);
    }
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <form
      onSubmit={handleSubmit(handleSubmittedData)}
    >
      <div className="flex-col justify-center items-center p-8 rounded-lg lg:min-w-[400px]">
        <div className="w-fit mx-auto">
          <Image className="w-56 h-56" src={logo} alt="logo" />
        </div>
        <div className="flex-col space-y-2">
          <div>
            <p>
              <Label className="">
                Username<b className="text-red-500">*</b>
              </Label>
            </p>
            <Input
              className="input w-full"
              placeholder="username"
              {...register("username")}
            />
            <p className="text-red-600 h-5">
              {errors.username ? errors.username.message : ""}
            </p>
          </div>
          <div>
            <p>
              <Label className="">
                Password<b className="text-red-500">*</b>
              </Label>
            </p>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className="w-full"
                placeholder="password"
                {...register("password")}
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2  -translate-y-1/2"
              >
                {showPassword ? (
                  <Icons.eyeOn className="h-5 w-5" />
                ) : (
                  <Icons.eyeOff className="h-5 w-5" />
                )}
              </Button>
            </div>
            <p className="text-red-600 h-5">
              {errors.password ? errors.password.message : ""}
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto mt-5">
          <Button
            className="bg-green-600 p-3 rounded-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="flex gap-1 justify-center ">
                <Icons.spinner className="animate-spin w-5 h-5" />
                <Label className="text-muted-foreground align-middle">Signing In</Label>
              </span>
            ) : (
              <span>
                <Label className="text-black">Login</Label>
              </span>
            )}
          </Button>
        </div>
        <div className="w-full flex">
          <div className="w-1/2 bg-black dark:bg-muted h-px my-auto"></div>
          <p className="p-2">OR</p>
          <div className="w-1/2 bg-black dark:bg-muted h-px my-auto"></div>
        </div>
        <div className="w-full flex justify-center">
          <Link className="link text-blue-500" href="/auth/signup">
            Don&apos;t have any account? Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
