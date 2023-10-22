"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const Navbar = () => {
	const path = usePathname()
	const [showMenu, setShowMenu] = useState<boolean>(true)

	useEffect(() => {
		if (path == "/login" || path == "/register") {
			setShowMenu(false)
		} else {
			setShowMenu(true)
		}
	}, [path])

	return (
		<>
			<nav className="navbar bg-base-100 w-screen flex justify-center drop-shadow-sm fixed top-0 z-10">
				<main className="w-11/12">
					<div className="flex-1">
						<Link href="/" className="font-bold normal-case text-3xl">
							BOBA
						</Link>
					</div>
					<div className="flex-none">
						{showMenu && (
							<ul className="menu menu-horizontal px-1 gap-x-5">
								<li>
									<Link href="/search">ค้นหา</Link>
								</li>
								<li>
									<details>
										<summary>Profile</summary>
										<ul className="p-2 bg-base-100">
											<li>
												<Link href="/profile/1">โปรไฟล์</Link>
											</li>
											<li>
												<a>ออกจากระบบ</a>
											</li>
										</ul>
									</details>
								</li>
							</ul>
						)}
					</div>
				</main>
			</nav>
		</>
	)
}

export default Navbar
