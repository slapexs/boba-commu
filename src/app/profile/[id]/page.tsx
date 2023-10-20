import React from "react"
import avatar from "../../../../public/favicon.png"

import CardPost from "@/components/CardPost"
import UserProfileHeader from "@/components/UserProfileHeader"

type Props = {}

export default function Profile({}: Props) {
	return (
		<>
			<main className="w-full">
				<UserProfileHeader avatar={avatar} />
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
