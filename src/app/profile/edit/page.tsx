import React from "react"
import UserProfileHeader from "@/components/UserProfileHeader"
import avatar from "../../../../public/favicon.png"
import FormEditProfile from "@/components/FormEditProfile"
import FormEditPassword from "@/components/FormEditPassword"

export default function EditProfile() {
	return (
		<>
			<main className="w-full">
				<UserProfileHeader avatar={avatar} disableEdit={true} />
				<div className="divider"></div>

				{/* My post */}
				<div className="w-full  flex justify-center">
					<div className="w-8/12 gap-y-10 grid">
						<FormEditProfile />

						<FormEditPassword />
					</div>
				</div>
			</main>
		</>
	)
}
