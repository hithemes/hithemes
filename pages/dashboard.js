import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Head from 'next/head'
import Layout from '../components/layout'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabsMenu = [
  {
    id: 0,
    name: 'My Library'
  },
  {
    id: 1,
    name: 'Billing'
  },
  {
    id: 2,
    name: 'Settings'
  },
  {
    id: 3,
    name: 'Review'
  },
  {
    id: 4,
    name: 'Support'
  }
]

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
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 py-40">
        <Tab.Group>
          <Tab.List className="flex">
            {tabsMenu.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  classNames(
                    'w-full text-[#1B26F3] py-2.5 text-sm font-bold leading-5 border-b-2 border-[#1b26f3] focus:outline-none',
                    selected ? 'text-[#020984] border-[#020984]' : null
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="mt-12 mb-6">
                <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                  Purchased Products List
                </h2>
                <p className="text-gray-600 text-sm tracking-[-0.5px]">
                  Say hi 👋 to all the products you purchase.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="mt-12 mb-6">
                <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                  Billing History
                </h2>
                <p className="text-gray-600 text-sm tracking-[-0.5px]">
                  Companies that have purchased a subscription.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="mt-12 mb-6">
                <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                  Settings
                </h2>
                <p className="text-gray-600 text-sm tracking-[-0.5px]">
                  Update your personal details and password here.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="mt-12 mb-6">
                <h2 className="mb-1 text-2xl font-bold tracking-[-0.8px]">
                  Leave review & earn %10 bonus
                </h2>
                <p className="text-gray-600 text-sm tracking-[-0.5px]">
                  Earn bonuses with the comments you leave on our products.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
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
