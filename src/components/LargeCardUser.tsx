import React from "react"
import Image from "next/image"
import avatar from "../../public/favicon.png"

type TProps = {
	name: string
	username: string
	isFollow: boolean
}

export default function LargeCardUser({ name, username, isFollow }: TProps) {
	return (
		<>
			<div className="flex justify-between items-center bg-white p-3 rounded-lg">
				<div className="flex gap-3">
					<div>
						<Image
							alt="avatar"
							src={avatar}
							width={64}
							height={64}
							className="mask mask-squircle bg-secondary"
						/>
					</div>

					<div>
						<p className="font-semibold">{name}</p>
						<p className="opacity-60">{username}</p>
					</div>
				</div>

				<div>
					<button
						type="button"
						className={`btn glass btn-sm ${
							isFollow ? "btn-primary" : "btn-outline btn-primary"
						}`}
					>
						{isFollow ? "ติดตามแล้ว" : "ติดตาม"}
					</button>
				</div>
			</div>
		</>
	)
}
