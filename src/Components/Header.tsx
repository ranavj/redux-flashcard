/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react';
import {  NavLink } from 'react-router-dom';
import ROUTES from '../routes';
export default function Header() {
  return (
    <Popover className="relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10">
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <NavLink exact to={ROUTES.topicsRoute()}  className="text-base font-medium text-gray-500 hover:text-white" activeClassName="active">
              Topics
            </NavLink>
            <NavLink exact to={ROUTES.quizzesRoute()}  className="text-base font-medium text-gray-500 hover:text-white" activeClassName="active">
              Quizzes
            </NavLink>
            <NavLink exact to={ROUTES.newQuizRoute()}  className="text-base font-medium text-gray-500 hover:text-white" activeClassName="active">
              New Quizzes
            </NavLink>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  )
}
