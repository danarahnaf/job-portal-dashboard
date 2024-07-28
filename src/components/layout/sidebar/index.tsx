import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { MdMessage } from "react-icons/md";
import {
  FaHome,
  FaBuilding,
  FaEnvelopeOpen,
  FaCalendarAlt,
  FaListAlt,
  FaDoorOpen,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogOut, IoSettings } from "react-icons/io5";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="pb-12 win-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3 mt-6">
            <Button
              variant={"ghost"}
              className="w-full justify-start text-yellow-800 hover:text-yellow-400"
            >
              <FaHome className="text-yellow-500 mr-2 text-lg" />
              Home
            </Button>

            <Button
              variant={"ghost"}
              className="w-full justify-start text-yellow-800 hover:text-yellow-400"
            >
              <MdMessage className="text-yellow-500 mr-2 text-lg" />
              Message
            </Button>

            <Button
              variant={"ghost"}
              className="w-full justify-start text-yellow-800 hover:text-yellow-400"
            >
              <FaBuilding className="text-yellow-500 mr-2 text-lg" />
              Company Profile
            </Button>

            <Button
              variant={"ghost"}
              className="w-full justify-start text-yellow-800 hover:text-yellow-400"
            >
              <FaEnvelopeOpen className="text-yellow-500 mr-2 text-lg" />
              All Aplicant
            </Button>

            <Button
              variant={"ghost"}
              className="w-full justify-start text-yellow-800 hover:text-yellow-400"
            >
              <FaCalendarAlt className="text-yellow-500 mr-2 text-lg" />
              Job listing
            </Button>

            <Button
              variant={"ghost"}
              className="w-full justify-start text-yellow-800 hover:text-yellow-400"
            >
              <FaListAlt className="text-yellow-400 mr-2 text-lg" />
              Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Setting</h2>
            <div className="space-y-3 mt-6">
              <Button
                variant={"ghost"}
                className="w-full justify-start text-yellow-800 hover:text-yellow-400"
              >
                <FaGear className="text-yellow-500 mr-2 text-lg" />
                Settings
              </Button>

              <Button
                variant={"ghost"}
                className="w-full justify-start text-red-800 hover:text-red-400 hover:bg-red-50"
              >
                <FaDoorOpen className="text-red-500 mr-2 text-lg" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
