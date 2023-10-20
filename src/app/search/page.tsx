import ListSearchUser from "@/components/ListSearchUser"
import React from "react"

type Props = {}

export default function Search({}: Props) {
	return (
		<>
			<main className="w-full items-center flex flex-col">
				<div className="w-8/12">
					<div className="join w-full ">
						<input
							type="text"
							name="keyword"
							id="keyword"
							className="input input-lg input-bordered w-full join-item"
							placeholder="ค้นหาชาว Boba"
						/>

						<button
							type="button"
							className="join-item btn btn-primary text-white btn-lg"
						>
							ค้นหา
						</button>
					</div>
				</div>

				<div className="mt-5 w-8/12">
					<ListSearchUser />
				</div>
			</main>
		</>
	)
}
