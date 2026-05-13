"use client"
import React from 'react';
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Edit3, User } from 'lucide-react';

const EditProfle = () => {
    return (
        <div>
            <Modal>
      <Button className="w-full mt-2 rounded-xl gap-2 bg-linear-to-r from-cyan-600 to-blue-600">
            <Edit3 size={18} />
            Edit Profile
          </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className='flex justify-center items-center gap-2 flex-col'>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <User></User>
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
              </div>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="image" type="text">
                    <Label>Image</Label>
                    <Input placeholder="Enter your url" />
                  </TextField>

                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Update</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditProfle;