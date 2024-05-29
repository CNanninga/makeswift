'use client'

import { useState, forwardRef, Ref } from "react"

export const Team = forwardRef(({}, ref: Ref<HTMLDivElement>) => {
  const [activeMember, setActiveMember] = useState(0);

  const members = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Leslie Alexander",
      title: "Co-Founder / CEO",
      content: `
      <div className="flex gap-4 w-1/2 bg-slate-400 mx-auto">
      <div className="w-full p-8">
        <h2 className="text-xl font-bold">Leslie Alexander</h2>
        <p className="text-lg">Co-Founder / CEO</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi non arcu risus quis varius quam quisque id.</p>
      </div>
      <div className="w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
      `,
    },
    {
      img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Michael Foster",
      title: "Co-Founder / CTO",
      content: `
      <div className="flex gap-4 w-1/2 bg-slate-400 mx-auto">
      <div className="w-full p-8">
        <h2 className="text-xl font-bold">Michael Foster</h2>
        <p className="text-lg">Co-Founder / CTO</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi non arcu risus quis varius quam quisque id.</p>
      </div>
      <div className="w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
      `,
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Dries Vincent",
      title: "Business Relations",
      content: `
      <div className="flex gap-4 w-1/2 bg-slate-400 mx-auto">
      <div className="w-full p-8">
        <h2 className="text-xl font-bold">Dries Vincent</h2>
        <p className="text-lg">Business Relations</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi non arcu risus quis varius quam quisque id.</p>
      </div>
      <div className="w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
      `,
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Lindsay Walton",
      title: "Front-end Developer",
      content: `
      <div className="flex gap-4 w-1/2 bg-slate-400 mx-auto">
      <div className="w-full p-8">
        <h2 className="text-xl font-bold">Lindsay Walton</h2>
        <p className="text-lg">Front-end Developer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi non arcu risus quis varius quam quisque id.</p>
      </div>
      <div className="w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
      `,
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Courtney Henry",
      title: "Designer",
      content: `
      <div className="flex gap-4 w-1/2 bg-slate-400 mx-auto">
      <div className="w-full p-8">
        <h2 className="text-xl font-bold">Courtney Henry</h2>
        <p className="text-lg">Designer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi non arcu risus quis varius quam quisque id.</p>
      </div>
      <div className="w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
      `,
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Tom Cook",
      title: "Director of Product",
      content: `
      <div className="flex gap-4 w-1/2 bg-slate-400 mx-auto">
      <div className="w-full p-8">
        <h2 className="text-xl font-bold">Tom Cook</h2>
        <p className="text-lg">Director of Product</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Morbi non arcu risus quis varius quam quisque id.</p>
      </div>
      <div className="w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
      `,
    }
  ]

  return (
    <div className="m-8" ref={ref}>
      <div className="relative h-96">
        {members.map((member, index) => (
          <div key={index} 
            className={`absolute ${index !== activeMember ? 'opacity-0' : 'opacity-100'}
              transition-opacity duration-500`}
            dangerouslySetInnerHTML={{__html: member.content}}>
          </div>
        ))}
      </div>
      <div className="p-4">
        <ul className="grid grid-cols-4 gap-x-4 gap-y-8 px-16 justify-items-center">
          {members.map((member, index) => (
            <li key={index} className={`max-w-48 text-center 
              border ${index === activeMember ? "border-blue-800" : "border-transparent"} border-2 
              p-2 rounded-md cursor-pointer transition-colors duration-300`}
              onClick={() => setActiveMember(index)}>
              <img className="rounded-full mx-auto" src={member.img}
                style={{maxWidth: "60%"}} />
              <h3 className="text-sm font-bold">{member.name}</h3>
              <p className="text-sm">{member.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Team