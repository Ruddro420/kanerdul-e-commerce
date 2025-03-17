import React from 'react';

const Account = () => {
    return (
        <div>
            <section className="bg-white py-8 antialiased md:py-8">
                <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:mb-6">General overview</h2>
                    <div className="py-4 md:py-8">
                        <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                            <div className="space-y-4">
                                <div className="flex space-x-4">
                                    <img className="h-16 w-16 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar" />
                                    <div>
                                        <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800"> PRO Account </span>
                                        <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 sm:text-2xl">Helene Engels</h2>
                                    </div>
                                </div>
                                <dl>
                                    <dt className="font-semibold text-gray-900">Email Address</dt>
                                    <dd className="text-gray-500">helene@example.com</dd>
                                </dl>
                                <dl>
                                    <dt className="font-semibold text-gray-900">Home Address</dt>
                                    <dd className="flex items-center gap-1 text-gray-500">
                                        <svg className="hidden h-5 w-5 shrink-0 text-gray-400 lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                                        </svg>
                                        2 Miles Drive, NJ 071, New York, United States of America
                                    </dd>
                                </dl>
                            </div>
                            <div className="space-y-4">
                                <dl>
                                    <dt className="font-semibold text-gray-900">Phone Number</dt>
                                    <dd className="text-gray-500">+1234 567 890 / +12 345 678</dd>
                                </dl>
                                <dl>
                                    <dt className="font-semibold text-gray-900">My Companies</dt>
                                    <dd className="text-gray-500">FLOWBITE LLC, Fiscal code: 18673557</dd>
                                </dl>
                            </div>
                        </div>
                        <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto">
                            Logout
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Account;
