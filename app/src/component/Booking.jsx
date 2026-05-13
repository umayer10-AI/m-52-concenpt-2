"use client"
import { AlertDialog, Button } from '@heroui/react';
import { Calendar, Eye, Tag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Booking = ({p}) => {
    console.log(p)
    return (
        <div>
            <div className='shadow-md shadow-cyan-500 rounded-xl'>
            <div className="border border-cyan-600 rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6 shadow-sm">
      

      <div className="w-full md:w-1/3 h-48 overflow-hidden rounded-sm">
        <Image height={100} width={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={p.imageUrl} 
          alt="Maldip" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 bg-green-200 text-green-600 px-3 py-1 rounded-full w-fit border border-green-100">
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-[10px]">✓</span>
          </div>
          <span className="text-sm font-medium">Confirmed</span>
        </div>

        <h2 className="text-3xl font-serif font-bold text-cyan-500">{p.destinationName}</h2>
        
        <div className="space-y-2 text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span className="text-sm font-medium">Departure: May 12, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={18} />
            <span className="text-sm font-medium">Category: {p.category} • Duration: 7 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={18} />
            <span className="text-sm font-medium">User: {p.description}</span>
          </div>
        </div>

        <div className="text-3xl font-semibold text-[#0ea5e9] pt-2">
          ${p.price}
        </div>
      </div>

      <div className="flex gap-3">
        <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={() => deleteBooking(p._id)} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#17a2b8] text-white rounded-sm hover:bg-[#138496] transition-colors font-medium">
          <Eye size={18} />
          View
        </button>
      </div>
            </div>
        </div>
        </div>
    );
};

export default Booking;