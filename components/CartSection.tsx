'use client';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    price: 'Rp 1.045.000',
    quantity: 1,
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
];

const CartSection = () => {
  return (
    <div className="absolute bottom-0 top-12 right-0">
      <div className="flex flex-col bg-white h-full">
        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
          <div>
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-20 w-20 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={product.imageSrc}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        width={200}
                        height={200}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                            <p>
                              <span className="text-red-500">
                                {product.price}
                              </span>
                            </p>
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>Rp 2.000.000,-</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
