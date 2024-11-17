import React from 'react'
import logo from '../assets/logo.png'
import DropDowns from './DropDowns'
import { RxDashboard } from "react-icons/rx";
import { AUTHENTICATION, CHART, DASHBOARD, FORM, MESSAGE_PRO, PAGE, TABLES, TASK, UI_ELEMENTS } from './utils';
import { FaCalendarAlt, FaWpforms } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { BsListTask } from "react-icons/bs";
import { CgFormatLeft } from "react-icons/cg";
import { GrTable } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md"
import { CiInboxIn, CiGrid31 } from "react-icons/ci";
import { TbInvoice } from "react-icons/tb";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import Options from './Options';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="app-name">
        <img src={logo} alt={`${logo}-logo`} />
        <h1>TailAdmin</h1>
      </div>
      <h3>MENU</h3>
      <DropDowns headName={'Dashboard'} logo={<RxDashboard />} subName={DASHBOARD} />
      <Options headName={'Calendar'} logo={<FaCalendarAlt />} />
      <Options headName={'Profile'} logo={<LuUser />} />
      <DropDowns headName={'Task'} logo={<BsListTask />} subName={TASK} />
      <DropDowns headName={'Forms'} logo={<CgFormatLeft />} subName={FORM} />
      <DropDowns headName={'Tables'} logo={<GrTable />} subName={TABLES} />
      <DropDowns headName={'Pages'} logo={<FaWpforms />} subName={PAGE} />
      <h3>SUPPORT</h3>
      <Options headName={'Messages'} logo={<MdOutlineEmail />} pro={MESSAGE_PRO} />
      <Options headName={'Inbox'} logo={<CiInboxIn />} pro={[{ id: 1, pro: 'Pro' }]} />
      <Options headName={'Invoice'} logo={<TbInvoice />} pro={[{ id: 1, pro: 'Pro' }]} />
      <h3>OTHERS</h3>
      <DropDowns headName={'Chart'} logo={<AiOutlinePieChart />} subName={CHART} />
      <DropDowns headName={'UI Elements'} logo={<CiGrid31 />} subName={UI_ELEMENTS} />
      <DropDowns headName={'Authentication'} logo={<IoLogInOutline />} subName={AUTHENTICATION} />
    </div>
  )
}

export default Sidebar