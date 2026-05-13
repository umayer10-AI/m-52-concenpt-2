"use client"
import React, { useState } from 'react';
import {Check, Eye, EyeSlash} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    const {register,handleSubmit,formState: { errors }} = useForm()

    const a = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            callbackURL: "/",
        });

        if(data){
            toast.success("Data Successfully")
        }
        if(error){
            toast.error(error.message)
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <Form onSubmit={handleSubmit(a)} className="flex w-100 flex-col gap-4 p-5 border border-pink-500 rounded-xl">


      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" {...register("email", { required: true })}/>
        <FieldError />
      </TextField>


      <TextField className="w-full" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full"
          type={isVisible ? "text" : "password"}
          placeholder='password'
          {...register("password", { required: true })}
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
      <div className="flex gap-2">
        <Button type="submit" className={'w-full bg-linear-to-r from-orange-400 to-red-600'}>
          <Check />
          Login
        </Button>

      </div>
    </Form>
        </div>
    );
};

export default LoginPage;