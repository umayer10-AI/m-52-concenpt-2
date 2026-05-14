"use client"
import { createData } from '@/lib/action';
import { Button, FieldError, Input, Label, ListBox,Select, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddPage = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const a = async (v) => {
        console.log(v)
        await createData(v)
    }

    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit(a)}
            className="p-6 space-y-8 w-1/2 mx-auto border border-pink-500 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label>Destination Name</Label>
                  <Input placeholder="Bali Paradise" className="rounded-2xl" {...register("destinationName", { required: true })}/>
                  <FieldError />
                </TextField>
              </div>

              <TextField name="country" isRequired>
                <Label>Country</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" {...register("country", { required: true })}/>
                <FieldError />
              </TextField>

              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        City
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                  {...register("price", { required: true })}
                />
                <FieldError />
              </TextField>

              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                  {...register("duration", { required: true })}
                />
                <FieldError />
              </TextField>

              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Departure Date</Label>
                  <Input type="date" className="rounded-2xl" {...register("departureDate", { required: true })}/>
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                    {...register("imageUrl", { required: true })}
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                    {...register("description", { required: true })}
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              className=" rounded-xl w-full bg-linear-to-br from-purple-500 to-pink-500 text-white"
            >
              Add destination
            </Button>
          </form>
        </div>
    );
};

export default AddPage;