import React from "react"

export default function PostForm() {
	return (
		<>
			<main className="sticky top-24">
				<h1 className="text-xl opacity-60 ">แชร์เรื่องราวสักหน่อยไหม?</h1>

				<section className="mt-4">
					<textarea
						name="post_content"
						id="post_content"
						className="textarea textarea-bordered textarea-lg w-full"
					></textarea>

					<div className="flex justify-end mt-2">
						<button type="button" className="btn btn-primary text-base-100">
							โพสต์
						</button>
					</div>
				</section>
			</main>
		</>
	)
}
