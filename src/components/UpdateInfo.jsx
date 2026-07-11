'use client';

import { authClient } from '@/lib/auth-client';
import { Pencil } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { BiEdit } from 'react-icons/bi';
import { FaUser, FaUserCircle } from 'react-icons/fa';

export function UpdateInfo() {
   const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      const { data, error } = await authClient.updateUser({
         name: userData.name,
         image: userData.image,
      });
   };
   return (
      <Modal>
         <Button variant="primary">
            <BiEdit /> Update Profile
         </Button>

         <Modal.Backdrop>
            <Modal.Container placement="auto">
               <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />

                  <Modal.Header>
                     <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                        <FaUser className="size-5" />
                     </Modal.Icon>

                     <Modal.Heading>Update Profile</Modal.Heading>

                     <p className="mt-1.5 text-sm leading-5 text-muted">
                        Update your display name and profile image URL. Save your changes to keep
                        your profile information up to date.
                     </p>
                  </Modal.Header>

                  <Modal.Body className="p-6">
                     <Surface variant="default">
                        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                           <TextField
                              className="w-full"
                              name="name"
                              type="text"
                              variant="secondary"
                           >
                              <Label>Name</Label>
                              <Input placeholder="Enter your full name" />
                           </TextField>

                           <TextField
                              className="w-full"
                              name="image"
                              type="url"
                              variant="secondary"
                           >
                              <Label>Profile Image URL</Label>
                              <Input placeholder="https://example.com/profile.jpg" />
                           </TextField>
                           <Modal.Footer>
                              <Button slot="close" variant="secondary">
                                 Cancel
                              </Button>

                              <Button type="submit" slot="close">
                                 Save Changes
                              </Button>
                           </Modal.Footer>
                        </form>
                     </Surface>
                  </Modal.Body>
               </Modal.Dialog>
            </Modal.Container>
         </Modal.Backdrop>
      </Modal>
   );
}
