'use client'

import { useState, forwardRef, Ref, ReactNode, CSSProperties, useRef } from "react"
import clsx from 'clsx'

type Member = {
  name?: string;
  title?: string;
  image?: string;
  content: ReactNode;
}

type Props = {
  members: Member[];
  itemsPerRow?: number;
  mobileItemsPerRow?: number;
  highlightColor?: string;
  thumbnailTextColor?: string;
  className?: string;
}

export const Team = forwardRef((
  { members, className, highlightColor, thumbnailTextColor, itemsPerRow = 3, mobileItemsPerRow = 2 }: Props, 
  ref: Ref<HTMLDivElement>
) => {
  const fadeInDuration = 500
  const [activeMember, setActiveMember] = useState(0)
  const [visibleMembers, setVisibleMembers] = useState([0])

  const changeActiveMember = (index:number) => {
    const prevActiveIndex = activeMember

    const newVisibleMembers = [...visibleMembers, index]

    setVisibleMembers(newVisibleMembers)

    setTimeout(() => {
      setActiveMember(index)

      setTimeout(() => {
        setVisibleMembers(newVisibleMembers.filter(thisIndex => thisIndex !== prevActiveIndex))
      }, fadeInDuration * 2)
    }, 10)
  }

  return (
    <div className={clsx("w-full", className)} ref={ref}>
      <div className="relative h-96">
        {members.map((member, index) => {
          if (!visibleMembers.includes(index)) return null

          return (
            <div key={index} 
              className={`absolute ${index !== activeMember ? 'opacity-0' : 'opacity-100'}
                transition-opacity duration-[var(--fadeDuration)] w-full`}
                style={{
                  "--fadeDuration": `${fadeInDuration}ms`,
                } as CSSProperties}>
                {member.content}
            </div>
          )
        })}
      </div>
      <div className="p-4">
        <ul className={`grid grid-cols-[var(--mobileItemsPerRow)] lg:grid-cols-[var(--itemsPerRow)] gap-x-4 gap-y-8 px-16 justify-items-center`}
          style={{ 
            "--itemsPerRow": `repeat(${itemsPerRow}, minmax(0, 1fr))`,
            "--mobileItemsPerRow": `repeat(${mobileItemsPerRow}, minmax(0, 1fr))`, 
          } as CSSProperties}>
          {members.map((member, index) => (
            <li key={index} className={`max-w-48 text-center 
              border ${index === activeMember ? "border-[var(--highlightColor)]" : "border-transparent"} border-2 
              p-2 rounded-md cursor-pointer transition-colors duration-300`}
              style={{ 
                "--highlightColor": highlightColor,
                "--textColor": thumbnailTextColor,
              } as CSSProperties}
              onClick={() => changeActiveMember(index)}>
              <img className="rounded-full mx-auto" src={member.image}
                style={{maxWidth: "60%"}} />
              <h3 className="text-sm font-bold text-[var(--textColor)]">{member.name}</h3>
              <p className="text-sm text-[var(--textColor)]">{member.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Team