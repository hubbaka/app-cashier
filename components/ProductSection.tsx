'use client';
import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: 'Rp 345.000,-',
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl2.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: 'Rp 1.045.000,-',
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl2.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl2.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: 'Rp 345.000,-',
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl2.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: 'Rp 1.045.000,-',
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl2.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl1.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Rp 235.000,-',
    imageSrc: '/cl2.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

const MenuModal = () => {
  return (
    <div className="absolute bottom-0 top-12 left-0 xl:left-10">
      <div className="bg-white h-full overflow-y-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-5 ml-0 lg:ml-12 xl:ml-0 2xl:ml-40 max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl">
          <div className="grid gap-y-10 gap-x-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6 2xl:grid-cols-6">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-28 lg:w-32 xl:w-44 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product?.imageSrc}
                    alt={product?.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
