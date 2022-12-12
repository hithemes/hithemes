import { Fragment, useState } from 'react'
import Head from 'next/head'
import cn from 'classnames'
import { Transition, Tab, Dialog } from '@headlessui/react'
import Layout from '../components/layout'
import Avatar from '../components/Avatar'
import { TAB_MENU, PRODUCT_LIST, BILLING_LIST } from '../constants'
import {
  Documents,
  Download,
  Check,
  XIcon,
  Back,
  Stars,
  Pen
} from '../components/Icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [isReview, setIsReview] = useState(false)
  return (
    <Layout>
      <Head>
        <title>HiThemes | High-Quality Premium Themes Dashboard</title>
        <meta
          name="description"
          content="High-Quality Premium Themes Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[480px] bg-[linear-gradient(111.12deg,_#176257_-7.37%,_rgba(23,_98,_87,_0)_53.44%),radial-gradient(25.07%_77.97%_at_86.32%_50.11%,_#458178_0%,_#004b40_100%)] bg-blend-multiply">
        <div className="max-w-screen-xl mx-auto pt-[167px]">
          <h1>Say hi Ismail 👋 this is your dashboard</h1>
          <Tab.Group>
            <Tab.List className="flex max-w-lg">
              {TAB_MENU.map((item) => (
                <Tab
                  key={item.id}
                  className={({ selected }) =>
                    classNames(
                      'w-full text-[#1B26F3] py-2.5 text-sm font-bold leading-5 border-b-2 border-[#1b26f3] focus:outline-none',
                      selected ? 'text-[#020984] border-[#020984]' : null
                    )
                  }
                >
                  {item.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl bg-white focus:outline-none">
                <div className="mt-12 mb-6">
                  <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                    Purchased Products List
                  </h2>
                  <p className="text-gray-600 text-sm tracking-[-0.5px]">
                    Say hi 👋 to all the products you purchase.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="text-[#030CB0] sm:pl-6 py-3.5 pl-4 pr-3 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              About
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Version
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Licence Key
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold tracking-[-0.4px]"
                            >
                              Download
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {PRODUCT_LIST.map((item) => (
                            <tr key={item.email}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center lg:gap-3">
                                  <div className="hidden lg:block w-10 h-10">
                                    <Avatar src={item.image} alt={item.name} />
                                  </div>
                                  <div>
                                    <div className="tracking-[-0.5px] font-medium text-gray-800">
                                      {item.name}
                                    </div>
                                    <div className="tracking-[-0.5px] text-gray-500">
                                      {item.website}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <div className="tracking-[-0.5px] font-semibold text-gray-800">
                                  {item.title}
                                </div>
                                <div className="tracking-[-0.5px] text-gray-500">
                                  {item.miniTitle}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span className="inline-flex items-center justify-center bg-white text-[#1B26F3] px-2.5 py-0.5 text-sm font-medium tracking-[-0.5px] leading-none border border-[#dadcff] rounded-full">
                                  {item.version}
                                </span>
                              </td>
                              <td className="whitespace-nowrap inline-flex items-center gap-3 px-3 py-4 text-sm font-medium tracking-[-0.5px] text-[#020984]">
                                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#F2F3FF] rounded-full">
                                  <Documents className="w-5 h-5 text-[#1B26F3]" />
                                </span>
                                {item.licence}
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                                <a
                                  href="#"
                                  className="flex items-center justify-center text-gray-600 text-center"
                                >
                                  <Download className="w-5 h-5 text-gray-600" />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white focus:outline-none">
                <div className="mt-12 mb-6">
                  <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                    Billing History
                  </h2>
                  <p className="text-gray-600 text-sm tracking-[-0.5px]">
                    Companies that have purchased a subscription.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="text-[#030CB0] sm:pl-6 py-3.5 pl-4 pr-3 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold tracking-[-0.4px]"
                            >
                              Download Invoice
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {BILLING_LIST.map((item) => (
                            <tr key={item.id}>
                              <td className="text-gray-800 text-base font-medium tracking-[-0.5px] py-4 pl-4 pr-3 sm:pl-6 whitespace-nowrap">
                                {item.productName}
                              </td>
                              <td className="text-gray-800 text-sm font-medium tracking-[-0.5px] px-3 py-4 whitespace-nowrap">
                                {item.amount}
                              </td>
                              <td className="text-gray-800 text-sm font-medium tracking-[-0.5px] px-3 py-4 whitespace-nowrap">
                                {item.date}
                              </td>
                              <td className="inline-flex items-center gap-3 px-3 py-4 font-medium tracking-[-0.5px] whitespace-nowrap">
                                <span
                                  className={cn(
                                    `inline-flex items-center px-3 py-0.5 text-sm font-medium rounded-full`,
                                    item.status === 'Paid'
                                      ? 'bg-green-100 text-green-700'
                                      : null,
                                    item.status === 'Reject'
                                      ? 'bg-red-100 text-red-700'
                                      : null,
                                    item.status === 'Refund'
                                      ? 'bg-orange-100 text-orange-700'
                                      : null
                                  )}
                                >
                                  {item.status === 'Paid' ? (
                                    <Check className="w-4 h-4 text-green-500 mr-1.5" />
                                  ) : item.status === 'Reject' ? (
                                    <XIcon className="w-4 h-4 text-red-500 mr-1.5" />
                                  ) : item.status === 'Refund' ? (
                                    <Back className="w-4 h-4 text-orange-500 mr-1.5" />
                                  ) : null}
                                  {item.status}
                                </span>
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 font-medium sm:pr-6">
                                <a
                                  href="#"
                                  className="flex items-center justify-center text-center"
                                >
                                  <Download className="w-5 h-5 text-gray-600" />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white focus:outline-none">
                <div className="mt-12 mb-6">
                  <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                    Settings
                  </h2>
                  <p className="text-gray-600 text-sm tracking-[-0.5px]">
                    Update your itemal details and password here.
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white focus:outline-none">
                <div className="mt-12 mb-6">
                  <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                    Leave review & earn %10 bonus
                  </h2>
                  <p className="text-gray-600 text-sm tracking-[-0.5px]">
                    Earn bonuses with the comments you leave on our products.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="text-[#030CB0] sm:pl-6 py-3.5 pl-4 pr-3 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Your Product
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] px-3 py-3.5 text-sm font-semibold tracking-[-0.4px] text-left"
                            >
                              Your Review
                            </th>
                            <th
                              scope="col"
                              className="text-[#030CB0] py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold tracking-[-0.4px]"
                            >
                              Your Stars
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center lg:gap-3">
                                <div className="hidden lg:block w-10 h-10">
                                  <Avatar
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Halit Güvenilir"
                                  />
                                </div>
                                <div>
                                  <div className="tracking-[-0.5px] font-medium text-gray-800">
                                    HiThemes
                                  </div>
                                  <div className="tracking-[-0.5px] text-gray-500">
                                    hithemes.io
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-gray-600 px-3 py-4 text-sm tracking-[-0.5px] whitespace-nowrap md:whitespace-normal">
                              Beautiful theme. Love the design and features. I
                              have reached out to support a few times to make a
                              few small tweaks and they have gotten back to me
                              really quickly with exactly what I need.
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                              <a
                                href="#"
                                className="flex items-center justify-center gap-1"
                              >
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-gray-100" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center lg:gap-3">
                                <div className="hidden lg:block w-10 h-10">
                                  <Avatar
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Halit Güvenilir"
                                  />
                                </div>
                                <div>
                                  <div className="tracking-[-0.5px] font-medium text-gray-800">
                                    HiThemes
                                  </div>
                                  <div className="tracking-[-0.5px] text-gray-500">
                                    getcapsule.com
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-gray-600 px-3 py-4 text-sm tracking-[-0.5px] whitespace-nowrap md:whitespace-normal">
                              <button
                                type="button"
                                onClick={() => setIsReview(!isReview)}
                                className="inline-flex items-center justify-center gap-2 bg-[#0511F2] text-white px-3.5 py-2 border border-transparent rounded-md shadow-[0px 4px 15px rgba(3, 7, 108, 0.2);] text-base font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                              >
                                <Pen className="w-5 h-5" />
                                Leave Review
                              </button>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                              <a
                                href="#"
                                className="flex items-center justify-center gap-1"
                              >
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-yellow-400" />
                                <Stars className="w-5 h-5 text-gray-100" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Review Modal */}
                <Transition appear show={isReview} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsReview(!isReview)}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <button
                              type="button"
                              onClick={() => setIsReview(!isReview)}
                              className="absolute top-6 right-6"
                            >
                              <XIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
                            </button>
                            <div className="p-6">
                              <h3 className="text-gray-800 text-lg font-semibold tracking-sm">
                                Leave Review
                              </h3>
                              <p className="text-gray-600 text-sm tracking-sm">
                                {' '}
                                Share your review with us.
                              </p>
                            </div>
                            <div className="flex items-center justify-between bg-gray-50 py-4 px-6">
                              <div className="flex items-center lg:gap-3">
                                <div className="hidden lg:block w-10 h-10">
                                  <Avatar
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Halit Güvenilir"
                                  />
                                </div>
                                <div>
                                  <div className="tracking-[-0.5px] font-medium text-gray-800">
                                    HiThemes
                                  </div>
                                  <div className="tracking-[-0.5px] text-gray-500">
                                    getcapsule.com
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-gray-700 tracking-sm">
                                  Your Star
                                </span>
                                <a
                                  href="#"
                                  className="flex items-center justify-center gap-1"
                                >
                                  <Stars className="w-5 h-5 text-yellow-400" />
                                  <Stars className="w-5 h-5 text-yellow-400" />
                                  <Stars className="w-5 h-5 text-yellow-400" />
                                  <Stars className="w-5 h-5 text-yellow-400" />
                                  <Stars className="w-5 h-5 text-gray-100" />
                                </a>
                              </div>
                            </div>
                            <div className="p-6">
                              <form>
                                <div className="mb-8">
                                  <label
                                    htmlFor="yourReview"
                                    className="block text-gray-800 mb-2 text-sm font-semibold tracking-sm"
                                  >
                                    Your Review*
                                  </label>
                                  <div className="mt-1">
                                    <textarea
                                      id="yourReview"
                                      name="yourReview"
                                      rows={15}
                                      className="block w-full text-gray-500 p-3 border-gray-300 rounded-md placeholder:text-gray-500 focus:border-[#1B26F3] focus:ring-[#1B26F3]"
                                      placeholder="Type review..."
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <button
                                    type="button"
                                    className="inline-flex items-center justify-center w-full lg:w-auto bg-white text-gray-700 py-2.5 px-4 text-sm font-medium tracking-sm border border-gray-300 rounded-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    onClick={() => setIsReview(!isReview)}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex items-center justify-center w-full lg:w-auto bg-[#1B26F3] text-white py-2.5 px-4 text-sm font-medium tracking-sm border border-transparent rounded-md transition hover:bg-[#1B26F3] focus:outline-none focus:ring-2 focus:ring-[#1B26F3] focus:ring-offset-2"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </form>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white focus:outline-none">
                <div className="mt-12 mb-6">
                  <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                    Do you need support?
                  </h2>
                  <p className="text-gray-600 text-sm tracking-[-0.5px]">
                    Make a call for support about our products.
                  </p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  )
}
