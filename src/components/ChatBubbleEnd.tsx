import React from "react"
import { StaticImageData } from "next/image"
import Image from "next/image"

type TProps = {
	user: string
	image: StaticImageData
	time: string
	comment: string
}

export default function ChatBubbleEnd({ user, image, time, comment }: TProps) {
	return (
		<div className="chat chat-end">
			<div className="chat-image avatar">
				<div className="w-10 mask mask-squircle">
					<Image
						alt="avatar"
						src={image}
						className="bg-primary mask mask-squircle"
					/>
				</div>
			</div>
			<div className="chat-header">
				{user}
				<time className="text-xs opacity-50 ml-2">{time}</time>
			</div>
			<div className="chat-bubble">{comment}</div>
		</div>
	)
}
