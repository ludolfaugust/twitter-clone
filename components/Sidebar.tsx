import React from 'react'
import { BellIcon, HashtagIcon, BookmarkIcon, CircleStackIcon, EllipsisHorizontalIcon, EnvelopeIcon, UserIcon, HomeIcon   } from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'


function Sidebar() {
  return (
    <div className="flex flex-col col-span-2">
        <img className="h-10 w-10" src="https://links.papareact.com/drq" />
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Hashtag"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={EnvelopeIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CircleStackIcon} title="Lists"/>
        <SidebarRow Icon={UserIcon} title="User"/>
        <SidebarRow Icon={EllipsisHorizontalIcon} title="More"/>
    </div>
  )
}

export default Sidebar

