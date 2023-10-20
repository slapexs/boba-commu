import CardPost from "@/components/CardPost"
import PostForm from "@/components/PostForm"
import React from "react"

const Home = () => {
	const elem = [1, 2, 3, 4]
	return (
		// Feed layout
		<>
			<main className="min-h-screen w-screen flex justify-center">
				<div className="grid grid-cols-12 p-24 gap-x-5">
					{/* Feed */}
					<aside className="grid gap-y-10 col-span-8">
						{elem.map((elem, index) => {
							return <CardPost key={index} />
						})}
					</aside>

					{/* Action control */}
					<aside className="col-span-4">
						<PostForm />
					</aside>
				</div>
			</main>
		</>
	)
}

export default Home
