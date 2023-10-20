import React from "react"
import Image, { StaticImageData } from "next/image"
import StatProfile from "./StatProfile"
type Props = {
	avatar: StaticImageData
	disableEdit?: boolean
}

export default function UserProfileHeader({
	avatar,
	disableEdit = false,
}: Props) {
	return (
		<div className="flex gap-5">
			<div>
				<Image
					alt="avatar"
					src={avatar}
					width={128}
					height={128}
					className="mask mask-squircle bg-primary"
				/>
			</div>
			<div className="gap-3 flex flex-col">
				<h1 className="text-2xl mt-4 font-semibold">Firstname lastname</h1>
				<StatProfile />
				<button type="button" className="btn w-fit" disabled={disableEdit}>
					แก้ไขโปรไฟล์
				</button>
			</div>
		</div>
	)
}
