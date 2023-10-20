import React from "react"
import Image from "next/image"
import StatProfile from "@/components/StatProfile"
import avatar from "../../../../public/favicon.png"

import CardPost from "@/components/CardPost"

type Props = {}

export default function Profile({}: Props) {
	return (
		<>
			<main className="w-full">
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
						<button type="button" className="btn  w-fit">
							แก้ไขโปรไฟล์
						</button>
					</div>
				</div>
				<div className="divider"></div>

				{/* My post */}
				<div className="w-full  flex justify-center">
					<div className="w-8/12 gap-y-10 grid">
						<CardPost showComment={false} />
						<CardPost showComment={false} />
						<CardPost showComment={false} />
						<CardPost showComment={false} />
						<CardPost showComment={false} />
					</div>
				</div>
			</main>
		</>
	)
}
