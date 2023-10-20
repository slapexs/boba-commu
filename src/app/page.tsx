import CardPost from "@/components/CardPost"
import PostForm from "@/components/PostForm"
import SuggestUser from "@/components/SuggestUser"
import React from "react"

const Home = () => {
	const elem = [1, 2, 3, 4]
	return (
		// Feed layout
		<>
			<div className="grid grid-cols-12 gap-x-5">
				{/* Feed */}
				<aside className="grid gap-y-10 col-span-8">
					{elem.map((elem, index) => {
						return <CardPost key={index} />
					})}
				</aside>

				{/* Action control */}
				<aside className="col-span-4">
					<div className="sticky top-24 grid gap-10">
						<PostForm />

						{/* Suggest user */}
						<SuggestUser />
					</div>
				</aside>
			</div>
		</>
	)
}

export default Home
