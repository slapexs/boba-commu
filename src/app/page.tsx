import CardPost from "@/components/CardPost"
import React from "react"

const Home = () => {
	const elem = [1, 2, 3, 4]
	return (
		// Feed layout
		<>
			<main className="min-h-screen py-24 w-screen flex justify-center">
				<div className="w-11/12 grid grid-cols-5 grid-flow-row-dense gap-x-5 ">
					{/* Feed */}
					<aside className="col-span-3 gap-y-10 grid">
						{elem.map((elem, index) => {
							return <CardPost key={index} />
						})}
					</aside>

					{/* Action control */}
					<aside>
						<div className="fixed">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
							aut nostrum ipsam nam amet provident voluptas repellendus id
							minima maxime minus inventore laborum neque natus at tempore
							voluptatibus illo? Deserunt.
						</div>
					</aside>
				</div>
			</main>
		</>
	)
}

export default Home
