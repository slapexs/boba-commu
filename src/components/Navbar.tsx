import React from "react"

import favicon from "../../public/favicon.png"
import Image from "next/image"

const Navbar = () => {
	return (
		<>
			<nav className="navbar bg-base-100 w-screen flex justify-center drop-shadow-sm">
				<main className="w-11/12">
					<div className="flex-1">
						<a className="font-bold normal-case text-3xl">BOBA</a>
					</div>
					<div className="flex-none">
						<ul className="menu menu-horizontal px-1 gap-x-5">
							<li>
								<input
									type="text"
									className="border border-primary-content"
									placeholder="ค้นหาชาว Boba"
								/>
							</li>
							<li>
								<details>
									<summary>Profile</summary>
									<ul className="p-2 bg-base-100">
										<li>
											<a>Edit profile</a>
										</li>
										<li>
											<a>Sign out</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</main>
			</nav>
		</>
	)
}

export default Navbar
