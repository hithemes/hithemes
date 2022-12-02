import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Layout from '../components/layout'
import Avatar from '../components/Avatar'
import { TAB_MENU, PRODUCT_LIST } from '../constants'
import { Documents, Download } from '../components/Icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
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
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-40">
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
                                <div className="hidden lg:block">
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
    </Layout>
  )
}
